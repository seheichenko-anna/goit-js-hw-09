import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const o="formData",t=document.querySelector(".feedback-form");t.addEventListener("input",s);t.addEventListener("submit",m);function s(){const e={message:t.elements.message.value,email:t.elements.email.value};r(o,e)}function m(e){e.preventDefault(),localStorage.removeItem(o),t.reset()}function r(e,n){const a=JSON.stringify(n);localStorage.setItem(e,a)}function l(e){const n=localStorage.getItem(e);try{return JSON.parse(n)}catch{return n}}function c(){const e=l(o);t.elements.email.value=(e==null?void 0:e.email)||"",t.elements.message.value=(e==null?void 0:e.message)||""}c();
//# sourceMappingURL=commonHelpers2.js.map
