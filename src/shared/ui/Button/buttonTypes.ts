import type { PropType } from 'vue';

type ButtonType = 'primary' | 'secondary' | 'red' | 'yellow' | 'stroke';
type ButtonHTMLType = 'submit' | 'button' | 'reset';
type ButtonSize = 'big' | 'normal' | 'small';
type ButtonSide = 'left' | 'right';

export const buttonProps = () => ({
    type: { type: String as PropType<ButtonType>, default: 'primary' },
    htmlType: { type: String as PropType<ButtonHTMLType>, default: 'submit' },
    size: { type: String as PropType<ButtonSize>, default: 'normal' },
    disabled: { type: Boolean, default: undefined },
    side: { type: String as PropType<ButtonSide>, default: null },
    customClass: { type: [String, Array], default: undefined },
    href: String,
    onClick: { type: Function as PropType<(event: MouseEvent) => void> },
});
