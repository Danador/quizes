import { ref } from 'vue';
import { checkPageWidht } from '.';
const getFirstWord = (string: string) => string.split(' ')[0];

export const additionalSidebar = ref({
    back: {
        link: '/',
        title: 'Вернуться обратно к квизам',
    },
    menu: [
        {
            id: 1,
            title: 'Редактирование квиза',
            icon: 'pencil',
            url: 'quiz/start-page',
        },
        {
            id: 2,
            title: 'Дизайн квиза',
            icon: 'design',
            url: 'quiz/design',
        },
        {
            id: 3,
            title: 'Установка квиза',
            icon: 'monitor',
            url: 'quiz/setup',
        },
        {
            id: 4,
            title: 'Интеграции',
            icon: 'integration',
            url: 'quiz/integrations',
        },
        {
            id: 5,
            title: 'Дополнения',
            icon: 'shop',
            url: 'quiz/additions',
        },
        {
            id: 6,
            title: 'Заявки',
            icon: 'application',
            url: 'quiz/applications',
        },
        {
            id: 7,
            title: 'Настройки квиза',
            icon: 'setting',
            url: 'quiz/settings',
        },
    ],
});

additionalSidebar.value.menu.map((item) => {
    item.title = checkPageWidht(960) ? getFirstWord(item.title) : item.title;
});

export const mainMenu = [
    {
        id: 1,
        title: 'Квизы',
        icon: 'quizes',
        url: '/',
    },
    {
        id: 2,
        title: 'Аналитика',
        icon: 'analitic',
        url: 'analitic',
    },
    {
        id: 3,
        title: 'Тарифы',
        icon: 'dollar',
        url: 'tarifs',
    },
    {
        id: 4,
        title: 'Документация',
        icon: 'docs',
        url: 'documentation',
    },
    {
        id: 5,
        title: 'Настройки',
        icon: 'setting',
        url: 'settings',
    },
];

export const quizTabs = [
    {
        title: 'СТАРТОВАЯ СТРАНИЦА',
        url: '/quiz/start-page',
    },
    {
        title: 'ВОПРОСЫ',
        url: '/quiz/questions',
    },
    {
        title: 'РЕЗУЛЬТАТЫ',
        url: '/quiz/result',
    },
    {
        title: 'ФОРМА КОНТАКТОВ',
        url: '/quiz/contacts',
    },
];

export const typesQuestions = [
    {
        icon: 'txt-fields',
        title: 'Текстовый вариант',
        type: 'text-field',
    },
    {
        icon: 'cards',
        title: 'Карточки',
        type: 'cards',
    },
    {
        icon: 'range',
        title: 'Ползунок',
        type: 'range',
    },
    {
        icon: 'video',
        title: 'Видеоконтент',
        type: 'video',
    },
    {
        icon: 'image-n-list',
        title: 'Список с картинкой',
        type: 'imageAndField',
    },
    {
        icon: 'input',
        title: 'Поле ввода',
        type: 'input',
    },
    {
        icon: 'download',
        title: 'Загрузка файлов',
        type: 'download',
    },
    {
        icon: 'date-green',
        title: 'Даты, диапазон дат',
        type: 'date',
    },
    {
        icon: 'dropdown',
        title: 'Выпадающий список',
        type: 'dropdown',
    },
];

export const listSolutions = ref([
    {
        id: 1,
        backgroundColor: '#ffffff',
        buttonColor: '#49C674',
        textColor: '#444758',
    },
    {
        id: 2,
        backgroundColor: '#444758',
        buttonColor: '#49C674',
        textColor: '#ffffff',
    },
    {
        id: 3,
        backgroundColor: '#efefef',
        buttonColor: '#9fb2ff',
        textColor: '#696b75',
    },
    {
        id: 4,
        backgroundColor: '#ffffff',
        buttonColor: '#ffc350',
        textColor: '#444758',
    },
    {
        id: 5,
        backgroundColor: '#c6c9d6',
        buttonColor: '#5a76e5',
        textColor: '#ffffff',
    },
]);

export const toggleSwitches = ref({
    locationFirstPage: {
        title: 'Расположение стартовой страницы',
        list: [
            {
                title: 'Стандартный',
                value: 'standart',
            },
            {
                title: 'Весь экран',
                value: 'fullScreen',
            },
            {
                title: 'по центру',
                value: 'center',
            },
        ],
    },
    background: {
        title: 'Фон',
        list: [
            {
                title: 'Изображение',
                value: 'image',
            },
            {
                title: 'видео',
                value: 'video',
            },
        ],
    },
    locationElelement: {
        title: 'Расположение элементов',
        list: [
            {
                value: 'left',
                icon: 'left',
            },
            {
                value: 'center',
                icon: 'center',
            },
            {
                value: 'right',
                icon: 'right',
            },
        ],
    },
});

export const filesTypes = ref([
    {
        title: 'Изображение',
        type: 'image',
    },
    {
        title: 'Документы',
        type: 'docs',
    },
    {
        title: 'Видео',
        type: 'video',
    },
    {
        title: 'Аудио',
        type: 'audio',
    },
]);

export const deviceList = [
    {
        icon: 'desktop',
        value: 'descktop'
    },
    {
        icon: 'all-devices',
        value: 'all'
    },
    {
        icon: 'mobile',
        value: 'mobile'
    }
]