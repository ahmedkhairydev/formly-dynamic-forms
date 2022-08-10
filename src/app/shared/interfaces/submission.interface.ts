
export interface DropdownSubmissionInterface {
    id?: string; key?: string; text?: string; selectedKey?: string;
}

export interface SubmissionInterface {
    name: string;
    value: (string | DropdownSubmissionInterface)[];
    type: string;
    label: string;
}
