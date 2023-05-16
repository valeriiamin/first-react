import logo from "../assets/header/logo.png";
import telegram from "../assets/header/telegram.png";
import whatsapp from "../assets/header/whatsapp.png";
import app from "../assets/main/dev/img/app.png";
import rocket from "../assets/main/dev/img/rocket.png";
import win from "../assets/main/dev/img/win.png";
import phone from "../assets/main/services/phone.png";
import mobile from "../assets/main/services/mobile.png";
import cursor from "../assets/main/services/cursor.png";
import web from "../assets/main/services/web.png";
import icon1 from "../assets/main/steps/icon1.png";
import icon2 from "../assets/main/steps/icon2.png";
import icon3 from "../assets/main/steps/icon3.png";
import icon4 from "../assets/main/steps/icon4.png";
import icon5 from "../assets/main/steps/icon5.png";
import icon6 from "../assets/main/steps/icon6.png";
import icon7 from "../assets/main/steps/icon7.png";
import priceType from "../assets/main/prices/type.png";
import priceBusiness from "../assets/main/prices/business.png";
import priceCustom from "../assets/main/prices/custom.png";
import blueCheck from '../assets/main/prices/blue-check.png';
import check from '../assets/main/prices/check.png';
import redCheck from '../assets/main/prices/red-check.png';

let data = {
    header: {
        navList: [
            { id: 1, route: "/", name: "Главная" },
            { id: 2, route: "/development", name: "О нас" },
            { id: 3, route: "/services", name: "Наши услуги" },
            { id: 4, route: "/steps", name: "Этапы работы" },
            { id: 5, route: "/prices", name: "Стоимость" },
            { id: 6, route: "/order", name: "Ещё" },
        ],
        logo: logo,
        telegram: telegram,
        whatsapp: whatsapp,
    },
    main: {
        canvas: [{ app: app }],
        rocket: rocket,
        win: win,
        services: [
            { phone: phone },
            { mobile: mobile },
            { cursor: cursor },
            { web: web },
        ],
        steps: [
            {
                id: 1,
                class: "steps-column steps-column-1",
                icon: icon1,
                title: "Сбор требований",
                text: "Детальное изучение требований, ресурсов и исходной информации по проекту и формирование технического задания на разработку ПО.",
            },
            {
                id: 2,
                class: "steps-column steps-column-2",
                icon: icon2,
                title: "UI/UX Дизайн",
                text: "Разработка современного функционального и удобного дизайна с применением новейших инструментов.",
            },
            {
                id: 3,
                class: "steps-column steps-column-3",
                icon: icon3,
                title: "Прототип (MVP)",
                text: "В результате проектирования формируется прототип и отправляется для разработки продукта",
            },
            {
                id: 4,
                class: "steps-column steps-column-4",
                icon: icon4,
                title: "Разработка",
                text: "Процесс разработки системы интеллектуального учета, мобильного приложения или веб-сайта в режиме максимальной прозрачности.",
            },
            {
                id: 5,
                class: "steps-column steps-column-5",
                icon: icon5,
                title: "Тестирование",
                text: "В ходе тестовых запусков обеспечиваем полную отказоустойчивость продукта.",
            },
            {
                id: 6,
                class: "steps-column steps-column-6",
                icon: icon6,
                title: "Развертывание",
                text: "Запуск готового продукта в работу (ИСУ, сайта, приложения).",
            },
            {
                id: 7,
                class: "steps-column steps-column-7",
                icon: icon7,
                title: "Поддержка и обслуживание",
                text: "Обеспечиваем полную техническую поддержку и сопровождение по всем вопросам, возникающим после развертывания.",
            },
        ],
        prices: [

            {
                id: 1,
                class: "prices-column prices-column-1",
                icon: priceType,
                title: "Типовой",
                li1: 'Каталог товаров или услуг',
                li2: 'Сделать заказ',
                li3: 'Новости и акции',
                li4: 'Обратная связь',
                li5: 'Контакты',
                price: '1 000 000 руб.',
                check: blueCheck,
            },
            {
                id: 2,
                class: "prices-column prices-column-2",
                icon: priceBusiness,
                title: 'Бизнес',
                li1: 'Программа лояльности',
                li2: 'Push уведомления',
                li3: 'Серверная часть',
                li4: 'Панель управления',
                li5: 'Чаты',
                price: '2 000 000 руб.',
                check: check,
            },
            {
                id: 3,
                class: "prices-column prices-column-3",
                icon: priceCustom,
                title: "Кастом",
                li1: 'Автоматизация бизнес-процессов',
                li2: 'Сложные интеграции',
                li3: 'Маркетплейс',
                li4: 'Корпоративные решения',
                li5: 'Smart TV, Kit, VR  AR',
                price: '3 000 000 руб.',
                check: redCheck,
            },
        ],

    },
    buttons: [
        { id: 1, name: "Заказать приложение", style: "main-button" },
        { id: 2, name: "Онлайн-консультация", style: "main-button-blue" },
        { id: 3, name: "Оставить заявку", style: "steps-button" },
        { id: 4, name: "Заказать приложение", style: "prices-button" },
        { id: 5, name: "Заказать обратный звонок", style: "order-button" },
    ],
};

export default data;
