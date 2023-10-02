import { type PropType } from 'vue';

interface SlideModalType {
    open: boolean;
    name: string;
    title: string;
    containerClass: string | string[] | undefined;
}

export const SlideModalProps = () => ({
    open: { type: Boolean as PropType<SlideModalType['open']>, default: false },
    name: { type: String as PropType<SlideModalType['name']>, default: null },
    title: { type: String as PropType<SlideModalType['title']> },
    containerClass: { type: String as PropType<SlideModalType['containerClass']>, default: null },
});
