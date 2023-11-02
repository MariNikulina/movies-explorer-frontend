export const diplomaDescriptions = [
  {
    id: 1,
    title: "Дипломный проект включал 5 этапов",
    description: "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки."
  },{
    id: 2,
    title: "На выполнение диплома ушло 5 недель",
    description: "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься."
  }
];

export const tools = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Git",
  "Express.js",
  "mongoDB"
];

export const projectType = [
  {
    id: 1,
    link: "https://marinikulina.github.io/how-to-learn/",
    type: "Статичный сайт"
  },{
    id: 2,
    link: "https://marinikulina.github.io/russian-travel/",
    type: "Адаптивный сайт"
  },{
    id: 3,
    link: "https://mesto.marina.nomoredomainsicu.ru",
    type: "Одностраничное приложение"
  }
];

export const footerLinks = [
  {
    id: 1,
    link: "https://practicum.yandex.ru/",
    name: "Яндекс.Практикум"
  },{
    id: 2,
    link: "https://github.com/MariNikulina?tab=repositories",
    name: "Github"
  }
];

export const moviesC = [
  {
    id: 1,
    trailerLink: "https://www.youtube.com/watch?v=qBEF-YAOCBM",
    image: "https://festagent.com/system/tilda/tild6664-6665-4264-b235-313031653237__6e48dd0561234d7c9b99.jpg",
    name: "Авиатор",
    duration: "81"
  },{
    id: 2,
    trailerLink: "https://www.youtube.com/watch?v=uXC_0wE6k7k",
    image: "https://virtus-img.cdnvideo.ru/images/as-is/plain/f2/f2c72915-06f4-45f4-bacd-ae35f07e82cd.jpg@jpg",
    name: "Аватар",
    duration: "30"
  },{
    id: 3,
    trailerLink: "https://www.youtube.com/watch?v=PKBKmaOFlsg",
    image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/83ab1af5-d033-404b-98fe-64c2f8ca11db/576x",
    name: "Вызов",
    duration: "35"
  },{
    id: 4,
    trailerLink: "https://www.youtube.com/watch?v=PKBKmaOFlsg",
    image: "https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/83ab1af5-d033-404b-98fe-64c2f8ca11db/576x",
    name: "Вызов",
    duration: "41"
  }
];

export const NAME_REGEX = "^[A-Za-zА-Яа-яЁё\\s\\-]+$";

export const inputsRegister = [
  {
    id: 1,
    label: "Имя",
    type: "text",
    placeholder: "Имя",
    nameInput: "name",
    minLength: 2,
    maxLength: 30,
    pattern: NAME_REGEX
  },{
    id: 2,
    label: "E-mail",
    type: "email",
    placeholder: "E-mail",
    nameInput: "email"
  },{
    id: 3,
    label: "Пароль",
    type: "password",
    placeholder: "Пароль",
    nameInput: "password"
  }
];

export const inputsLogin = [
  {
    id: 1,
    label: "E-mail",
    type: "email",
    placeholder: "E-mail",
    nameInput: "email"
  },{
    id: 2,
    label: "Пароль",
    type: "password",
    placeholder: "Пароль",
    nameInput: "password"
  }
];

export const SCREEN_XSM = 424;
export const SCREEN_SM = 480;
export const SCREEN_MD = 768;
export const SCREEN_LG = 900;
export const SCREEN_XL = 1278;
export const SCREEN_XSM_INITIAL_COUNT_CARDS = 5;
export const SCREEN_XSM_ADD_COUNT_CARDS = 2;
export const SCREEN_SM_INITIAL_COUNT_CARDS = 8;
export const SCREEN_SM_ADD_COUNT_CARDS = 2;
export const SCREEN_LG_INITIAL_COUNT_CARDS = 12;
export const SCREEN_LG_ADD_COUNT_CARDS = 3;
export const SCREEN_XL_INITIAL_COUNT_CARDS = 16;
export const SCREEN_XL_ADD_COUNT_CARDS = 4;

