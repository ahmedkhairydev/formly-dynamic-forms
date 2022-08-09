// @ts-ignore: Unreachable code error
export const getFieldByIndex = ({ index, fields }) => {
    return fields.find((field: any) => field.index === index);
};

/**
 *
 * @param url sourceUrl To calling api
 * @returns if url is valid [not has {}] or not
 */
export const isValidUrl = (url: string) => {
    return !url.includes('{');
};
