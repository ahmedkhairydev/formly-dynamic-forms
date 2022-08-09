import { Cascading } from "src/app/shared/interfaces";
import { getFieldByIndex, isValidUrl } from "../base/cascading.helper";

/**
 * @description  changeUrlToParentIndex() to replce params index by parentIndex
 * @param url dataSourceUrl of the field
 * @returns new handled url
 *
 */

// @ts-ignore: Unreachable code error
const changeUrlToParentIndex = (url: string, { parentIndex, parentControl }): string => {
    // return url.replace(`{${parentIndex}}`, parentControl.value.key).replace('api/', '');
    return url.replace(`{${parentIndex}}`, parentControl.value || parentControl.value.key);
};


/**
 * @description reset field with it's children onDelete it's value or first time calling api
 * @param form form that has been opend
 * @param field child of the parent that we chage or delete it's value
 */
const resetField = (form: any, field: any) => {
    form.get(field.name)?.reset();
    field.options = [];
};

export const handleSingleCascading = ({ field, fields, form, getApiData }: Cascading) => {
    const parentIndexs = field.cascadingParentIndexes;

    parentIndexs.map((index: any, parentIndex: any) => {
        const parentField = getFieldByIndex({ index, fields });
        const parentControl = form.get(parentField.name);

        const fieldControl = form.get(field.name);
        const fieldControlValue = fieldControl?.value;

        const isChildHasOptions = field.options.length;
        const hasparentControlValue = parentControl?.value;

        if (fieldControlValue && isChildHasOptions) fieldControl.reset();
        if (!hasparentControlValue) return resetField(form, field);

        field.newSourceUrl = changeUrlToParentIndex(field.dataSourceUrl, { parentIndex, parentControl });

        resetField(form, field);

        const isValid = isValidUrl(field.newSourceUrl);
        if (isValid) return getApiData(field);
    });
};
