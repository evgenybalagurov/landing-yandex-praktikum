class Advantage {
  constructor(item, advantagesSelector) {
    this._title = item.title;
    this._text = item.text;
    this._icon = item.icon;
    this._advantagesSelector = advantagesSelector;
  }

  _getTemplate() {
    this._advantagesElement = document
      .querySelector(this._advantagesSelector)
      .content.querySelector(".advantages__item")
      .cloneNode(true);
  }

  getAdvantagesElement() {
    this._getTemplate();

    this._advantagesElement.querySelector(".advantages__title").textContent =
      this._title;
    this._advantagesElement.querySelector(".advantages__text").textContent =
      this._text;
    this._imageElement =
      this._advantagesElement.querySelector(".advantages__icon");
    this._imageElement.src = this._icon;
    this._imageElement.alt = this._title;

    return this._advantagesElement;
  }
}

export default Advantage;
