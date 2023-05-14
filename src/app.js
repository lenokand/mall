// import { Datepicker } from 'vanillajs-datepicker'; 

    // запрет перемещения модального окна
    if(document.querySelector('[href="#modal-call"]')){
        const filterGallary2 = Fancybox.bind('[href="#modal-call"]', {
          // closeButton: "top",
          dragToClose: false,
          // Thumbs: false,
          // Carousel: {
          //     Dots: false,
          // },
        });
        
      }

      var MainSwiper = new Swiper(".main-swiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return (index > 8 ) ? '<div class="' + className + '">'+'<span>' + (index + 1) +'<span/>' + "</div>" : '<div class="' + className + '">' + '<span>' +'0' + (index + 1) +'<span/>' + "</div>" ;
          },
        },
      });
      var FilterSwiper = new Swiper(".filter-swiper", {
        slidesPerView: 'auto',
          clickable: true,
        //   loop: true,
          spaceBetween: 10,
        //   centeredSlides: true,
        //   freeMode: true,
        
      });
      var SpecialsSwiper = new Swiper(".specials-swiper", {
        
          clickable: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            // renderBullet: function (index, className) {
            //   return '<span class="' + className + '">' + (index + 1) + "</span>" : '<span class="' + className + '">' +'0' + (index + 1) + "</span>" ;
            // },
          },
        
      });
      var FirmsSwiper = new Swiper(".firms-swiper", {
          slidesPerView:3,
          clickable: true,
          spaceBetween: 20,
          scrollbar: {
            el: ".swiper-scrollbar",
            dragSize:200,
          },
          breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView:2,
              spaceBetween: 8,
            },
            // when window width is >= 640px
            960: {
              slidesPerView:3,
              spaceBetween: 20,
            }
          }
        
      });


      window.addEventListener('resize', checkWidth);
      checkWidth();
      
      function checkWidth() {
        console.log(window.innerWidth);
        // console.log(getComputedStyle(document.documentElement).getPropertyValue('--is-thewidth'));



        if(window.innerWidth <= 660 ){


          var TabsSwiper = new Swiper(".tabs-swiper", {
            slidesPerView: 'auto',
            // clickable: true,
            // spaceBetween: 20,
            scrollbar: {
              el: ".swiper-scrollbar",
              dragSize:80,
            },
          
        });
       }
       


      }



    
      

 



// табы на главной

// let tab_controls = document.querySelectorAll('.info-block .info-tab_item')
// let tab_contents = document.querySelectorAll('.info-block .info-tab_content')

// let tab_next = document.querySelectorAll('.news-nav .swiper-navigation-next')
// let tab_prev = document.querySelectorAll('.news-nav .swiper-navigation-prev')



// let active_index


// if (tab_controls.length > 0) {

//   tab_next.forEach(next => {


//       next.addEventListener('click', function(){
   
//       let active_content_index = document.querySelector('.info-block .info-tab_item.active')
//       let n =  active_content_index.getAttribute('data-index')

//             if(n < tab_controls.length){
           
//             tab_controls[+n+1].click()
//             }

//     })
//   })

//   tab_prev.forEach(prev => {
//         prev.addEventListener('click', function(){

//         let active_content_index = document.querySelector('.info-block .info-tab_item.active')
        
//         let n =  active_content_index.getAttribute('data-index')
      
      
//         if(n != 0){

//           tab_controls[+n-1].click()
//         }
//           })
//     })

//   tab_controls.forEach((tab, index) => {

//     tab.setAttribute('data-index', index)



//     tab.addEventListener('click', function(){


//      let active_content = document.querySelector('.info-block .info-tab_content.active')
//      let active_tab = document.querySelector('.info-block .info-tab_item.active')


//      active_content.classList.remove('active')
//      tab_contents[index].classList.add('active')

//      active_tab.classList.remove('active')
//      tab_controls[index].classList.add('active')

//     })}
//   )}



        // бургер меню

const icons = document.querySelectorAll('.burger');
const header = document.querySelector('.menu-bottom_container');
const body = document.querySelector('body');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    header.classList.toggle("open");
    
    body.classList.toggle("open");

  });
});

// const elem = document.getElementById('actions-menu-date-calendar');
// const datepicker = new Datepicker(elem, {

// });



// маска тел
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;

    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});