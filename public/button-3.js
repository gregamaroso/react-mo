class PGAddToBag extends HTMLButtonElement {
  constructor() {
    super();
    this._skuId = null;

    // this.addEventListener("click", () => {
    //  alert('here');
    // });
  }
  connectedCallback() {
  }
  disconnectedCallback() {
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

let i = 0;
const obs = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes') {
      console.log(mutation);

      const ele = mutation.target;
      const skuId = ele.dataset.skuId;
      const button = document.createElement('add-to-bag');

      ele.innerHTML = '';
      ele.appendChild(button);
    }
  });

  if (++i === 2) {
    throw new Error("peace out");
    return false;
  }
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