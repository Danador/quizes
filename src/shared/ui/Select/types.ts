export const selectProps = () => ({
    list: { type: Array, default: [] },
    white: { type: Boolean, default: false },
    icon: { type: Boolean, default: false },
    placeholder: { type: String, default: null },
    modelValue: { type: [String, Object], default: false },
});
