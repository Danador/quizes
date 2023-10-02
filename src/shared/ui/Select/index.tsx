import { SlotsType, defineComponent, ref, computed, onMounted } from "vue";
import './index.sass'
import { selectProps } from "./types";

type SelectSlots = {
    default: () => JSX.Element,
    content: () => JSX.Element
}

export const Select = defineComponent({
    props: selectProps(),
    slots: Object as SlotsType<SelectSlots>,
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const select = ref(false)
        const openSelect = () => {
            select.value = !select.value
        }
        const model = computed({
            get() {
              return props.modelValue
            },
            set(value) {
              emit('update:modelValue', value)
            }
        })
        const watchCloseSelect = () => {
            const btns = document.querySelectorAll('.option')
            btns.forEach(btn => {
                btn.className === 'option' && btn.addEventListener('click', () => {
                    select.value = false
                })
            })
        }
        onMounted(() => {
            watchCloseSelect()
        })
        return { 
            select, 
            openSelect, 
            model
        }
    },
    render() {
        let { list, white, placeholder } = this.$props
        list = list.filter(i => i !== this.model)
        
        const { select, openSelect, model } = this;
        return (
            <div class="select">
              <button 
                  onClick={() => {
                    openSelect();
                  }}
                  class={
                      'option option-active ' + 
                      ( select ? 'open' : '') + 
                      ( white ? 'option-active--color_white' : '' )
                  }
              >
                {this.$slots.default && this.$slots.default() ? (
                    <>
                        {this.$slots.default && this.$slots.default()}
                        <span>{typeof model === 'object' ? model?.title : model }</span>
                    </>
                ) : (
                    model.title ? (
                    <span>{model?.title  }</span>
                    ) : model ? (
                        <span>{ model }</span>
                    ) : <span class="select__placeholder">{placeholder}</span>
                )}
              </button>
              <div  class={'select__list-container ' + (select ? 'open' : '')}>
                <ul class="select__list">
                    { this.$slots.content && this.$slots.content() }
                </ul>
              </div>
          </div>
        )
    }
});
