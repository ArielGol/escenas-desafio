export function sentComponent() {
  const componentEl = document.createElement("div");
  componentEl.innerHTML = `
  <div class="section-form__container--sent">
      <h1 class="section-form__title">Sent</h1>
      <form  class=" section-form section-form--sent">
        
        <input type="text" class="section-form__input" id="emailUno" placeholder="Un email">
        <a href="" class="link-intern--sent-uno"><svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.500004 1.08142L35 21L0.500002 40.9186L0.500004 1.08142Z" stroke="black"/>
        </svg></a>
      </form>
      <form  class="section-form">
      <input type="text" class="section-form__input--dos" id="emailUno" placeholder="Un email">
      <a href="" class="link-intern--sent-dos"><svg width="36" height="42" viewBox="0 0 36 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.500004 1.08142L35 21L0.500002 40.9186L0.500004 1.08142Z" stroke="black"/>
      </svg></a>
      </form>
    </div>
  `;
  console.log(componentEl);
  const buttonEl=componentEl.querySelector(".link-intern--sent-uno");
  const buttonDosEl=componentEl.querySelector(".link-intern--sent-dos");
  console.log(buttonEl);
  const inputEl=componentEl.querySelector(".section-form__input");
  const inputDosEl=componentEl.querySelector(".section-form__input--dos");
  console.log(inputEl)
  buttonEl.addEventListener('click',()=>{
    buttonEl.href='./sent/' + inputEl.value;
  })
  buttonDosEl.addEventListener('click',()=>{
  
    buttonDosEl.href='./sent/' + inputDosEl.value;
  })



  return componentEl;
  //el.appendChild(componentEl);
}
