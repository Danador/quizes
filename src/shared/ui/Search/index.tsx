import { defineComponent, computed } from "vue";
import { Icon } from "../Icon";
import './index.sass'

export const Search = defineComponent({
    props: {
        modelValue: { type: String, default: null },
        placeholder: { type: String, default: 'placeholder' }
    },
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
        const { placeholder } = props
        return(
          <form class="search-form" action="">
              <label class="search-container">
                  <button class="search-btn">
                    <Icon name="search"/>
                  </button>
                  <input
                      v-model={this.model}
                      id="search" 
                      type="text"
                      placeholder={placeholder}
                      class="search-field" 
                  />
                  <button
                    type="button" 
                    onClick={() => this.model = ''} 
                    class="search-close-btn"
                  >
                    <Icon name={this.model && this.model.length ? 'close' : ''}/>
                  </button> 
              </label>
          </form>
        )
    }
})
