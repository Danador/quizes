import { type PropType } from 'vue';

type CheckboxType = 'checkbox' | 'radio';
type CheckboxColor = 'yellow' | 'green';
type CheckboxTitleSide = 'left' | 'right';
type CheckboxStyle = 'square' | 'circle';

export const checkboxProps = () => ({
    id: { type: [String, Number], default: () => null },
    type: { type: String as PropType<CheckboxType>, default: 'checkbox' },
    style: { type: String as PropType<CheckboxStyle>, default: 'square' },
    color: { type: String as PropType<CheckboxColor>, default: 'green' },
    label: { type: String, default: null },
    full: { type: Boolean, default: null },
    side: { type: String as PropType<CheckboxTitleSide>, default: 'left' },
    customClass: { type: String, default: null },
    value: { type: [Boolean, Object, Number, String] },
    modelValue: { type: [Array, Boolean, Number, String], default: () => null },
});
