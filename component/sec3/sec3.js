const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="../css/all.min.css">




    <div class="flex flex-col md:flex-row-reverse items-center ">


        <div class=" w-full md:w-6/12 timerBox justify-center text-white">
        
            <div class="tims">
            <div id="timer" class=" p-8 flex gap-4  ">

            </div>
            
</div>
 
<div class=" flex p-5 md:p-6 gap-3 items-center">
    <i class="fa-solid bg-white text-xs p-2 rounded-full text-black fa-calendar-days"></i>
    <p class="text-5xl font-bold">26 مهر ماه  </p>
</div>
<div class=" flex p-5  md:p-6 gap-3 items-center">
    <i class="fa-solid bg-white text-xs p-2 rounded-full text-black fa-sharp fa-solid fa-clock"></i>
    <p class="text-2xl font-normal">از ساعت 16:30 الی 22 شب</p>
</div>


        </div>



        <div class=" w-full md:w-6/12 addresBox p-4 bg-white rounded-md text-black">
            <h1 class=" text-4xl font-extrabold py-4">بندرعباس</h1>
            
            <div class=" flex py-5 gap-3 items-center">
                <i class="fa-solid bg-white text-2xl p-2 rounded-full text-black fa-sharp fa-solid fa-map"></i>
                <p class="text-2xl font-extrabold">بلوار ساحلی روبروی پارک غدیر دانشگاه صنعتی امیر کبیر  طبقه دوم سالن همایش </p>
            </div>
            <div class=" flex py-5 gap-3 items-center">
                <i class=" bg-white text-2xl p-2 rounded-full text-black fa-sharp fa-solid fa-phone"></i>
                <p class="text-2xl font-normal"> <a href="tel:09175243968">09058730593</a> & <a href="tel:09175243968">09904597715</a></p>
            </div>

            

           

        </div>

        </div>
        
`
class sec3 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }

  connectedCallback() {
    
    
this.className="container m-auto p-4   items-center"
  let pt = this.shadowRoot.getElementById("timer")
    

    function updateTimer() {
      // تاریخ 24 مهر (15 اکتبر 2024) را تنظیم می‌کنیم
      let future = new Date('2024-10-17T16:30:00'); // تاریخ 24 مهر 1403 معادل با 15 اکتبر 2024

      // تاریخ فعلی
      let now = new Date();
      
      // تفاوت زمانی بین آینده و اکنون
      let diff = future - now;

      // محاسبه روز، ساعت، دقیقه و ثانیه باقی‌مانده
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((diff % (1000 * 60)) / 1000);

    
      

      pt.innerHTML =`
          <div class="w-4/12 bg-white text-black flex flex-col justify-center items-center p-5 rounded-2xl text-2xl">
              <p class="font-bold">${days}</p>
              <p>روز</p>
          </div>
          
            <div class="w-4/12 bg-white text-black flex flex-col justify-center items-center p-5 rounded-2xl text-2xl">
              <p class="font-bold">${hours}</p>
              <p>ساعت</p>
          </div>
          
        
                
             <div class="w-4/12 bg-white text-black flex flex-col justify-center items-center p-5 rounded-2xl text-2xl">
              <p class="font-bold">${mins}</p>
              <p>دقیقه</p>
          </div>`
          

  }


  setInterval(updateTimer, 1000);


  }
}


export {
  sec3
}