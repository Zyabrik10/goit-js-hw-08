!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n=document.querySelector("form"),i={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,v=s||d||Function("return this")(),m=Object.prototype.toString,g=Math.max,p=Math.min,b=function(){return v.Date.now()};function y(e,t,n){var i,o,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function m(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function y(e){return c=e,f=setTimeout(h,t),s?m(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(O(e))return S(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?p(n,a-(e-c)):n}(e))}function S(e){return f=void 0,v&&i?m(e):(i=o=void 0,u)}function T(){var e=b(),n=O(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return y(l);if(d)return f=setTimeout(h,t),m(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=w(t)||0,j(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(w(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},T.flush=function(){return void 0===f?u:S(b())},T}function j(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(j(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=j(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var i=f.test(e);return i||l.test(e)?c(e.slice(2),i?2:8):u.test(e)?NaN:+e}i=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return j(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:i,maxWait:t,trailing:o})},n.addEventListener("input",i((function(){var e={email:n.email.value,message:n.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),n.addEventListener("submit",(function(e){e.preventDefault();var t={email:n.email.value,message:n.message.value};console.log(t),n.reset(),localStorage.clear()})),window.addEventListener("load",(function(){var e=JSON.parse(localStorage.getItem("feedback-form-state"));null!==e&&""!==e.email&&""!==e.message&&(n.email.value=e.email,n.message.value=e.message)}))}();
//# sourceMappingURL=03-feedback.81debd38.js.map
