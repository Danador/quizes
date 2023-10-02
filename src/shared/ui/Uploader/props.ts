import { type PropType } from 'vue';

type UploaderType = 'file' | 'image';

export const UploaderProps = () => ({
    type: { type: String as PropType<UploaderType>, default: 'file' },
    label: { type: String, default: null },
    customClass: { type: String, default: null }
});
