import { reactive } from 'vue';

export const dataVariantBaner = reactive({
    display: 'all',
    type: 'sideways',
    positionSide: 'top-left',
    title: 'Хотите получить скидку?',
    subtitle: 'Пройдите короткий опрос!',
});

interface BanerDataVariables {
    variant: string;
    textColor: string;
    backgroundColor: string;
    border: boolean;
    borderColor: string;
    rounded: boolean;
    shadow: boolean;
    positionSide: string;
    elementsColor: string;
}

export const addBanerStyle = (elem: any, obj: BanerDataVariables) => {
    if (!elem) {
        return;
    }

    const {
        variant,
        positionSide,
        textColor,
        backgroundColor,
        elementsColor,
        borderColor,
        rounded,
        shadow,
        border,
    } = obj;

    // экземпляр текущего варианта и его стили
    const banerStyle = elem.style;
    if (variant === 'baner') {
        // дочерние элементы экземпляра
        const banerBtn = elem?.childNodes[1]?.style;
        const banerTextElements = elem?.childNodes[0]?.childNodes[1]?.childNodes;
        const banerIcon = elem?.childNodes[0]?.childNodes[0]?.style;

        banerStyle.display = 'flex';
        banerStyle.position = 'absolute';
        banerStyle.alignItems = 'center';
        banerStyle.justifyContent = 'space-between';
        banerStyle.gap = '12px';
        banerStyle.padding = '12px';
        banerStyle.backgroundColor = backgroundColor || 'white';
        banerStyle.borderColor = borderColor || '';
        banerStyle.borderWidth = border ? '1px' : '0px';
        banerStyle.borderStyle = border ? 'solid' : '';
        banerStyle.boxShadow = shadow && backgroundColor ? `0px 4px 4px 0px ${backgroundColor}26` : shadow ? '0px 4px 4px 0px rgba(68, 71, 88, 0.15)' : '';
        banerStyle.borderRadius = rounded ? '999px' : '0px';

        banerTextElements?.forEach((textEl) => {
            textEl.style.color = textColor || '#696B75';
        });

        if (banerBtn) {
            banerBtn.position = 'absolute'
            banerBtn.right = '-24px'
            banerBtn.top = '0px'
            banerBtn.color = elementsColor || '#49c674';
            banerBtn.borderRadius = '6px';
            banerBtn.padding = '3px';
            banerBtn.borderWidth = '1px'
            banerBtn.borderStyle = 'solid'
            banerBtn.borderColor = elementsColor || '#49c674';
        }

        if (banerIcon) {
            banerIcon.color = elementsColor || '#49c674';
        }

        if (positionSide !== 'top' || positionSide !== 'bottom') {
            banerStyle.fontSize = '12px';
            banerStyle.lineHeight = '16px';
        }
        if (positionSide === 'top-left') {
            banerStyle.inset = '48px auto auto';
        }
        if (positionSide === 'top-right') {
            banerStyle.inset = '48px 25px auto auto';
        }
        if (positionSide === 'bottom-left') {
            banerStyle.inset = 'auto auto 96px';
        }
        if (positionSide === 'bottom-right') {
            banerStyle.inset = 'auto 25px 96px auto';
        }
        if (positionSide === 'top') {
            banerStyle.inset = '48px 0 auto 0';
            banerBtn.position = 'static'
            banerBtn.backgroundColor = elementsColor || '#49c674';
            banerBtn.color = 'white'
        }
        if (positionSide === 'bottom') {
            banerStyle.inset = '89% 0 auto 0';
            banerBtn.position = 'static'
            banerBtn.backgroundColor = elementsColor || '#49c674';
            banerBtn.color = 'white'
        }
    }
};
