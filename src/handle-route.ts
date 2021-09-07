import { inboxComponent } from "../components/inbox/inbox";
import { sentComponent } from "../components/sent/sent";
import { sentEmailComponent } from "../components/sent/email";
import { findAndProcessLinks } from ".";
import { inboxEmailComponent } from "../components/inbox/email";
export function handleRoute(route) {
  const contenedorEl = document.querySelector(".container");
  const routes = [
    {
      path: /\/inbox/,
      handler:inboxComponent,
    },
    {
      path: /\/sent/,
      handler:sentComponent,
    },
    {
      path: /inbox\/./,
      handler:inboxEmailComponent,
    
    },
    {
      path: /sent\/./,
      handler:sentEmailComponent
    }
  ];
  for(const r of routes) {
    if(r.path.test(route)){
      const el = r.handler();
      if(contenedorEl.firstChild){
        contenedorEl.firstChild.remove();
      }
      contenedorEl.appendChild(el);
      findAndProcessLinks(el);
      
    }

  }

  }


