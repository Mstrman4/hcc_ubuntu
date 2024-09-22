const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="font/all.min.css">






`
class navs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {

  }
}

export {
  navs
}