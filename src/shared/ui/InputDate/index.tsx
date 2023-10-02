// components
import { defineComponent, onMounted } from "vue";
import { Icon } from "../Icon";
import AirDatepicker from 'air-datepicker';
import { InputDateProps } from "./types";
import { initDefaultProps } from "../_util";

// styles
import 'air-datepicker/air-datepicker.css';
import './index.sass'

export const InputDate = defineComponent({
    props: initDefaultProps(InputDateProps(), { type: 'date' }),
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const updateValue = (event: { target: { value: any; }; }) => {
            emit('update:modelValue', event.target.value);
        };

        const createDatepicker = () => {
            let obj = {}
            if (props.type === 'time') {
                obj = {
                    timepicker: true,
                    onlyTimepicker: true,
                    position: 'bottom center'
                }
            } else {
                obj = {
                    selectedDates: [new Date()],
                    position: 'bottom center'
                }
            }
            return new AirDatepicker('#date', {...obj});
        }

        const setAttrs = () => {
          const input  = document.getElementById('date');
          if(props.type === 'time'){
            input?.setAttribute('maxlength', '5');
            input?.setAttribute('placeholder', '00:00')
          } else {
            input?.setAttribute('maxlength', '8');
            input?.setAttribute('placeholder', '')
          }
        }

        onMounted(() => {
            createDatepicker();
            setAttrs();
        })

        return {
            updateValue,
        };
    },
    render(props) {
        const { updateValue } = this
        const { type, title, modelValue } = props
        return(
            <div class="container-date">
                <span 
                    class="title-date"
                    v-text={title}
                ></span>
                <label class="label-date">
                    <Icon 
                        class={type}
                        name={type}
                    />
                    <input 
                        id="date"
                        value={modelValue}
                        onInput={updateValue}
                        readonly
                        class="date-field" 
                        type="text"
                    />
                </label>
            </div>
        )
    }
})
