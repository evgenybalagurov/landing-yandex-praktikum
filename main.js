(()=>{"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.p="";const n=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=t.title,this._text=t.text,this._icon=t.icon,this._advantagesSelector=n}var n,a;return n=e,(a=[{key:"_getTemplate",value:function(){this._advantagesElement=document.querySelector(this._advantagesSelector).content.querySelector(".advantages__item").cloneNode(!0)}},{key:"getAdvantagesElement",value:function(){return this._getTemplate(),this._advantagesElement.querySelector(".advantages__title").textContent=this._title,this._advantagesElement.querySelector(".advantages__text").textContent=this._text,this._imageElement=this._advantagesElement.querySelector(".advantages__icon"),this._imageElement.src=this._icon,this._imageElement.alt=this._title,this._advantagesElement}}])&&t(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}const r=function(){function e(t,n){var a=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=a,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"setItem",value:function(e){this._container.append(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}const o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._accordionText=t.accordionText,this._panelText=t.panelText}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){this._faqElement=document.querySelector(".template-faq").content.querySelector(".faq__item").cloneNode(!0)}},{key:"getFaqElement",value:function(){return this._getTemplate(),this._faqElement.querySelector(".faq__accordion-text").textContent=this._accordionText,this._faqElement.querySelector(".faq__panel-text").textContent=this._panelText,this._setEventListeners(),this._faqElement}},{key:"_showPanel",value:function(){var e=this._faqElement.querySelector(".faq__accordion").nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}},{key:"_setEventListeners",value:function(){var e=this;this._faqElement.addEventListener("click",(function(){e._faqElement.querySelector(".faq__vector").classList.toggle("faq__vector_active"),e._showPanel()}))}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();var c=[{icon:e.p+"7ca80c450b828a285e33.svg",title:"Возможность менять жизнь людей к лучшему",text:"Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться"},{icon:e.p+"4d192daddbc651a2e0d4.svg",title:"Общение с людьми из EdTech",text:"Станете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри"},{icon:e.p+"4bbb1056021aad90dd12.svg",title:"Обучение новому",text:"Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей"},{icon:e.p+"a4eb3a23bab6b5168627.svg",title:"Рост внутри роли",text:"Вы сможете стать старшим наставником или сеньор-ревьюером"}],l=(document.querySelector(".faq").querySelectorAll(".faq__accordion"),new r({renderer:function(e){var t=s(e);l.setItem(t)}},".advantages__items")),s=function(e){return new n(e,".template-advantage").getAdvantagesElement()};l.renderItems(c);var u=new r({renderer:function(e){var t=_(e);u.setItem(t)}},".faq__list"),_=function(e){return new o(e).getFaqElement()};u.renderItems([{accordionText:"Что делает наставник?",panelText:"Наставник помогает студентам учиться: отвечает на вопросы и помогает с трудностями. Каждый наставник курирует группу из 50 студентов: общается с ними в Slack, проводит групповые звонки на протяжении 4 месяцев обучения и постоянно улучшает образовательный опыт."},{accordionText:"Что делает ревьюер?",panelText:"Студенты учатся с помощью онлайн-тренажера, а также выполняют самостоятельные работы, которые проверяет, оценивает и комментирует команда специалистов. Роль ревьюера в этом процессе очень важна: он проверяет задания студента и даёт обратную связь. Именно ревьюер решает: зачесть задание или нет. Также он даёт советы по улучшению задания, отмечает неточности, указывает на ошибки."},{accordionText:"Что такое Школа наставников и сколько времени она занимает?",panelText:"Школа наставников — это двухнедельный интенсив по коммуникации и управлению командой для IT-специалистов. Вы узнаете, как передавать знания и опыт начинающим аналитикам и создавать условия для развития самостоятельности своих подопечных. Вас ждёт пять вебинаров в вечернее время продолжительностью 2,5 часа и небольшие домашние задания, рассчитанные на 30-60 минут."}])})();
//# sourceMappingURL=main.js.map