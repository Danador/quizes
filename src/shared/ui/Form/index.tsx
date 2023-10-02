import { SlotsType, defineComponent, onMounted, ref} from 'vue';
import './index.sass'

import { FormProps } from './props';

type FormSlots = {
    default: () => JSX.Element
}

export const Form = defineComponent({
    slots: Object as SlotsType<FormSlots>,
    props: FormProps(),
    setup(props) {
        let form = ref(null)
        const generateGrid = () => {
            if (props.cols && !props.rows) {
                form?.setAttribute('style', 
                    `grid-template-rows: repeat(${props.rows}, minmax(0, 1fr))`
                );
            }
            if (props.rows && props.cols) {
                form?.setAttribute('style', `
                    grid-template-rows: repeat(${props.rows}, minmax(0, 1fr));
                    grid-template-columns: repeat(${props.cols}, minmax(0, 1fr));
                `);
            }
        }
        onMounted(() => {
            generateGrid()
        })
        return {
            form
        }
    },
    render(props){
        const { form } = this
        const { action } = props

        return(
            <form 
                ref={form}
                action={action} 
                class={'form'}
            >
                { this.$slots.default() }
            </form>
        )
    }
})
