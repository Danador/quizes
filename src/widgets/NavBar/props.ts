import { type PropType } from 'vue';

export interface ListType {
    title: string;
    url: string;
}

interface NavBarType {
    modelValue: string | number | object;
    navigationList: ListType[];
}

export const NavBarProps = () => ({
    modelValue: { type: [String, Number, Object] as PropType<NavBarType['modelValue']> },
    navigationList: { type: Array as PropType<NavBarType['navigationList']> },
});
