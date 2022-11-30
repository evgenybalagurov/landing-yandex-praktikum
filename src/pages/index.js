import "./index.css";

import Advantage from "../components/Advantage.js";
import Vacancy from "../components/Vacancy";
import Section from "../components/Section.js";
import Tabs from "../components/Tabs.js";

import {
  advantageArray,
  vacancyArray,
  advantageListSection,
  templateAdvantageSelector,
  templateVacancySelector,
} from "../utils/constants.js";

const advantagesList = new Section(
  {
    renderer: (item) => {
      const advantageElement = getAdvantage(item);

      advantagesList.setItem(advantageElement);
    },
  },
  advantageListSection
);

const getAdvantage = (item) => {
  const advantage = new Advantage(item, templateAdvantageSelector);

  return advantage.getAdvantagesElement();
};

advantagesList.renderItems(advantageArray);

const getVacancy = (item) => {
  const vacancy = new Vacancy(item, templateVacancySelector);

  return vacancy.getCardElement();
};

new Tabs({
  tabsSelector: ".vacancy__tabs",
  tabsHeadSelector: ".vacancy__head",
  tabsBodySelector: ".vacancy__body",
  tabsCaptionSelector: ".vacancy__tab-button",
  tabsCaptionActiveClass: "vacancy__tab-button_active",
  tabsContentActiveClass: "vacancy__content_active",
}).init();

new Tabs(
  {
    tabsSelector: ".mentor",
    tabsHeadSelector: ".mentor__head",
    tabsBodySelector: ".mentor__body",
    tabsCaptionSelector: ".mentor__tab-button",
    tabsCaptionActiveClass: "tabs__tab-button_active",
    tabsContentActiveClass: "tabs__content_active",
  },
  (dataAttribute) => {
    const vacancyList = new Section(
      {
        renderer: (item) => {
          const vacancyElement = getVacancy(item);

          vacancyList.setItem(vacancyElement);
        },
      },
      `[data-content=${dataAttribute}]`
    );
    const tabsArray = vacancyArray.filter(
      (item) => item.tabContent === dataAttribute
    );

    vacancyList.renderItems(tabsArray);
  }
).init();

new Tabs(
  {
    tabsSelector: ".reviewer",
    tabsHeadSelector: ".reviewer__head",
    tabsBodySelector: ".reviewer__body",
    tabsCaptionSelector: ".reviewer__tab-button",
    tabsCaptionActiveClass: "tabs__tab-button_active",
    tabsContentActiveClass: "tabs__content_active",
  },
  (item) => {
    console.log(item);
  }
).init();
