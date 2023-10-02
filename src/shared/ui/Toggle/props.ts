import { type PropType } from 'vue';

export interface ToggleType {
    title: string;
    value: string;
    icon?: string;
}

type ToggleVariant = 'green' | 'yellow';
type ToggleSize = 'normal' | 'small'

interface Toggle {
    list: ToggleType[];
}

export const ToggleProps = () => ({
    list: { type: Array as PropType<Toggle['list']> },
    title: { type: String as PropType<ToggleType['title']> },
    variant: { type: String as PropType<ToggleVariant>, default: 'green' },
    size: { type: String as PropType<ToggleSize>, default: 'normal' },
    modelValue: { type: String as PropType<ToggleType['value']> },
});
