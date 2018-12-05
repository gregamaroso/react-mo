
// Custom component/element defined globally
class PGAddToBag extends HTMLButtonElement {
  // Disable button when the sku is out of stock
  // static get observedAttributes() {
  //   return ['disabled'];
  // }

  handleClick() {
    const skuId = this.getAttribute('data-sku-id');
    const quantity = this.getAttribute('data-quantity');
    console.log(`adding ${quantity} ${skuId}'s to your cart via jsonrpc.tmpl`);
  }

  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }
}

window.customElements.define(
  'add-to-bag',
  PGAddToBag,
  {
    extends: 'button'
  }
);
