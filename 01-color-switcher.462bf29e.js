document.querySelector("body");const e=document.querySelector("button[data-start]"),t=document.querySelector("button[data-stop]");let d=null;e.addEventListener("click",(()=>{e.disabled=!0,t.disabled=!1,d=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,clearInterval(d)}));
//# sourceMappingURL=01-color-switcher.462bf29e.js.map
