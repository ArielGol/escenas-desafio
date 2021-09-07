export function inboxComponent() {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <div class="section-form__container">
      <h1 class="section-form__title">Inbox</h1>
      <form  class="section-form">
        <input type="text" class="section-form__input" id="emailUno" placeholder="Un email">
        <button class="section-form__button" id="btn" value="submit" onClick="javascript: window.open('./inbox/' + document.getElementById('emailUno').value);"><svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.500004 1.08142L35 21L0.500002 40.9186L0.500004 1.08142Z" stroke="black"/></button>
      </form>
      <form  class="section-form">    
        <input type="text" class="section-form__input" id="emailDos" placeholder="Un email">
        <button class="section-form__button" id="btn" value="submit" onClick="javascript: window.open('./inbox/' + document.getElementById('emailDos').value);"><svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.500004 1.08142L35 21L0.500002 40.9186L0.500004 1.08142Z" stroke="black"/></button>
      </form>
    </div>
  `;
    
  
  return componentEl;


  //el.appendChild(componentEl);
}
