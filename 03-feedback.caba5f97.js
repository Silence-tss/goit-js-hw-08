var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,f=a||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,m=function(){return f.Date.now()};function d(e,t,n){var o,i,r,a,u,f,c=0,d=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function T(e){return c=e,u=setTimeout(S,t),d?g(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||b&&e-c>=r}function S(){var e=m();if(j(e))return O(e);u=setTimeout(S,function(e){var n=t-(e-f);return b?s(n,r-(e-c)):n}(e))}function O(e){return u=void 0,y&&o?g(e):(o=i=void 0,a)}function h(){var e=m(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return T(f);if(b)return u=setTimeout(S,t),g(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=p(t)||0,v(n)&&(d=!!n.leading,r=(b="maxWait"in n)?l(p(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},h.flush=function(){return void 0===u?a:O(m())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(v(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=v(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var u=o.test(e);return u||i.test(e)?r(e.slice(2),u?2:8):n.test(e)?NaN:+e}const b=document.querySelector(".feedback-form"),y=document.querySelector("input[name='email']"),g=document.querySelector("textarea[name='message']");let T;function j(){const e={email:y.value,message:g.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}y.addEventListener("input",(()=>{T&&clearTimeout(T),T=setTimeout(j,500)})),g.addEventListener("input",(()=>{T&&clearTimeout(T),T=setTimeout(j,500)}));const S=localStorage.getItem("feedback-form-state");if(S){const e=JSON.parse(S);y.value=e.email,g.value=e.message}b.addEventListener("submit",(e=>{e.preventDefault(),localStorage.removeItem("feedback-form-state");const t={email:y.value,message:g.value};console.log(t),y.value="",g.value=""}));
//# sourceMappingURL=03-feedback.caba5f97.js.map
