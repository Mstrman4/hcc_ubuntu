
const template = document.createElement('template');

let list =[
  { link:"https://bandarabbas.aut.ac.ir/" , img:"img/AMIRKABIR.png", title:"دانشگاه امیرکبیر " , des:"دانشگاه صنعتی امیر کبیر حوضه کشتی سازی"},
  { link:"https://limoo.host/" ,img:"img/limo.png", title:"لیمو هاست" , des:"از تنوع سرویس‌های میزبانی وب (web hosting) تا بهینه‌ سازی سایت و مهاجرت رایگان ما تمام راه‌های منحصر به فرد "},
  { link:"https://www.instagram.com/zhstudiio" ,img:"img/zhin.png", title:"استدیو ژین" , des:"ارائه خدمات حرفه‌ای ادیت ویدیو، طراحی بنر و پوستر، و لوگوموشن؛ کمک می‌کنیم تا محتوای بصری خود را به شکلی خلاقانه و منحصر به فرد ارائه دهید."},
  { link:"https://Arkadevelop.com" ,img:"img/arka.png", title:"ارکا develop" , des:"تیم آرکا توسعه هدف توسعه نرم افزارهای کارآمد و با کیفیت با استفاده از تکنولوژی های روز دنیا آغاز به کار نمود"},
  { link:"https://www.instagram.com/metakish" ,img:"img/fulad.png", title:"فولاد سدید کیش " , des:" شرکت فولاد سدید سپهر کیش سال ها حضور خوشنام در بازار فولاد ایران  محکم تر و سخت تر از فولاد"},
  { link:"https://mitadent.ir/" ,img:"img/dandon.png", title:" دندان پزشکی میتادنت" , des:"ما در تلاش هستیم تا با استفاده از کادر مجرب و کارآموزده خود و همچنین بهره گیری از بروزترین و امکانات و خدماتی درجه یک را به شما عزیزان ارائه دهیم"},
  { link:"https://mitadent.ir/" ,img:"img/dandon.png", title:" دندان پزشکی میتادنت" , des:"ما در تلاش هستیم تا با استفاده از کادر مجرب و کارآموزده خود و همچنین بهره گیری از بروزترین و امکانات و خدماتی درجه یک را به شما عزیزان ارائه دهیم"},
  { link:"https://mitadent.ir/" ,img:"img/dandon.png", title:" دندان پزشکی میتادنت" , des:"ما در تلاش هستیم تا با استفاده از کادر مجرب و کارآموزده خود و همچنین بهره گیری از بروزترین و امکانات و خدماتی درجه یک را به شما عزیزان ارائه دهیم"},
  { link:"https://mitadent.ir/" ,img:"img/dandon.png", title:" دندان پزشکی میتادنت" , des:"ما در تلاش هستیم تا با استفاده از کادر مجرب و کارآموزده خود و همچنین بهره گیری از بروزترین و امکانات و خدماتی درجه یک را به شما عزیزان ارائه دهیم"},
  
]
// { link:"https://t.me/fax_vpn" ,img:"img/fax-vpn.png", title:"تحریم شکن فکس" , des:"ما همواره در تلاشیم اتصالی امن و بدون محدودیت برای شما عزیزان فراهم کنیم خدماتی شامل سرویس های مناسب (گیم , ترید , وبگردی و سایر موارد ) با بهترین سرعت و قیمت فراهم کنیم "},
// { link:"https://t.me/fax_vpn" ,img:"img/fax-vpn.png", title:"تحریم شکن فکس" , des:"ما همواره در تلاشیم اتصالی امن و بدون محدودیت برای شما عزیزان فراهم کنیم خدماتی شامل سرویس های مناسب (گیم , ترید , وبگردی و سایر موارد ) با بهترین سرعت و قیمت فراهم کنیم "},
//{ link:"https://ramakdairy.com/", img:"img/ramak.png", title:"رامک" , des:"شرکت فرآورده های لبنی  تولیدکننده انواع محصولات لبنی و یکی از بزرگترین زیرمجموعه های هلدینگ دلتا در ایران است "},

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
      
      let temp = `  <a href="${spons.link}"  class="p-4 w-full md:w-6/12 lg:w-4/12" >  <div class="h-full">
          <div class="bg-white flex p-4 rounded-lg w-full  gap-2 items-center h-full">
              <img src="${spons.img}" class="h-fit" alt="">
              <div  class="flex flex-col gap-3">
                  <h1  class=" text-2xl  font-extrabold">${spons.title}</h1>
                  <P class=" font-light text-xl md:text-lg   ">${spons.des}</P>
              </div>
          </div>
      </div> </a> ` 

      this.shadowRoot.querySelector(".cons").insertAdjacentHTML("beforeend",temp)


})

  }
}

export {
  sec7
}