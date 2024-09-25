let $ = document


import { navs } from "../component/nav/nav.js";
import { mainHeader } from "../component/main-header/main-header.js";
import { sec2 } from "../component/sec2/sec2.js";
import { sec3 } from "../component/sec3/sec3.js";
import { sec4 } from "../component/sec4/sec4.js";




window.customElements.define(`nav-r`, navs);
window.customElements.define(`main-h`, mainHeader);
window.customElements.define(`sec-two`, sec2);
window.customElements.define(`sec-three`, sec3);
window.customElements.define(`sec-for`, sec4);

let navm = document.createElement("nav-r")
let mh = document.createElement("main-h")
let secs2 = document.createElement("sec-two")
let secs3 = document.createElement("sec-three")
let secs4 = document.createElement("sec-for")


$.querySelector("header").appendChild(navm)
$.querySelector("header").appendChild(mh)
$.querySelector("#sec2").appendChild(secs2)
$.querySelector("#sec3").appendChild(secs3)
$.querySelector(".bg-sec4").appendChild(secs4)
$.querySelector(".bg-sec4").insertAdjacentHTML("beforeend",`<a href="#" class=" p-4">ccc</a>`)
