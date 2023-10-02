import { SlotsType, defineComponent } from "vue";

type CardBodySlots = {
    default: () => JSX.Element
}

export const CardBody = defineComponent({
    slots: Object as SlotsType<CardBodySlots>,
    setup(_props, {slots}){
        return() => slots.default()
    }
})
