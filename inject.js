console.log('inject cargado');

var s = document.createElement('script');
// var m = document.createElement('script');
// var n = document.createElement('script');

s.src = chrome.runtime.getURL('script.js');
// m.src = chrome.runtime.getURL('moment-with-locales.min.js');
// n.src = chrome.runtime.getURL('https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js');

s.onload = function () {
    console.log('this.remove()');
    this.remove();
};


// m.onload = function () {
// this.remove();
// };
// n.onload = function () {
// this.remove();
// };

(document.head || document.documentElement).appendChild(s);
// (document.head || document.documentElement).appendChild(m);
// (document.head || document.documentElement).appendChild(n);

document.addEventListener('DOMContentLoaded', event => {
    event.preventDefault()
    console.log('Se cargó la pagina');
});