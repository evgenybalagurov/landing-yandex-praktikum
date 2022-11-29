import "./index.css";

import Advantage from "../components/Advantage.js";
import Section from "../components/Section.js";
import Tabs from "../components/Tabs.js";

import {
  advantageArray,
  advantageListSection,
  templateAdvantageSelector,
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

new Tabs({
  tabsSelector: ".vacancy__tabs",
  tabsHeadSelector: ".vacancy__head",
  tabsBodySelector: ".vacancy__body",
  tabsCaptionSelector: ".vacancy__tab-button",
  tabsCaptionActiveClass: "vacancy__tab-button_active",
  tabsContentActiveClass: "vacancy__content_active",
}).init();
