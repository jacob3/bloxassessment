export enum ToasterTypesEnum {
    SUCCESS,
    ERROR,
    INFORMATION,
    NONE
}

export type ToasterReducerState = {
    show: boolean;
    activeClass: ToasterTypesEnum;
    text: string;
};
