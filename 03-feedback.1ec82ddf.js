!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var l=r("1WSnx"),n=document.querySelector('input[name="email"'),f=document.querySelector('textarea[name="message"'),c=document.querySelector('button[type="submit"'),s={email:"",message:""};if(localStorage.getItem("feedback-form-state")){var i=JSON.parse(localStorage.getItem("feedback-form-state"));n.value=i.email,f.value=i.message}n.addEventListener("input",e(l).throttle((function(e){localStorage.getItem("feedback-form-state")||localStorage.setItem("feedback-form-state",JSON.stringify(s));var t=e.target.value,a=JSON.parse(localStorage.getItem("feedback-form-state"));a.email=t,localStorage.setItem("feedback-form-state",JSON.stringify(a))}),500)),f.addEventListener("input",e(l).throttle((function(e){localStorage.getItem("feedback-form-state")||localStorage.setItem("feedback-form-state",JSON.stringify(s));var t=e.target.value,a=JSON.parse(localStorage.getItem("feedback-form-state"));a.message=t,localStorage.setItem("feedback-form-state",JSON.stringify(a))}),500)),c.addEventListener("click",(function(e){e.preventDefault(),localStorage.getItem("feedback-form-state")?console.log(JSON.parse(localStorage.getItem("feedback-form-state"))):console.log(s),localStorage.clear(),n.value="",f.value=""}))}();
//# sourceMappingURL=03-feedback.1ec82ddf.js.map