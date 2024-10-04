const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="../css/all.min.css">





   <div class="container m-auto flex flex-row-reverse md:flex-row-reverse flex-wrap items-center">
        
        <div id="sec2" class="img-2sec w-full md:w-5/12 p-4 flex justify-center  "> 
<img src="img/Group 13.png" class="w-auto" alt="">
        </div> 
        <div class="data-2sec md:w-7/12  p-4 content-center flex flex-col gap-6 ">
            <h2 class="text-4xl text-white font-black"> جشن انتشار اوبونتو</h2>
            <h1 class="text-white font-light text-4xl">Ubuntu Release Party</h1>
            <p class="text-xl text-white md:text-xl ">جشن انتشار اوبونتو یک رویداد هیجان‌انگیز و پرانرژی است که هر شش ماه یک بار پس از عرضه نسخه جدیدی از توزیع لینوکس اوبونتو برگزار می‌شود. این رویداد فرصتی برای علاقه‌مندان به نرم‌افزارهای آزاد و اوبونتو است تا نسخه جدید این سیستم‌عامل محبوب را جشن بگیرند و در کنار یکدیگر به بحث و تبادل نظر بپردازند.</p>
           
            <h1 class="text-5xl md:text-2xl font-black text-white mt-8">چرا باید در جشن شرکت کنید؟</h1>
            <div class="flex flex-col gap-3 flex-wrap  md:flex-row md:gap-4 ">
                <div class="w-full bg-white rounded-3xl py-4 h-fit px-8 md:w-5/12 md:5"> 
                    <h1 class=" text-center font-black text-4xl md:text-xl "> شبکه سازی </h1>
                    <p class="text-xl text-center  mt-5 md:text-base  " > اگر به دنیای متن‌باز علاقه دارید، این رویداد فرصتی عالی است برای آشنایی با دیگر فعالان این حوزه.</p>
                </div>
                <div class="w-full bg-white rounded-3xl py-4 h-fit px-8 md:w-6/12 " > 
                    <h1 class=" text-center font-black text-4xl md:text-2xl"> یادگیری و پیشرفت</h1>
                    <p class="text-xl text-center  mt-5 md:text-base  " >کارگاه‌ها و آموزش‌ها می‌توانند به شما کمک کنند تا مهارت‌های خود را در حوزه لینوکس و اوبونتو بهبود دهید.</p>
                </div>
                <div class="w-full bg-white rounded-3xl h-fit  py-4 px-8 md:hidden"> 
                    <h1 class=" text-center font-black text-4xl "> پل ورود به  نرم افزار ازاد</h1>
                    <p class="text-xl text-center  mt-5  " > اگر به دنیای متن‌باز علاقه دارید، این رویداد فرصتی عالی است برای آشنایی با دیگر فعالان این حوزه.</p>
                </div>
                <div class="w-full bg-white rounded-3xl h-fit py-4 px-8 md:hidden"> 
                    <h1 class=" text-center font-black text-4xl "> رندوم</h1>
                    <p class="text-xl text-center  mt-5  " > اگر به دنیای متن‌باز علاقه دارید، این رویداد فرصتی عالی است برای آشنایی با دیگر فعالان این حوزه.</p>
                </div>
        
            </div>

        </div>

        
    </div>


`
class sec2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {

    this.className="  pt-6 flex items-center sec2 flex-col "

  }
}

export {
  sec2
}