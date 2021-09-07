export function sentEmailComponent() {
  const componentEl = document.createElement("div");
  const emailId=location.pathname.split("/")[2];
  console.log(emailId);
  componentEl.innerHTML = `
  <div class="inbox__container--final--sent">
    <h2 class="inbox__title">Enviado</h2>
    <h3 class="inbox__subtitle">Lo que esté en la URL<a href="/sent/${emailId}" class="link-intern inbox__subtitle"> ${emailId}</a></h3>
    </div>
  `;
  return componentEl;
  //el.appendChild(componentEl);
}
