function n(){const n=document.createElement("div");return n.innerHTML='\n  <div class="section-form__container">\n      <h1 class="section-form__title">Inbox</h1>\n      <form  class="section-form">\n        <input type="text" class="section-form__input" id="email" placeholder="Un email">\n        <button class="section-form__button" id="btn" value="submit" onClick="javascript: window.open(\'./inbox/\' + document.getElementById(\'email\').value);"><svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0.500004 1.08142L35 21L0.500002 40.9186L0.500004 1.08142Z" stroke="black"/></button>\n      </form>\n      <form  class="section-form">    \n        <input type="text" class="section-form__input" id="email" placeholder="Un email">\n        <button class="section-form__button" id="btn" value="submit" onClick="javascript: window.open(\'./inbox/\' + document.getElementById(\'email\').value);"><svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0.500004 1.08142L35 21L0.500002 40.9186L0.500004 1.08142Z" stroke="black"/></button>\n      </form>\n    </div>\n  ',n}function t(){const n=document.createElement("div");return n.innerHTML='\n  <div class="section-form__container--sent">\n      <h1 class="section-form__title">Sent</h1>\n      <form  class=" section-form section-form--sent">\n        \n        <input type="text" class="section-form__input" id="email" placeholder="Un email">\n        <button class="section-form__button link-intern" id="btn" value="submit" onClick="javascript: window.open(\'./sent/\' + document.getElementById(\'email\').value);"><svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0.500004 1.08142L35 21L0.500002 40.9186L0.500004 1.08142Z" stroke="black"/>\n        </svg></button>\n      </form>\n      <form  class="section-form">\n        \n        <input type="text" id="email"class="section-form__input" placeholder="Un email">\n        <button class="section-form__button" id="btn" value="submit" onClick="javascript: window.open(\'./sent/\' + document.getElementById(\'email\').value);"><svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M0.500004 1.08142L35 21L0.500002 40.9186L0.500004 1.08142Z" stroke="black"/>\n</button>\n      </form>\n    </div>\n  ',n}function e(){const n=document.createElement("div"),t=location.pathname.split("/")[2];return console.log(t),n.innerHTML=`\n  <div class="inbox__container--final--sent">\n    <h2 class="inbox__title">Enviado</h2>\n    <h3 class="inbox__subtitle">Lo que esté en la URL<a href="/sent/${t}" class="link-intern inbox__subtitle"> ${t}</a></h3>\n    </div>\n  `,n}function o(){const n=document.createElement("div"),t=location.pathname.split("/")[2];return console.log(t),n.innerHTML=`\n  <div class="inbox__container--final">\n    <h2 class="inbox__title">Recibido </h2>\n    <h3 class="inbox__subtitle">Lo que esté en la URL<a href="/inbox/${t}" class="link-intern inbox__subtitle"> ${t}</a></h3>\n    </div>\n  `,n}function i(i){const l=document.querySelector(".container"),c=[{path:/\/inbox/,handler:n},{path:/\/sent/,handler:t},{path:/inbox\/./,handler:o},{path:/sent\/./,handler:e}];for(const n of c)if(n.path.test(i)){const t=n.handler();l.firstChild&&l.firstChild.remove(),l.appendChild(t),s(t)}}function s(n=document){const t=n.querySelectorAll(".link-intern");for(const n of t)n.addEventListener("click",(n=>{n.preventDefault();const t=n.target.getAttribute("href");var e;e=t,history.pushState({},"",e),i(e)}))}!function(){s();const n=document.querySelector(".button--input"),t=document.querySelector(".button--sent");n.addEventListener("click",(()=>{n.style.backgroundColor="#393939",t.style.backgroundColor="#888888"})),t.addEventListener("click",(()=>{t.style.backgroundColor="#393939",n.style.backgroundColor="#888888"})),window.addEventListener("load",(()=>{i(location.pathname)}))}();
//# sourceMappingURL=index.fae4bdd4.js.map
