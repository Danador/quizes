import { defineComponent, watch, ref, Ref } from "vue";
import { Button, Tooltip, copyText, Icon } from '@/shared'
import './index.sass'
import { CopyBoxProps } from "./props";

export const CopyBox = defineComponent({
    setup() {
        const copied:Ref = ref(false)

        watch(copied, () => {
            if (copied.value) {
                setTimeout(() => {
                    copied.value = false
                }, 600)
            }
        })

        return {
            copied
        }
    },
    props: CopyBoxProps(),
    render(props){
        const { title, value } = props
        return(
            <div>
                <p class="label">{ title }</p>
                <div class="copy-box">
                    <span class="copy-box__value">{ value }</span>
                    <div class="copy-box__button-container">
                        <Button
                            onClick={() => (copyText(value), this.copied = !this.copied)}
                            type="stroke"
                            customClass="copy-box__button"
                        >
                            <Icon name="copy"/>
                        </Button>
                        <Tooltip 
                            show={this.copied}
                            message="Скопировано!"
                        />
                    </div>
                </div>
            </div>
        )
    }
})