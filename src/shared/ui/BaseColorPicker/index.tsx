import { defineComponent, computed } from 'vue';
import { ColorPicker } from 'vue-accessible-color-picker'
import { ColorPickerProps } from './props'

export const BaseColorPicker = defineComponent({
    props: ColorPickerProps(),
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
        const updateColor = (eventData: { cssColor: string; }) => {
            model.value = eventData.cssColor
        }
        return {
            model,
            updateColor
        }
    },
    render(props){
        const { format, color, showAlpha } = props
        return(
            <ColorPicker
                alpha-channel={showAlpha}
                color={color}
                visible-formats={[format]}
                onColorChange={this.updateColor}
            />
        )
    }
})
