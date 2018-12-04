
var mutationObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type == 'attributes') {
      console.log(mutation);
    }
  });
});

mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});


