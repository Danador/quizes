import { defineComponent } from "vue";
import './index.sass'
import { IconProps } from "./props";

export const Icon =  defineComponent({
    props: IconProps(),
    render(props) {
        return (
            <svg class={'icon ' + props.size}>
                <use xlinkHref={(`/icons/all-icons.svg#${props.name}`)}></use>
            </svg>
        )
    }
});
