import { Ref, defineComponent, ref } from "vue";
import './index.sass'
import { TooltipProps } from "./props";

export const Tooltip = defineComponent({
    props: TooltipProps(),
    setup(props) {
        const checkShow = () => {
            if (props.show) {
                return 'show'
            }
        }

        return (
            checkShow
        )
    },
    render() {
        return (
            <div class={`tooltip ${this.checkShow()} tooltip--position__${this.position}`}>
                <span>{this.message}</span>
            </div>
        )
    }
}) 
