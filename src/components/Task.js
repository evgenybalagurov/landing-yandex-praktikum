class Task {
  constructor(item, taskSelector) {
    this._title = item.title;
    this._text = item.text;
    this._linkName = item.linkName;
    this._link = item.link;
    this._taskSelector = taskSelector;
  }

  _getTemplate() {
    this._taskElement = document
      .querySelector(this._taskSelector)
      .content.querySelector(".task")
      .cloneNode(true);
  }

  getTaskElement() {
    this._getTemplate();

    this._taskElement.querySelector(".task__title").textContent = this._title;
    this._taskLink = this._taskElement.querySelector(".task__link");
    this._taskLink.textContent = this._linkName;
    this._taskLink.href = this._link;

    console.log(this._text);

    return this._taskElement;
  }
}

export default Task;
