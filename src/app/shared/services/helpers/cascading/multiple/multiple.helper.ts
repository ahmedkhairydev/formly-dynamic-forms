import { AbstractControl } from "@angular/forms";
import { Cascading } from "src/app/shared/interfaces";
import { getFieldByIndex, isValidUrl } from "../base/cascading.helper";

/**
 * @description after splitting sourceUrl to base [till paramters=] and urlParams separated with
 * @param url => field url
 * @returns { baseUrl, urlParams }
 * to match api calling data
 */
const urlSplitter = (url: string) => {

    /** JUST FOR TEST - if the BE Return back the url with new query param */
    // let nurl = 'Value/GetBasicDynamicByListCode/DeviceModels?displayValue=UnitPrice&displayName={0}&parameters={1}'

    if (!url)
        return {
            baseUrl: '',
            urlParams: [],
        };

    const splitURl = (value: any, index: any) => {
        return [value.substring(0, index - 1), value.substring(index)];
    };

    const sourceUrl = splitURl(url, url.lastIndexOf('=') + 1);
    const baseUrl: string = sourceUrl[0];
    const urlParams: string[] = sourceUrl[1].split(',');
    return { baseUrl, urlParams };
};

/**
 * @description resetAllChildren() to reset the field children while we delete or change the parent value
 * @param children to be reseted
 * @param form form that has been opend
 * @param field child of the parent that we chage or delete it's value
 * @param parentValue parent to change or delete it's value
 */
const resetAllChildren = (children: any, form: any, field: any, parentValue: any) => {
    children.forEach((item: any) => {
        const childFormControl = form.get(item.name);
        const isChildHasOptions = field.options.length > 0;
        if (isChildHasOptions && !parentValue) field.options = [];
        childFormControl.reset();
    });
};

/**
 * @description reset field with it's children onDelete it's value or first time calling api
 * @param parent
 * @param form form that has been opend
 * @param fields all the fields parent and childrens
 * @param field child of the parent that we chage or delete it's value
 * @param fieldControl that we reset it's value
 */
const resetField = (parent: any, form: any, fields: any, field: any, fieldControl: any) => {
    const parentControl = form.get(parent.name);
    const parentValue = parentControl.value;
    const childrenIndexes: number[] = parent.cascadingChildrenIndexes;
    const children = childrenIndexes.map((index) =>
        getFieldByIndex({ index, fields })
    );

    resetAllChildren(children, form, field, parentValue);
    fieldControl.reset();
    field.options = [];
};

/**
 * @description reset children of control (before API Calling) on change it's value
 * @param parent that we work on
 * @param fields all the fields parent and childrens
 * @param form form that has been opend
 * @param field child of the parent that we chage or delete it's value
 * @param parent parent to change or delete it's value
 */
const resetChildren = (parent: any, fields: any, form: any, field: any) => {
    const childrenIndexes: number[] = parent.cascadingChildrenIndexes;
    const children = childrenIndexes.map((index) =>
        getFieldByIndex({ index, fields })
    );
    const resetChildValue = (child: any) => {
        const childFormControl = form.get(child.name);
        const childValues = childFormControl?.value;
        if (!childValues) return;
        childFormControl.reset();
        field.options = [];
    };
    children.forEach((child) => resetChildValue(child));
};

/**
 * @description  changeUrlToParentIndex() to replce params index by parentIndex
 * @param url
 * @returns
 * @changeUrlToParentIndex
 *
 */
const changeUrlToParentIndex = (url: string, parentIndexes: any): string => {
    return parentIndexes.reduce(
        (acc: any, crr: any, index: any) =>
            acc.replace(`{${index.toString()}}`, `{${crr.toString()}}`),
        url
    );
};

/**
 * @description item that rested with it's original index before api calling
 * @param params urls params of the request
 * @param currentParentIndex current parent index before changed
 * @returns item that it's url reseted
 *
 */
const resetUrlParams = (params: any, currentParentIndex: any) => {
    return params.map((item: any, index: any) => {
        if (index > currentParentIndex) return `{${index}}`;
        return item;
    });
};

export const handleMultiLevelCascading = ({ field, form, fields, getApiData }: Cascading) => {
    const parentIndexes = field.cascadingParentIndexes;
    const parents = parentIndexes.map((index: any) =>
        getFieldByIndex({ fields, index })
    );

    const parentsControlsValue = parents.map((parent: any) => form.get(parent.name)).map((parent: AbstractControl) => parent.value);
    const fieldControl = form.get(field.name);

    field.newSourceUrl = field.dataSourceUrl;
    field.newSourceUrl = changeUrlToParentIndex(field.newSourceUrl, parentIndexes);
    field.urlWithParams = urlSplitter(field.newSourceUrl);

    parentsControlsValue.map((value: any, index: any) => {
        console.log(value);

        const newValue = value || value.key;
        const parent = parents[index];
        const currentParentIndex = parentIndexes.indexOf(parent.index);

        if (!newValue) return resetField(parent, form, fields, field, fieldControl);

        const correctValue: string = newValue.replace('"', '');
        const baseUrl = field.urlWithParams.baseUrl;
        const params = field.urlWithParams.urlParams;
        params[currentParentIndex] = correctValue;
        const newParams = resetUrlParams(params, currentParentIndex);

        //TODO
        // const newUrl = newParams.toString().replace('api/', '');

        const newUrl = newParams.toString();
        field.newSourceUrl = `${baseUrl}=${newUrl}`;

        // resetChildren(parent, fields, form, field);

        const isValid = isValidUrl(field.newSourceUrl);
        if (isValid) return getApiData(field);
    });
};
