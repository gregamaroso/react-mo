// Custom component/element defined globally
class PGAddToBag extends HTMLButtonElement {
  static get observedAttributes() {
    return ["disabled"];
  }

  handleClick() {
    const skuId = this.getAttribute('data-sku-id');
    console.log(`adding ${skuId} to your cart`);
  }

  constructor() {
    super();
    this.addEventListener("click", this.handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }
}
window.customElements.define(
  'add-to-bag',
  PGAddToBag,
  {
    extends: "button"
  }
);




(function() {

// Templates should be able to add listeners on the fly,
// similar to site.onloadRPCRequests.push();
let listeners = {
  addToBag: function(ele) {
    // Gather attributes needs to construct new button
    const skuId = ele.dataset.skuId;
    const quantity = 1;

    // Instantiate new button
    const button = document.createElement(
      'button',
      {
        is: 'add-to-bag'
      }
    );
    button.setAttribute('data-sku-id', skuId);
    button.setAttribute('data-quantity', quantity);
    button.textContent = "Buy " + skuId;

    // Replace old button with new one
    ele.innerHTML = '';
    ele.appendChild(button);
  }
};


// Global MutationObserver added to a drupal library
new MutationObserver((mutations) => {
  const _toCamelCase = (str) => {
    return str.replace(/-([a-z])/g, (m, w) => w.toUpperCase());
  };

  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes') {
      const ele = mutation.target;
      const comp = _toCamelCase(ele.dataset.pgComponent);

      if (listeners.hasOwnProperty(comp) && typeof listeners[comp] === 'function') {
        listeners[comp](ele);
      }
    }
  });
}).observe(
  document.body,
  {
    attributeFilter: ["data-sku-id"],  // need to figure this part out
    attributes: true,
    characterData: false,
    childList: false,  // must be false
    subtree: true,
    attributeOldValue: false,
    characterDataOldValue: false,
  }
);

})();