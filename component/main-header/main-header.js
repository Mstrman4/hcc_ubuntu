const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" href="../output.css">
 <link rel="stylesheet" href="font/all.min.css">



    
            <div  class="flex text-white flex-col-reverse md:flex-row mt-6  flex-wrap ">
                <div class="titel_header w-full md:w-6/12 content-center md:text-xl  pt-6 ">
                    <h1 class=" text-4xl font-black   text-center md:text-8xl    ">جشن انتشار اوبونتو  </h1>
                    <p class="text-center mt-4 text-4xl md:text-5xl  md:mt-10  md: ">در بندرعباس </p>
                </div>
                
                <div class="img w-full md:w-6/12"> 
                    <img src="img/Group 4.png" alt="">
                </div>
            </div> 

`
class mainHeader extends HTMLElement {
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
  mainHeader
}