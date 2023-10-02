import { type PropType } from 'vue';

interface ModalType {
    open: boolean;
    name: string;
    containerClass: string | string[] | undefined;
    titleClass: string | string[] | undefined;
    title: string;
    info: boolean;
}

export const ModalProps = () => ({
    open: { type: Boolean as PropType<ModalType['open']>, default: false },
    name: { type: String as PropType<ModalType['name']>, default: null },
    containerClass: { type: String as PropType<ModalType['containerClass']>, default: null },
    titleClass: { type: String as PropType<ModalType['titleClass']>, default: null },
    title: { type: String as PropType<ModalType['title']>, default: null },
    info: { type: Boolean as PropType<ModalType['info']>, default: false },
    onClick: { type: Function as PropType<(event: MouseEvent) => void> },
});
