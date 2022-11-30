import advantagesIcon1 from "../images/advantages/advantages_icon_1.svg";
import advantagesIcon2 from "../images/advantages/advantages_icon_2.svg";
import advantagesIcon3 from "../images/advantages/advantages_icon_3.svg";
import advantagesIcon4 from "../images/advantages/advantages_icon_4.svg";

const advantageArray = [
  {
    icon: advantagesIcon1,
    title: "Возможность менять жизнь людей к лучшему",
    text: "Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться",
  },
  {
    icon: advantagesIcon2,
    title: "Общение с людьми из EdTech",
    text: "Станете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри",
  },
  {
    icon: advantagesIcon3,
    title: "Обучение новому",
    text: "Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей",
  },
  {
    icon: advantagesIcon4,
    title: "Рост внутри роли",
    text: "Вы сможете стать старшим наставником или сеньор-ревьюером",
  },
];

const faqArray = [
  {
    accordionText: "Что делает наставник?",
    panelText:
      "Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт.",
  },
  {
    accordionText: "Что делает ревьюер?",
    panelText:
      "Студенты учатся с помощью онлайн-тренажера, а также выполняют самостоятельные работы, которые проверяет, оценивает и комментирует команда специалистов. Роль ревьюера в этом процессе очень важна: он проверяет задания студента и даёт обратную связь. Именно ревьюер решает: зачесть задание или нет. Также он даёт советы по улучшению задания, отмечает неточности, указывает на ошибки.",
  },
  {
    accordionText:
      "Что такое Школа наставников и сколько времени она занимает?",
    panelText:
      "Школа наставников — это двухнедельный интенсив по коммуникации и управлению командой для IT-специалистов. Вы узнаете, как передавать знания и опыт начинающим аналитикам и создавать условия для развития самостоятельности своих подопечных. Вас ждёт пять вебинаров в вечернее время продолжительностью 2,5 часа и небольшие домашние задания, рассчитанные на 30-60 минут.",
  },
];

const advantageListSection = ".advantages__items";
const templateAdvantageSelector = ".template-advantage";

const faq = document.querySelector(".faq");
const faqAccordion = faq.querySelectorAll(".faq__accordion");
const faqList = ".faq__list";

export {
  advantageArray,
  faqArray,
  advantageListSection,
  templateAdvantageSelector,
  faqAccordion,
  faqList,
};
