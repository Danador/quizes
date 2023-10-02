export const changeTableColumn = (windowWidth: number, column1: number, column2: number) => {
    const screenWidth = window.innerWidth;
    return screenWidth <= windowWidth ? column1 : column2;
};

export const checkPageWidht = (number: number) => window.innerWidth < number;

export const rollUp = (selector: string) => {
    const block = document.querySelector(`.${selector}`);
    block?.classList.toggle('rollUp');
};

export const removeItem = (arr: object[], id: number) => {
    const newArr = arr.filter((i) => i.id !== id);
    return newArr;
};

export const addCorrect = (arr: object[], id: number) => {
    const newArr = arr.map((i) => {
        if (i.id === id) {
            return {
                ...i,
                correct: true,
            };
        } else {
            const { correct, ...rest } = i;
            return rest;
        }
    });
    return newArr;
};

export const addKey = (arr: object[]) => {
    if (!arr) {
        return;
    }
    const buf = arr.length > 0 ? arr[arr.length - 1].id : 0;
    const newKey = buf + 1;
    arr.push({
        id: newKey,
    });
    return arr;
};

export function bodyLock(data: boolean) {
    const lockPaddingValue = `${window.innerWidth - document.body.offsetWidth}px`;
    if (data) {
        document.body.classList.add('overflow-hidden');
        document.body.classList.remove('overflow-y-scroll');
        document.body.style.setProperty('padding-right', lockPaddingValue);
    } else {
        document.body.classList.remove('overflow-hidden');
        document.body.classList.add('overflow-y-scroll');
        document.body.style.setProperty('padding-right', '0');
    }
}

export const back = () => {
    const url = window.location.href;
    const reg = new RegExp('\/[^\/]*$');
    const newUrl = url.replace(reg, '');
    setTimeout(() => {
        window.location.href = newUrl;
    }, 200);
};

export const keyPress = () => {
    document?.addEventListener('keydown', (event) => {
        if (event.keyCode === 27) {
            back()
        }
    })
}

export const copyText = async (value:string, link:boolean) => {
    if (link) {
        let link = `https://${value}.quizmarket.ru`
        try {
            await navigator.clipboard.writeText(link)
        } catch (err) {
          console.error('Failed to copy: ', err);
        }
    } else {
        try {
            await navigator.clipboard.writeText(value)
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    }
    
}
