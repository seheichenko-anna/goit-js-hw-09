import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */const n="feedback-form-state",t=document.querySelector(".feedback-form");t.addEventListener("input",o);t.addEventListener("submit",m);function o(){const e={message:t.elements.message.value.trim(),email:t.elements.email.value.trim()};l(n,e)}function m(e){e.preventDefault();const s=t.elements.email.value.trim(),a=t.elements.message.value.trim();s!==""&&a!==""?(console.log({email:s,message:a}),localStorage.removeItem(n),t.reset()):alert("All form fields must be filled in")}function l(e,s){const a=JSON.stringify(s);localStorage.setItem(e,a)}function r(e){const s=localStorage.getItem(e);try{return JSON.parse(s)}catch{return s}}function i(){const e=r(n);t.elements.email.value=(e==null?void 0:e.email)||"",t.elements.message.value=(e==null?void 0:e.message)||""}i();
//# sourceMappingURL=commonHelpers2.js.map
