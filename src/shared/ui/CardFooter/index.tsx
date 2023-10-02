import { SlotsType, defineComponent } from "vue";

type CardFooterSlots = {
    default: () => JSX.Element
}

export const CardFooter = defineComponent({
    slots: Object as SlotsType<CardFooterSlots>,
    setup(_props, {slots}){
        return() => slots.default()
    }
})
