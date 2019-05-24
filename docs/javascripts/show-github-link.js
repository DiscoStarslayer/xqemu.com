const developersPageRegex = /^\/developers.*$/;

function forEachCompat(collection, func) {
  Array.prototype.forEach.call(collection, func);
}

document.addEventListener('DOMContentLoaded', () => {
  if (developersPageRegex.test(window.location.pathname)) {
    const elements = document.getElementsByClassName('md-header-nav__source');

    forEachCompat(elements, element => {
      element.setAttribute('style', 'display: block');
    });
  }
});
