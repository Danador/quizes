export interface RowProps {
    title: string;
    checked?: boolean;
    dragEndDrop?: boolean;
    main?: boolean;
    data?: object;
    modelValue: string | boolean | number[] | number;
}
