import { type PropType } from 'vue';

interface ColorPickerType {
    format: string;
    color: string;
    showAlpha: string;
}

export const ColorPickerProps = () => ({
    format: { type: String as PropType<ColorPickerType['format']>, default: 'hex' },
    showAlpha: { type: String as PropType<ColorPickerType['format']>, default: 'show' },
    color: { type: String as PropType<ColorPickerType['color']> },
    modelValue: { type: String, default: null },
});
