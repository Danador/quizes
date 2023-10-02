import { SlotsType, defineComponent } from "vue";

type CardHead = {
    default: () => JSX.Element
}

export const CardHead = defineComponent({
    slots: Object as SlotsType<CardHead>,
    setup(_props, {slots}){
        return() => slots.default()
    }
})
