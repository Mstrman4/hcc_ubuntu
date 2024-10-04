const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="font/all.min.css">

<div class="container m-auto ">

        <div class="flex flex-wrap  ">
            <div class="p-2 w-full md:w-3/12 rounded-3xl">
                <p class="text-center text-7xl font-extrabold h-full bg-black text-white p-6 rounded-lg md:text-5xl lg:text-7xl leading-[6rem] flex items-center justify-center">
                  اهداف
                </p>
              </div>
              
            <div  class=" text-black p-2 w-full md:w-9/12 rounded-3xl "> 
                <div class="bg-white flex flex-col md:flex-row p-4 rounded-lg text-center gap-4 md:gap-0  ">
                    <div class="text-center  text-4xl md:w-3/12 md:text-2xl lg:text-4xl flex justify-center items-center " >
                        <p class="font-extrabold">شبکه سازی حرفه ای</p>
                     </div>
                    <p class="text-xl text-[#514f4f] font-normal md:w-9/12 md:text-base lg:text-lg  ">
                        در این بخش، شرکت‌کنندگان فرصتی خواهند داشت تا با دیگر متخصصین و علاقه‌مندان به لینوکس و اوبونتو ارتباط برقرار کنند.
                         این ارتباطات می‌تواند به ا
                         شتراک تجربیات، مشاوره‌های حرفه‌ای و حتی ایجاد فرصت‌های شغلی منجر شود. همچنین گروه‌هایی برای همکاری در پروژه‌های متن‌
                        باز معرفی خواهند شد که افراد می‌توانند در آنها مشارکت داشته باشند.
                    </p>
                </div>
            </div>
        </div>

         <div class="flex flex-wrap ">

            <div class=" md:w-7/12 p-2 ">
                <div class="bg-white flex flex-col md:flex-row p-4 rounded-lg text-center h-full gap-4 md:flex-col">
                    <div class=" flex  items-center justify-between  w-full" >
                     
                        <h1 class="text-3xl font-black text-right md: ">ارتقا دانش و مهارت های تخصصی</h1>
                        <img src="img/istockphoto-1299755243-612x612 1.png" alt="">
                    
                    </div>
                    <p class="text-xl text-right text-[#514f4f] font-normal">

                        در این بخش، کارگاه‌های تخصصی و آموزشی برگزار خواهد شد که به شرکت‌کنندگان کمک می‌کند دانش فنی خود را در زمینه لینوکس 
                        و اوبونتو افزایش دهند. این کارگاه‌ها شامل موضوعاتی مانند مدیریت سرور، امنیت سیستم‌عامل، 
                        توسعه نرم‌افزار برای لینوکس، و بهره‌وری در استفاده از ابزارهای متن‌باز خواهد بود. هدف این بخش، 
                        افزایش دانش و مهارت‌های فنی شرکت‌کنندگان و بهبود کارآیی آنها در پروژه‌های حرفه‌ای و شخصی است.
                    </p>
                </div>
            </div>
           
            <div class="p-2 md:w-5/12">
                <div class=" flex flex-col md:flex-row  text-center gap-4  md:flex-col">
                    <div class=" flex bg-white gap-4  rounded-lg flex-col items-center p-4 justify-between w-full" >

                        <div class="flex justify-between w-full items-center ">

                            <h1 class="text-2xl font-black text-right ">ترغیب نواوری و خلاقیت</h1>
                            <img src="img/download .png" alt="">
                        
                        </div>

                        <p class="text-right font-normal leading-tight     ">
                            یکی از اهداف اصلی اوبونتو و جامعه متن‌باز، تشویق به نوآوری و خلاقیت است. در این بخش، افراد با ایده‌های نوآورانه
                             و پروژه‌های خلاقانه در حوزه متن‌باز آشنا خواهند شد. فضایی برای تبادل ایده‌ها و ارائه پروژه‌های جدید فراهم 
                             می‌شود که شرکت‌کنندگان می‌توانند خلاقیت خود را به اشتراک بگذارند و در پروژه‌های نوآورانه مشارکت کنند. همچنین منابع و 
                             ابزارهایی معرفی می‌شوند که می‌توانند به توسعه‌دهندگان کمک کنند تا پروژه‌های خلاقانه خود را سریع‌تر و مؤثرتر پیش ببرند.
                        </p>
                    </div>
                    <div class=" flex bg-white gap-4  rounded-lg flex-col items-center p-4 justify-between w-full" >

                        <div class="flex justify-between w-full items-center ">

                            <h1 class="text-2xl font-black text-right ">تقویت امنیت سایبری </h1>
                            <img src="img/download 4.png" alt="">
                        
                        </div>

                        <p class="text-right font-normal leading-tight     ">
                            امنیت سایبری یکی از محورهای مهم در دنیای فناوری است.
                             در این بخش، شرکت‌کنندگان با اصول امنیتی لینوکس و ابزارهای مختلف تست نفوذ و محافظت
                             از سیستم‌ها آشنا خواهند شد. همچنین کارگاه‌هایی برای استفاده از ابزارهای امنیتی مانند 
                             Nmap، Wireshark، و دیگر ابزارهای متن‌باز برگزار می‌شود. هدف این بخش،
                              توانمندسازی شرکت‌کنندگان در شناخت و مقابله با تهدیدهای سایبری و بهبود
                             امنیت سیستم‌هایشان است.
                        </p>
                    </div>


                    <div></div>
                </div>
            </div>

         
         </div>

</div>


`
class sec5 extends HTMLElement {
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
  sec5
}