import { defineComponent, computed, ref } from "vue";
import './index.sass'
import { ToggleProps } from "./props";
import { Button, Icon } from "@/shared";

export const Toggle = defineComponent({
    props: ToggleProps(),
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
        const number = ref(0)
        const select = ref(0)
        return {
            model,
            select,
            number
        }
    },
    render(){
        return(
            <div class={'toggle ' + this.title ? 'toggle--grid' : ''}>
                { this.title ? (
                    <span class="toggle__title">{ this.title }</span>
                ) : null }
                <fieldset class="toggle__container">
                    {this.list?.map((radio, i) => (
                        <label class="toggle-container__label">
                            <input 
                                type="radio"
                                value={radio.value}
                                v-model={this.model}
                                name="values"
                                class="sr-only peer"
                            />
                            <div class={
                                'toggle__btn ' + 
                                (this.model === radio.value ? `toggle__btn--variant_${this.variant}--active ` : '') +
                                (this.variant ? `toggle__btn--variant_${this.variant} ` : '') +
                                (this.size ? `toggle__btn--${this.size}` : '')
                            }>
                                { radio?.icon ? (
                                    <Icon
                                        class={`toggle__icon ${this.size}`}
                                        name={radio.icon}
                                    />
                                ) : (
                                    <span>{ radio.title }</span>
                                )}
                            </div>
                        </label>
                    ))}
                </fieldset>
            </div>
        )
    }
})
