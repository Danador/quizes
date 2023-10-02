import { type PropType } from 'vue';

type InputDateType = 'time' | 'date';

export const InputDateProps = () => ({
    type: { type: String as PropType<InputDateType>, default: 'date' },
    title: { type: String, required: true },
    modelValue: { type: [Number, String], default: '' },
});
