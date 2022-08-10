export interface ConditionalView {
    validConditions: number | null;
    minimumAcceptableConditionsNumber: number | null;
    conditions: Condition[] | null;
}

interface Condition {
    parentFieldId: string;
    parentFieldIndex: number;
    validationName: string;
    value: string;
    validityStatus: false;
}