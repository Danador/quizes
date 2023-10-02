export const SwitcherProps = () => ({
    id: { type: [String, Number], default: () => null },
    type: { type: String, default: () => 'checkbox' },
    value: { type: [String, Number, Boolean], default: () => false },
    modelValue: { type: [Array, Boolean, Number], default: () => null },
});
