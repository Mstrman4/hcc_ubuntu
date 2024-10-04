let $ = document


import { navs } from "../component/nav/nav.js";
import { mainHeader } from "../component/main-header/main-header.js";
import { sec2 } from "../component/sec2/sec2.js";
import { sec3 } from "../component/sec3/sec3.js";
import { sec4 } from "../component/sec4/sec4.js";
import { sec5 } from "../component/sec5/sec5.js";
import { sec6 } from "../component/sec6/sec6.js";
import { sec7 } from "../component/sec7/sec7.js";




// window.customElements.define(`nav-r`, navs);
// window.customElements.define(`main-h`, mainHeader);
// window.customElements.define(`sec-two`, sec2);
// window.customElements.define(`sec-three`, sec3);
// window.customElements.define(`sec-for`, sec4);
window.customElements.define(`sec-five`, sec5);
window.customElements.define(`sec-sex`, sec6);
window.customElements.define(`sec-seven`,sec7); 

// let navm = document.createElement("nav-r")
// let mh = document.createElement("main-h")
// let secs2 = document.createElement("sec-two")
// let secs3 = document.createElement("sec-three")
// let secs4 = document.createElement("sec-for")
let secs5 = document.createElement("sec-five")
let secs6 = document.createElement("sec-sex")
let secs7 = document.createElement("sec-seven")


// $.querySelector("header").appendChild(navm)
// $.querySelector("header").appendChild(mh)
// $.querySelector("#sec2").appendChild(secs2)
// $.querySelector("#sec3").appendChild(secs3)
// $.querySelector(".bg-sec4").appendChild(secs4)
// $.querySelector("#sec5").appendChild(secs5)
// $.querySelector("#sec6").appendChild(secs6)
$.querySelector("#sec7").appendChild(secs7)



//اسکرولر
// $.querySelector("header").insertAdjacentHTML("beforeend",`   <div class="flex m-7   flex-col text-white text-center">
//         <a href="#sec2" class="font-light  text-2xl ">
//         <p>معرفی</p> 
//         <i class="fa-solid fa-chevron-down"></i>
//         </a>
//     </div>`)


// $.querySelector("#sec2").insertAdjacentHTML("beforeend",`   <div class="flex p-7   flex-col text-white text-center">
//         <a href="#sec3" class="font-light  text-2xl ">
//         <p>محل و تاریخ برگزاری</p> 
//         <i class="fa-solid fa-chevron-down"></i>
//         </a>
//     </div>`)

// $.querySelector("#sec3").insertAdjacentHTML("beforeend",`   <div class="flex p-7   flex-col text-white text-center">
//         <a href="#sec4" class="font-light  text-2xl ">
//         <p>ارایه دهنده </p> 
//         <i class="fa-solid fa-chevron-down"></i>
//         </a>
//     </div>`)

// $.querySelector("#sec4").insertAdjacentHTML("beforeend",`   <div class="flex   flex-col text-white text-center">
//         <a href="#sec5" class="font-light  text-2xl ">
//         <p>اهداف</p> 
//         <i class="fa-solid fa-chevron-down"></i>
//         </a>
//     </div>`)
// $.querySelector("#sec5").insertAdjacentHTML("beforeend",`   <div class="flex p-7   flex-col text-white text-center">
//         <a href="#sec6" class="font-light  text-2xl ">
//         <p>برگزار کننده </p> 
//         <i class="fa-solid fa-chevron-down"></i>
//         </a>
//     </div>`)


