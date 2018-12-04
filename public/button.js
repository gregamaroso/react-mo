
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
    
    let observer;
    let listeners = [];
    const doc = win.document;
    const MutationObserver = win.MutationObserver || win.WebKitMutationObserver;
        
    const check = () => {
        for (let i = 0, len = listeners.length; i < len; i++) {
            let listener = listeners[i];
            let elements = doc.querySelectorAll(listener.selector);

            for (let j = 0, jLen = elements.length; j < jLen; j++) {
                let element = elements[j];
                // Make sure the callback isn't invoked with the 
                // same element more than once
                // if (!element.ready) {
                    element.ready = true;
                    listener.fn.call(element, element);
                // }
            }
        }
    };

    const ready = (selector, fn) => {
        listeners.push({
            selector: selector,
            fn: fn
        });

        if (!observer) {
            observer = new MutationObserver((mutations) => {
                console.log('wtf');
                console.log(mutations);
            }).observe(
                doc.documentElement,
                {
                    attributeFilter: ['data-product-id'],
                    attributes: true,
                    childList: true,
                    subtree: false
                }
            );
        }
        // check();
    };
 
    win.ready = ready;
})(this);


(function(win) {


win.ready('.pg-add-to-bag', (element) => {
  console.log(element);
  // element.innerHTML('test');
});

})(this);
