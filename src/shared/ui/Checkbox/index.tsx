import { defineComponent, computed } from "vue";
import './index.sass'
import { checkboxProps } from "./checkboxTypes";
import { initDefaultProps } from "../_util";


export const Checkbox = defineComponent({
    props: initDefaultProps(checkboxProps(), { type: 'checkbox' }),
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
    render(props) {
        const { type, style, customClass, id, color, full, label, side, value } = props

        const checkboxClass = {
          class: [
            'checkbox__marker',
            `checkbox__marker--style-${style}`,
            `checkbox__marker--color-${color}`,
            (full ? 'checkbox__marker--full-size' : ''),
            customClass
          ]
        }

        return(
            <div class={`checkbox-container ` + (label ? `checkbox-container--side-${side}` : null)}>
                <label class="checkbox">
                    <input id={id} value={value} v-model={this.model} class="checkbox__field" type={type}/>
                    <i {...checkboxClass}></i>
                </label>
                {label ? (
                    <span class="checkbox-container__label">{label}</span>
                ) : ''}
            </div>
        )
    }
})
