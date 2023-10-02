import { defineComponent, computed } from "vue";
import './index.sass'
import { InputProps, InputType } from "./props";

export const Input = defineComponent({
    props: InputProps(),
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
    render(props:InputType) {
      const { label, id, placeholder, maxlength, name, type, disabled, inputClass } = props
        return(
            <label for={id} class="field-container">
                <span class="field-label">{label}</span>
                <input 
                    class={`field ${ inputClass }`}
                    maxlength={maxlength}
                    v-model={this.model}
                    type={type}
                    name={name}
                    id={id} 
                    placeholder={placeholder} 
                    disabled={disabled}
                />
            </label>
        )
    }
})
