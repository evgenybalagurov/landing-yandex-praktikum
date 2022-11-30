import "./index.css";

import Advantage from "../components/Advantage.js";
import Section from "../components/Section.js";
import Faq from "../components/Faq.js"

import {
  advantageArray,
  faqArray,
  advantageListSection,
  templateAdvantageSelector,
  faqAccordion,
  faqList
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


const faqItems = new Section (
  {
    renderer: (item) => {
      const faqElement = getFaq(item);

      faqItems.setItem(faqElement);
    },
  },
  faqList
)

const getFaq = (item) => {
  const faq = new Faq(item);

  return faq.getFaqElement();
};

faqItems.renderItems(faqArray)

// открытие акардиона
// const faqAccordionArray = Array.from(faqAccordion)

// for (let i = 0; i < faqAccordionArray.length; i++) {
//   faqAccordionArray[i].addEventListener("click", function() {
//     this.querySelector(".faq__vector").classList.toggle("faq__vector_active")
//     const panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     }
//   });
// }
