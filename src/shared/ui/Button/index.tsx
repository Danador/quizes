import { SlotsType, defineComponent, ref, Ref } from "vue";
import './index.sass'
import { buttonProps } from "./buttonTypes";
import { RouterLink } from "vue-router";
import { initDefaultProps } from "../_util";

type Loading = boolean | number;

type ButtonSlots = {
    default: () => JSX.Element
}

export const Button = defineComponent({
    props: initDefaultProps(buttonProps(), { type: 'primary' }),
    slots: Object as SlotsType<ButtonSlots>,
    inheritAttrs: false,
    emits: ['click'],
    setup(props, {emit}){
        const innerLoading: Ref<Loading> = ref(false);

        const handleClick = (event: Event) => {
            if (innerLoading.value || props.disabled) {
              event.preventDefault();
              return;
            }
            emit('click', event);
        };

        return {
          handleClick
        }
    },
    render(props){
        const { disabled, href, htmlType, side, size, customClass, type } = props;

        const buttonProps = {
            disabled,
            htmlType,
            class: [
            side,
            size,
            type,
            customClass
            ],
            onClick: this.handleClick,
        };
        
        const buttonNode = (
            <button {...buttonProps} type={htmlType}>
                { this.$slots.default() }
            </button>
        );

        if (href !== undefined) {
            return (
            <RouterLink to={href} {...buttonProps}>
                { this.$slots.default() }
            </RouterLink>
            );
        } else {
            return buttonNode;
        }
    }
})
