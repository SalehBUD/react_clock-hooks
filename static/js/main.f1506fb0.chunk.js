(this["webpackJsonpreact_clock-hooks"]=this["webpackJsonpreact_clock-hooks"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var c=n(4),o=n.n(c),a=n(2),r=n(1),s=(n(9),n(0)),i=function(e){var t=e.name,n=function(){return(new Date).toUTCString().slice(-12,-4)},c=Object(r.useState)(n),o=Object(a.a)(c,2),i=o[0],u=o[1],l=Object(r.useState)(t),j=Object(a.a)(l,2),d=j[0],f=j[1];return Object(r.useEffect)((function(){var e=window.setInterval((function(){u(n),console.info(n())}),1e3);return function(){window.clearInterval(e)}}),[]),Object(r.useEffect)((function(){d!==t&&(console.debug("Renamed to ".concat(t)),f(t))}),[t]),Object(s.jsxs)("div",{className:"Clock",children:[Object(s.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(s.jsx)("span",{className:"Clock__time",children:i})]})};var u=function(){var e=Object(r.useState)(!0),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)("Clock-0"),u=Object(a.a)(o,2),l=u[0],j=u[1],d=function(e){e.preventDefault(),c(!1)},f=function(){c(!0)};return Object(r.useEffect)((function(){document.addEventListener("contextmenu",d),document.addEventListener("click",f);var e=window.setInterval((function(){j(function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}())}),3300);return function(){document.removeEventListener("contextmenu",d),document.removeEventListener("click",f),window.clearInterval(e)}}),[]),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"React clock"}),n&&Object(s.jsx)(i,{name:l})]})};o.a.render(Object(s.jsx)(u,{}),document.getElementById("root"))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.f1506fb0.chunk.js.map