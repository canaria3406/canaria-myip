(()=>{const e=document.documentElement,t=e=>{try{return localStorage.getItem(e)}catch(e){return null}},l=()=>{const t=getComputedStyle(e).getPropertyValue("--color-mode");return t.length?t.replace(/["'\s]/g,""):"dark"===t?"dark":"light"},d=()=>{e.removeAttribute("data-user-color-scheme"),(e=>{try{localStorage.removeItem(e)}catch(e){}})("user-color-scheme")},m={dark:!0,light:!0},a=a=>{const n=a||t("user-color-scheme");document.getElementById("hl-dark-theme")?m[n]?"dark"===n?(document.getElementById("hl-default-theme").media="none",document.getElementById("hl-dark-theme").media="all"):(document.getElementById("hl-dark-theme").media="none",document.getElementById("hl-default-theme").media="all"):"dark"===l()?(document.getElementById("hl-default-theme").media="none",document.getElementById("hl-dark-theme").media="all"):(document.getElementById("hl-dark-theme").media="none",document.getElementById("hl-default-theme").media="all"):document.getElementById("hl-default-theme")&&(document.getElementById("hl-default-theme").media="all"),n===l()?d():m[n]?e.setAttribute("data-user-color-scheme",n):d()},n={dark:"light",light:"dark"},r=()=>{var e=t("user-color-scheme");if(m[e])e=n[e];else{if(null!==e)return;e=n[l()]}return((e,t)=>{try{localStorage.setItem(e,t)}catch(e){}})("user-color-scheme",e),e};a(),window.onload=()=>{document.getElementById("btn-toggle-dark").addEventListener("click",()=>{a(r())})}})();
