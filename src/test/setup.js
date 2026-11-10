import '@testing-library/jest-dom';

// Polyfill window.matchMedia if needed
if (typeof window !== 'undefined') {
  window.matchMedia =
    window.matchMedia ||
    function () {
      return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
      };
    };

  // Mock scrollIntoView and scrollTo cleanly for JSDOM
  window.HTMLElement.prototype.scrollIntoView = function () {};
  window.scrollTo = function () {};
}

