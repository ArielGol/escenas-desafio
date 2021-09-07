import { handleRoute } from "./handle-route";

function goTo(path) {
  history.pushState({}, "", path);
  handleRoute(path);
  
}
export function findAndProcessLinks(container:any=document) {
  const els = container.querySelectorAll(".link-intern");
  for (const link of els) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const route = (e.target as any).getAttribute("href");
      goTo(route);
    });
  }
}
(function () {
findAndProcessLinks();
  const sit1ButtonEl = document.querySelector(".button--input");
  const sit2ButtonEl = document.querySelector(".button--sent");
  sit1ButtonEl.addEventListener("click", () =>{
    sit1ButtonEl.style.backgroundColor= "#393939"
    sit2ButtonEl.style.backgroundColor="#888888"
  });
  sit2ButtonEl.addEventListener("click", () =>{
    sit2ButtonEl.style.backgroundColor= "#393939"
    sit1ButtonEl.style.backgroundColor="#888888"
  });
  //sit2ButtonEl.addEventListener("click", () => goTo("/sent"));

  window.addEventListener("load", () => {
    handleRoute(location.pathname);
  });



})();
