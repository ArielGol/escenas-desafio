export function inboxComponent() {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <div class="section-form__container">
      <h1 class="section-form__title">Inbox</h1>
      <form  class="section-form">
      <input type="text" class="section-form__input" id="emailUno" placeholder="Un email">
  <a href="" class="link-intern--inbox-uno"><svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.500004 1.08142L35 21L0.500002 40.9186L0.500004 1.08142Z" stroke="black"/>
  </svg></a>
</form>
<form  class="section-form">
<input type="text" class="section-form__input--dos" id="emailUno" placeholder="Un email">
<a href="" class="link-intern--inbox-dos"><svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.500004 1.08142L35 21L0.500002 40.9186L0.500004 1.08142Z" stroke="black"/>
</svg></a>
</form>
</div>
  `;

  console.log(componentEl);
  const buttonEl=componentEl.querySelector(".link-intern--inbox-uno");
  const buttonDosEl=componentEl.querySelector(".link-intern--inbox-dos");
  console.log(buttonEl);
  const inputEl=componentEl.querySelector(".section-form__input");
  const inputDosEl=componentEl.querySelector(".section-form__input--dos");
  console.log(inputEl)
  buttonEl.addEventListener('click',()=>{
    buttonEl.href='./inbox/' + inputEl.value;
  })
  buttonDosEl.addEventListener('click',()=>{
  
    buttonDosEl.href='./inbox/' + inputDosEl.value;
  })



  return componentEl;


  //el.appendChild(componentEl);
}
