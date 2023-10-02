import { reactive } from 'vue';

export const dataVariantButton = reactive({
    fixedSide: 'left',
    buttonType: 'default',
    display: 'all',
    buttonText: 'Начать квиз'
});

interface ButtonDataVariables {
    buttonText: string;
    variant: string;
    textColor: string;
    fixedSide: string;
    backgroundColor: string;
    border: boolean;
    borderColor: string;
    rounded: boolean;
    shadow: boolean;
}

export const addButtonStyle = (elem: any, obj: ButtonDataVariables) => {
    if (!elem) {
        return;
    }

    const {
        buttonText,
        fixedSide,
        textColor,
        backgroundColor,
        borderColor,
        rounded,
        shadow,
        border,
    } = obj;


    // экземпляр блока кнопки
    const buttonStyle = elem.style;

    elem.innerText = buttonText || 'Начать квиз';

    // дефолтные стили
    buttonStyle.padding = '20px 24px';
    buttonStyle.position = 'absolute';
    buttonStyle.top = '50%';
    buttonStyle.transform = 'translateY(-50%)'
    buttonStyle.writingMode = 'sideways-lr'

    // динамические стили
    buttonStyle.transform = fixedSide === 'left' ? '0' : '100%';
    buttonStyle.backgroundColor = backgroundColor || '#49c674';
    buttonStyle.color = textColor || 'white';
    buttonStyle.borderColor = borderColor || '';
    buttonStyle.borderRadius = rounded ? '999px' : '0px';
    buttonStyle.boxShadow = shadow && backgroundColor ? `0px 4px 4px 0px ${backgroundColor}26` : shadow ? '0px 4px 4px 0px #49c67426' : '';
    buttonStyle.borderWidth = border ? '1px' : '0px';
    buttonStyle.borderStyle = border ? 'solid' : '';
    buttonStyle.boxSizing = border ? 'border-box' : '';
    buttonStyle.left = fixedSide === 'left' ? '0px' : '';
    buttonStyle.right = fixedSide === 'right' ? '0px' : '';
};
