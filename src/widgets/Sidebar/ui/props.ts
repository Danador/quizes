export interface MenuType {
    title: string;
    url: string;
    icon: string | undefined;
    id: number;
}

export const propsSidebar = () => ({
    open: { type: Boolean, default: false },
    switchSidebar: { type: Boolean, default: false },
    switchTitle: { type: String, default: '' },
    rolled: { type: Boolean, default: false },
    logo: { type: Boolean, default: false },
    main: { type: Boolean, default: false },
    back: { type: Object, default: () => null },
    menu: { type: Array<MenuType> },
    modelValue: { type: Number, default: () => null },
});
