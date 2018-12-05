
// Templates should be able to add listeners on the fly,
// similar to site.onloadRPCRequests.push();
let listeners = {
  addToBag: function(ele) {
    // Gather attributes needs to construct new button
    const skuId = ele.dataset.skuId;
    const quantity = ele.dataset.quantity;
  
    // Instantiate new button
    const button = document.createElement(
      'button',
      {
        is: 'add-to-bag'
      }
    );
    button.setAttribute('data-sku-id', skuId);
    button.setAttribute('data-quantity', quantity);
    button.textContent = `Buy ${quantity} ${skuId}'s`;
  
    // Replace old button with new one
    ele.innerHTML = '';
    ele.appendChild(button);
  }
};



// Global MutationObserver added to a drupal library
// document.addEventListener('DOMContentLoaded', function() {
(function() {
  new MutationObserver((mutations) => {
    const _toCamelCase = (str) => {
      return str.replace(/-([a-z])/g, (m, w) => w.toUpperCase());
    };

    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes') {
        console.log('mutation detected');

        const ele = mutation.target;
        const comp = _toCamelCase(ele.dataset.pgComponent);
  
        if (!!comp && listeners.hasOwnProperty(comp) && typeof listeners[comp] === 'function') {
          listeners[comp](ele);
        }
      }
    });
  }).observe(
    document.body,
    {
      // Should we have an arbitrary data attribute that when changed, recalls the listeners?
      attributeFilter: [
        'data-pg-time',
      ],
      attributes: true,
      characterData: false,
      childList: false,  // must must must be false
      subtree: true,
      attributeOldValue: false,
      characterDataOldValue: false,
    }
  );
// }, false);
})();