const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="font/all.min.css">



 <div class="container p-4 md:p-0 m-auto flex flex-col md:flex-row ">
 <h1  class="text-center  text-white font-bold text-6xl md:hidden ">برگزار کننده </h1>
 <div class="flex flex-col my-8  bg-white py-2   rounded-lg   md:w-4/12   md:p-5   ">
     <img src="img/Group 38.png " alt="">
     <p class="font-light text-[#4A4A4A]  text-xl text-center">   یک نهاد یا گروهی است که به ترویج و توسعه علم و فناوری اطلاعات در استان هر
         مزگان می‌پردازد. این جا
         معه معمولاً شامل دانشجویان، متخصصان، کارآفرینان و علاقه‌مندان به حوزه کامپیوتر و فناوری اطلاعات است.</p>
 </div>
 <div class="flex flex-col md:w-8/12 py-5 md:p-3  gap-4  ">
     <h1 class="hidden md:block text-white  text-center md:text-5xl font-black ">برگزار کننده</h1>
     <p class="text-white text-center text-4xl ">اهداف جامعه کامپیوترهرمزگان </p>
     <div class="flex flex-col  md:flex-row flex-wrap ">

         <div class="p-2 md:w-6/12  ">
             
             <div class="flex bg-white w-full gap-2 justify-center p-2 rounded-lg  min-h-[116px] ">
                 <h1 class="font-extrabold text-7xl flex items-center leading-none "> 1</h1>
                 <div class="flex items-center">
                     <p class="text-2xl font-light md:text-sm xl:text-2xl  "><span class="font-bold ">توسعه مهارت ها :</span> برگزاری کارگاه‌ها، دوره‌های آموزشی و سمینارها برای ارتقاء دانش و مهارت‌های اعضا.</p>

                 </div>
             </div>
         </div>

         <div class="p-2 md:w-6/12  ">
             
             <div class="flex bg-white w-full  gap-2 justify-center p-2 rounded-lg min-h-[116px]  ">
                 <h1 class="font-extrabold text-7xl flex items-center leading-none "> 2</h1>
                 <div class="flex items-center">
                     <p class="text-2xl font-light md:text-sm xl:text-2xl  "><span class="font-bold "> شبکه‌سازی:</span> ایجاد فرصت‌های شبکه‌سازی میان اعضا و صنایع مرتبط با فناوری.</p>

                 </div>
             </div>
         </div>
         <div class="p-2 md:w-6/12 ">
             
             <div class="flex bg-white w-full  gap-2 justify-center p-2 rounded-lg min-h-[116px] ">
                 <h1 class="font-extrabold text-7xl flex items-center leading-none "> 3</h1>
                 <div class="flex items-center">
                     <p class="text-2xl font-light md:text-sm xl:text-2xl  "><span class="font-bold ">ترویج علم و فناوری:</span> افزایش آگاهی عمومی درباره اهمیت فناوری اطلاعات و نقش آن در توسعه جامعه.</p>

                 </div>
             </div>
         </div>
         <div class="p-2 md:w-6/12  ">
             
             <div class="flex bg-white w-full  gap-2 justify-center p-2 rounded-lg min-h-[116px] ">
                 <h1 class="font-extrabold text-7xl flex items-center leading-none "> 4</h1>
                 <div class="flex items-center">
                     <p class="text-2xl font-light md:text-sm xl:text-2xl  "><span class="font-bold ">برگزاری رویدادها:</span> سازماندهی کنفرانس‌ها، مسابقات برنامه‌نویسی و دیگر رویدادهای علمی و آموزشی.</p>

                 </div>
             </div>
         </div>
   
     </div>
     <h1 class="text-white font-bold ">رویداد های پیشین</h1>
     <div class="flex flex-wrap">
         <div class=" w-full md:w-6/12 p-1" >
             <img src="img/6-img2.png" alt="">
         </div>
         <div class=" w-6/12 md:w-3/12 p-1">
             <img src="img/6-img.png" alt="">
         </div>
         <div class="w-6/12 md:w-3/12 p-1">
             <img src="img/6-2.png" alt="">
         </div>
     </div>
 </div>
</div>


`
class sec6 extends HTMLElement {
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
  sec6
}