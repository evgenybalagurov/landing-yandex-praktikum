const tasksArray = [
  {
    title: "Стать наставником",
    text: [
      "Помогать студентам ставить цели, рефлексировать и делать выводы",
      "Отвечать на их вопросы в чате",
      "Проводить вебинары 2 раза в месяц и давать обратную связь",
      "Делиться опытом и мотивировать",
    ],
    linkName: "Посмотреть вакансии",
    link: "#",
  },
  {
    title: "Стать ревьюером",
    text: [
      "Проверять работы студентов",
      "Простыми словами объяснять им их ошибки",
      "Давать корректирующую обратную связь",
      "Оценивать работы —зачет/незачет",
    ],
    linkName: "Посмотреть вакансии",
    link: "#",
  },
  {
    title: "Не знаю кем стать",
    text: ["Пройдите тест и узнайте, что вам больше подходит"],
    linkName: "Посмотреть вакансии",
    link: "#",
  },
];

const tasksListSection = ".tasks__items";
const tasksTextListSection = ".task__text-items";
const templateTaskSelector = ".template-task";
const templateTaskTextSelector = ".template-task-text";

export {
  tasksArray,
  tasksListSection,
  tasksTextListSection,
  templateTaskSelector,
  templateTaskTextSelector,
};
