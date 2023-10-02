import { reactive } from 'vue';

export const dataVariantBody = reactive({});

interface BodyDataVariables {
    rounded: boolean;
    shadow: boolean;
    border: boolean;
    glare: boolean;
    variant: string;
}

export const addBodyStyle = (elem: any, obj: BodyDataVariables) => {
    if (!elem) {
        return;
    }

    const { variant } = obj;

    // стили экземпляра вариации "body"
    const bodyStyle = elem.style;
    const test = document.querySelector('.test');

    // дефолтные стили

    // динамические стили
    // bodyStyle.width = width ? `${width}px` : '100%'
    // if (variant === 'button' || variant === 'baner') {
    //     bodyStyle.height = '40px'
    // } else {
    //     bodyStyle.height = height ? `${height}px` : '130px'
    // }
};
