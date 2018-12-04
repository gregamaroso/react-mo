(function() {

const obs = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'attributes') {
      console.log(mutation);
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