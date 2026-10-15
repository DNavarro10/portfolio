/*
 * Light/dark theme toggle (the only script on every page, ~1 KB).
 *
 * It's loaded in <head> without "defer" on purpose: a saved choice must be applied
 * before the page is painted, otherwise visitors who chose dark would see a white flash.
 * It's a separate file (not inline) because the Content-Security-Policy blocks inline scripts.
 *
 * - No saved choice: the site follows the device setting (CSS media query in tokens.css).
 * - After a click: the choice is saved in this browser (localStorage) and set as
 *   data-theme="light" or "dark" on <html>.
 * - Without JavaScript the button stays hidden and the device setting is used.
 */
/* global document, window, localStorage, getComputedStyle */
(function () {
  var KEY = 'theme';
  var root = document.documentElement;
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function readSaved() {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null; // storage blocked (private mode, strict settings): fall back to the device setting
    }
  }

  var saved = readSaved();
  if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);

  function current() {
    return root.getAttribute('data-theme') || (darkQuery.matches ? 'dark' : 'light');
  }

  // Keep the button state and the browser bar color (theme-color) in sync with the theme.
  function sync(buttons) {
    var isDark = current() === 'dark';
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(isDark));
    });
    var bg = getComputedStyle(root).getPropertyValue('--color-bg').trim();
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (meta) {
      if (root.hasAttribute('data-theme') && bg) meta.setAttribute('content', bg);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var buttons = Array.prototype.slice.call(document.querySelectorAll('[data-theme-toggle]'));
    buttons.forEach(function (button) {
      button.hidden = false;
      button.addEventListener('click', function () {
        var next = current() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try {
          localStorage.setItem(KEY, next);
        } catch {
          // Not saved: the choice still applies until the visitor leaves the page.
        }
        sync(buttons);
      });
    });
    sync(buttons);
    darkQuery.addEventListener('change', function () {
      sync(buttons);
    });
  });
})();
