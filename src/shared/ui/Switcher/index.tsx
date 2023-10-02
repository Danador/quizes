import { defineComponent, computed } from "vue";
import './index.sass'
import { SwitcherProps } from "./props";
export { SwitcherProps } from './props'

export const Switcher = defineComponent({
    props: SwitcherProps(),
    emit: ['update:modelValue'],
    setup(props, { emit }) {
        const model = computed({
            get() {
              return props.modelValue
            },
            set(value) {
              emit('update:modelValue', value)
            }
        })
        return {
            model
        }
    },
    render()  {
        return(
            <label for={this.id} class="swither-container">
                <input 
                    class="switcher-field" 
                    id={this.id} 
                    type={this.type}
                    v-model={this.model} 
                    value={this.value}
                />
                <i class="switcher"></i>
            </label>
        )
    }
});
