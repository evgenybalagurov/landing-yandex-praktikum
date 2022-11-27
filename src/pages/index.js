import "./index.css";

import Task from "../components/Task.js";
import Section from "../components/Section.js";

import {
  tasksArray,
  tasksListSection,
  tasksTextListSection,
  templateTaskSelector,
  templateTaskTextSelector,
} from "../utils/constants.js";

const tasksList = new Section(
  {
    renderer: (item) => {
      const taskElement = getTask(item);

      tasksList.setItem(taskElement);
    },
  },
  tasksListSection
);

const getTask = (item) => {
  const task = new Task(item, templateTaskSelector);

  return task.getTaskElement();
};

tasksList.renderItems(tasksArray);
