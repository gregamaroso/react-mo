class PGAddToBag extends HTMLButtonElement {
  static get observedAttributes() { return ["disabled"]; }

  constructor() {
    super();
    this._skuId = null;

    this.addEventListener("click", () => {
      alert('here');
    });
  }
  attributeChangedCallback() {
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

const obs = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes') {
      console.log(mutation);

      const ele = mutation.target;
      const skuId = ele.dataset.skuId;
      const button = document.createElement(
        'button',
        {
          is: 'add-to-bag'
        }
      );
      button.textContent = "Buy " + skuId;

      ele.innerHTML = '';
      ele.appendChild(button);
    }
  });
});

obs.observe(
  // document.getElementsByClassName(".pg-add-to-bag")[0],
  document.body,
  {
    attributeFilter: ["data-sku-id"],
    attributes: true,
    characterData: false,
    childList: false,  // must be false
    subtree: true,
    attributeOldValue: false,
    characterDataOldValue: false,
  }
);

})();