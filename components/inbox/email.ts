export function inboxEmailComponent() {
  const componentEl = document.createElement("div");
  const emailId=location.pathname.split("/")[2];
  console.log(emailId);
  componentEl.innerHTML = `
  <div class="inbox__container--final">
    <h2 class="inbox__title">Recibido </h2>
    <h3 class="inbox__subtitle">Lo que esté en la URL<a href="/inbox/${emailId}" class="link-intern inbox__subtitle"> ${emailId}</a></h3>
    </div>
  `;
  return componentEl;
  //el.appendChild(componentEl);
}
