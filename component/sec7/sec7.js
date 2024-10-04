
const template = document.createElement('template');

let list =[
  { img:"img/park.png", title:"پارک علم و فناوری" , des:"پارک علم و فناوری استان هرمزگان به منظور ایجاد زیرساخت های مناسب در راستای توسعه علم و فناوری"},
  { img:"img/limo.png", title:"لیمو هاست" , des:"از تنوع سرویس‌های میزبانی وب (web hosting) تا بهینه‌ سازی سایت و مهاجرت رایگان ما تمام راه‌های منحصر به فرد "},
  { img:"img/ramak.png", title:"رامک" , des:"شرکت فرآورده های لبنی  تولیدکننده انواع محصولات لبنی و یکی از بزرگترین زیرمجموعه های هلدینگ دلتا در ایران است "},
]

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="font/all.min.css">


<div class="container cons mx-auto flex flex-wrap ">

</div>


`
class sec7 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {

    
    list.forEach( (spons)=>{
      
      let temp = `    <div class="p-4 w-full md:w-6/12 lg:w-4/12">
          <div class="bg-white flex p-4 rounded-lg w-full  gap-2 items-center h-full">
              <img src="${spons.img}" class="h-fit" alt="">
              <div  class="flex flex-col gap-3">
                  <h1  class=" text-2xl  font-extrabold">${spons.title}</h1>
                  <P class=" font-light text-xl md:text-lg   ">${spons.des}</P>
              </div>
          </div>
      </div>` 

      this.shadowRoot.querySelector(".cons").insertAdjacentHTML("beforeend",temp)


})

  }
}

export {
  sec7
}