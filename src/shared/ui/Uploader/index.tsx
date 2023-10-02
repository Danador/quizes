import { defineComponent } from "vue";
import './index.sass'
import { UploaderProps } from "./props";

export const Uploader = defineComponent({
    props: UploaderProps(),
    render(){
        return(
            <div class="uploader">
                { this.label ? (<span class="uploader__title">{this.label}</span>) : null }
                <div class={`uploader__field uploader__field--type_${this.type} ${ this.customClass }`}></div>
            </div>
        )
    }
})
