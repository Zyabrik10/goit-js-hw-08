var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};const t=document.querySelector("form");var n={},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function w(e){return l=e,u=setTimeout(h,t),c?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function h(){var e=m();if(j(e))return O(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?v(n,r-(e-l)):n}(e))}function O(e){return u=void 0,g&&i?b(e):(i=o=void 0,a)}function T(){var e=m(),n=j(e);if(i=arguments,o=this,f=e,n){if(void 0===u)return w(f);if(s)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=o=u=void 0},T.flush=function(){return void 0===u?a:O(m())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}n=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})},t.addEventListener("input",n((()=>{const e={email:t.email.value,message:t.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),t.addEventListener("submit",(e=>{e.preventDefault();const n={email:t.email.value,message:t.message.value};console.log(n),t.reset(),localStorage.clear()})),window.addEventListener("load",(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));null!==e&&(t.email.value=e.email,t.message.value=e.message)}));
//# sourceMappingURL=03-feedback.038a7361.js.map