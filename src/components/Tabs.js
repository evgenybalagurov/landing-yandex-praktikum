class Tabs {
  constructor(config, rendererContent) {
    this.tabs = config.tabsSelector;
    this.head = config.tabsHeadSelector;
    this.body = config.tabsBodySelector;
    this.caption = config.tabsCaptionSelector;
    this.captionActiveClass = config.tabsCaptionActiveClass;
    this.contentActiveClass = config.tabsContentActiveClass;
    this.rendererContent = rendererContent;
  }

  getActiveTabName(head) {
    return head.querySelector(`.${this.captionActiveClass}`).dataset.tab;
  }

  setActiveContent(head, body) {
    if (body.querySelector(`.${this.contentActiveClass}`)) {
      body
        .querySelector(`.${this.contentActiveClass}`)
        .classList.remove(this.contentActiveClass);
    }
    body
      .querySelector(`[data-tab=${this.getActiveTabName(head)}]`)
      .classList.add(this.contentActiveClass);
  }

  onLoad(head, body) {
    if (!head.querySelector(`.${this.captionActiveClass}`)) {
      head.querySelector(this.caption).classList.add(this.captionActiveClass);
    }

    this.setActiveContent(head, body);
  }

  onClick(head, body) {
    head.addEventListener("click", (e) => {
      const caption = e.target.closest(this.caption);
      if (!caption) return;
      if (caption.classList.contains(this.captionActiveClass)) return;

      if (head.querySelector(`.${this.captionActiveClass}`)) {
        head
          .querySelector(`.${this.captionActiveClass}`)
          .classList.remove(this.captionActiveClass);
      }

      caption.classList.add(this.captionActiveClass);

      this.setActiveContent(head, body);

      if (this.rendererContent) {
        this.rendererContent(this.getActiveTabName(head));
      }
    });
  }

  init() {
    const tabs = document.querySelector(this.tabs);
    const head = tabs.querySelector(this.head);
    const body = tabs.querySelector(this.body);

    this.onLoad(head, body);

    this.onClick(head, body);
  }
}

export default Tabs;
