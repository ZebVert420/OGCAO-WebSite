const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const vm = require('vm');

test('loader element gains hidden class after 1 second', () => {
  jest.useFakeTimers();

  const html = fs.readFileSync(path.join(__dirname, '..', 'Index.html'), 'utf8');
  const dom = new JSDOM(html, { runScripts: 'dangerously' });
  const { window } = dom;

  const $ = require('jquery')(window);
  window.jQuery = window.$ = $;
  $.fn.owlCarousel = function() { return this; };

  global.window = window;
  global.document = window.document;

  const scriptContent = fs.readFileSync(path.join(__dirname, '..', 'script.js'), 'utf8');
  vm.runInContext(scriptContent, dom.getInternalVMContext());

  window.dispatchEvent(new window.Event('load'));
  jest.advanceTimersByTime(1100);

  expect(window.document.getElementById('loader').classList.contains('hidden')).toBe(true);
});
