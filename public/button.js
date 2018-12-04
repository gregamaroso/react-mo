
class PGAddToBag extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<button type="button">buy for 66,00 €</button>`;
  }
  disconnectedCallback() {
  }
}
window.customElements.define('pg-add-to-bag', PGAddToBag);


(function(win) {
    'use strict';
    
    let listeners = [];
    let observer;
    const doc = win.document;
    const MutationObserver = win.MutationObserver || win.WebKitMutationObserver;

    const ready = (selector, fn) => {
        listeners.push({
            selector: selector,
            fn: fn
        });
        if (!observer) {
            observer = new MutationObserver(check).observe(
                doc.documentElement,
                {
                    attributeFilter: ['data-pg'],
                    attributes: true,
                    childList: true,
                    subtree: true
                }
            );
        }
        check();
    };
        
    const check = () => {
        let listener, elements;
        for (let i = 0, len = listeners.length; i < len; i++) {
            let element;
            listener = listeners[i];
            elements = doc.querySelectorAll(listener.selector);

            for (let j = 0, jLen = elements.length; j < jLen; j++) {
                element = elements[j];
                // Make sure the callback isn't invoked with the 
                // same element more than once
                if (!element.ready) {
                    element.ready = true;
// console.log(element);
                    listener.fn.call(element, element);
                }
            }
        }
    };

    win.ready = ready;
})(this);


(function(win) {

win.ready('[data-pg]', function(element) {
  console.log(element);
  // element.innerHTML('test');
});

})(this);
