import { ref } from 'vue';

export const userQuizList = [
    {
        title: 'первый',
        link: '#',
    },
    {
        title: 'второй',
        link: '#',
    },
    {
        title: 'третий',
        link: '#',
    },
    {
        title: 'четвертый',
        link: '#',
    },
];

export const testQuizList = ref([
    {
        id: 1,
        img: 'https://design.kuhni-giulianovars.ru/images/catalog/L01/4.jpg',
        title: 'Калькулятор расчета стоимости кухни',
        categories: ['кухни', 'строительство и ремонт'],
        link: 'quizmarket.ru/87648',
        applications: 10,
        applicationUrl: 'quizmarket.ru/87648',
    },
    {
        id: 2,
        img: 'https://design.kuhni-giulianovars.ru/images/catalog/L01/4.jpg',
        title: 'Калькулятор расчета стоимости кухни',
        categories: ['кухни', 'строительство и ремонт'],
        link: 'quizmarket.ru/12345',
        applications: 5,
        applicationUrl: 'quizmarket.ru/87648',
    },
    {
        id: 3,
        img: 'https://design.kuhni-giulianovars.ru/images/catalog/L01/4.jpg',
        title: 'Калькулятор расчета стоимости кухни',
        categories: ['кухни', 'строительство и ремонт'],
        link: 'quizmarket.ru/67890',
        applications: 22,
        applicationUrl: 'quizmarket.ru/87648',
    },
    {
        id: 4,
        img: 'https://design.kuhni-giulianovars.ru/images/catalog/L01/4.jpg',
        title: 'Калькулятор расчета стоимости кухни',
        categories: ['кухни', 'строительство и ремонт'],
        link: 'quizmarket.ru/24680',
        applications: 17,
        applicationUrl: 'quizmarket.ru/87648',
    },
    {
        id: 5,
        img: 'https://design.kuhni-giulianovars.ru/images/catalog/L01/4.jpg',
        title: 'Калькулятор расчета стоимости кухни',
        categories: ['кухни', 'строительство и ремонт'],
        link: 'quizmarket.ru/13579',
        applications: 29,
        applicationUrl: 'quizmarket.ru/87648',
    },
    {
        id: 6,
        img: 'https://design.kuhni-giulianovars.ru/images/catalog/L01/4.jpg',
        title: 'Калькулятор расчета стоимости кухни',
        categories: ['кухни', 'строительство и ремонт'],
        link: 'quizmarket.ru/35246',
        applications: 12,
        applicationUrl: 'quizmarket.ru/87648',
    },
    {
        id: 7,
        img: 'https://design.kuhni-giulianovars.ru/images/catalog/L01/4.jpg',
        title: 'Калькулятор расчета стоимости кухни',
        categories: ['кухни', 'строительство и ремонт'],
        link: 'quizmarket.ru/97531',
        applications: 38,
        applicationUrl: 'quizmarket.ru/87648',
    },
    {
        id: 8,
        img: 'https://design.kuhni-giulianovars.ru/images/catalog/L01/4.jpg',
        title: 'Калькулятор расчета стоимости кухни',
        categories: ['кухни', 'строительство и ремонт'],
        link: 'quizmarket.ru/46802',
        applications: 56,
        applicationUrl: 'quizmarket.ru/87648',
    },
]);

export const testQuestionsList = ref([
    {
        id: 1,
        title: 'Как часто вы обращаетесь к юристам?',
        view: {
            icon: 'txt-fields',
            title: 'Текстовый вариант',
        },
        hint: true,
    },
    {
        id: 2,
        title: 'По каким вопросам вы чаще всего обращались?',
        view: {
            icon: 'download',
            title: 'Загрузка файлов',
        },
    },
    {
        id: 3,
        title: 'Довольны ли вы полученной консультацией?',
        view: {
            icon: 'date-green',
            title: 'Даты, диапазон дат',
        },
    },
    {
        id: 4,
        title: 'По каким вопросам вы чаще всего обращались?',
        view: {
            icon: 'dropdown',
            title: 'Выпадающий список',
        },
    },
]);

export const testResults = ref([
    {
        main: true,
        id: 1,
        title: 'Получите скидку 25% за прохождение квиза',
        scoreResults: true,
    },
    {
        main: false,
        id: 2,
        title: 'Дарим бонус 2000 руб. за прохождение квиза',
        scoreResults: false,
    },
]);

export const testContacts = ref([
    {
        main: true,
        id: 1,
        title: 'Получите скидку 25% за прохождение квиза',
        scoreResults: true,
    },
    {
        main: false,
        id: 2,
        title: 'Дарим бонус 2000 руб. за прохождение квиза',
    },
]);

export const testQuizCategoryList = [
    {
        title: 'test1',
        icon: 'plus',
    },
    {
        title: 'test2',
        icon: 'close',
    },
    {
        title: 'test3',
        icon: 'trash',
    },
];

export const testCrmList = ref([
    {
        id: 1,
        image: 'https://balns.ru/upload/iblock/c02/1zj9do4ghkh097zbw4zwq2jiy5ww1iit.png',
        url: 'https://',
        password: '',
        email: '',
        name: 'Bitrix24'
    },
    {
        id: 2,
        image: 'https://roistat.com/img/integrations-pages/integrations-logos/amocrm.png',
        login: '',
        password: '',
        email: '',
        name: 'AmoCrm'
    },
])

export const testSetupList = [
    {
        id: 1,
        title: 'По кнопке',
        description: 'Конструктор кнопки или собственная кнопка',
        icon: 'button-variant',
        variant: 'button',
        settings: {}
    },
    {
        id: 2,
        title: 'Баннером',
        description: 'Сбоку или на всю ширину экрана',
        icon: 'baner-variant',
        variant: 'baner',
        settings: {}
    },
    {
        id: 3,
        title: 'В тело сайта',
        description: 'Задайте кастомные размеры и встройте',
        icon: 'body-variant',
        variant: 'body',
        settings: {}
    },
    {
        id: 4,
        title: 'Автооткрытие',
        description: 'Попап автоматически открывается на сайте',
        icon: 'open-variant',
        variant: 'open',
        settings: {}
    },
];
