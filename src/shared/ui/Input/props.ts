import { type PropType } from 'vue';

export interface InputType {
    label: string;
    placeholder?: string;
    type?: string;
    name?: string;
    id?: string;
    disabled?: boolean;
    maxlength?: number;
    modelValue: string | number;
}

export const InputProps = () => ({
    label: { type: String as PropType<InputType['label']> },
    placeholder: { type: String as PropType<InputType['placeholder']> },
    type: { type: String as PropType<InputType['type']>, default: 'text' },
    name: { type: String, default: null },
    id: { type: String as PropType<InputType['id']>, default: null },
    disabled: { type: Boolean as PropType<InputType['disabled']>, default: false },
    maxlength: { type: Number as PropType<InputType['maxlength']>, default: null },
    inputClass: { type: String, default: '' },
    modelValue: { type: [String, Number] as PropType<InputType['modelValue']>, default: null },
});
