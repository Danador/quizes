import { PropType } from "vue";

type Position = 'top' | 'bottom'

type TooltipType = {
    show: boolean,
    message: string
    positon: Position
}

export const TooltipProps = () => ({
    show: { type: Boolean as PropType<TooltipType['show']> },
    message: { type: String as PropType<TooltipType['message']> },
    position: { type: String as PropType<TooltipType['positon']>, default: () => 'bottom' }
})