import { PropType } from 'vue'

type CopyBoxType = {
    value: string,
    title: string
}

export const CopyBoxProps = () => ({
    vale: { type: String as PropType<CopyBoxType['value']> },
    title: { type: String as PropType<CopyBoxType['title']> }
})