let $ = document

import { navs } from "../component/nav/nav.js";


window.customElements.define(`nav-r`, navs);

let navm = document.createElement("nav-r")


$.querySelector("header").appendChild(navm)