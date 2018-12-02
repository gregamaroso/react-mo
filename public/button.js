
class BlueBuy extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<button type="button">buy for 66,00 €</button>`;
  }
  disconnectedCallback() {
  }
}

window.customElements.define('blue-buy', BlueBuy);
