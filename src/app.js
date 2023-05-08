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
            return (index > 8 ) ? '<span class="' + className + '">' + (index + 1) + "</span>" : '<span class="' + className + '">' +'0' + (index + 1) + "</span>" ;
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

// const icons = document.querySelectorAll('.burger');
// const header = document.querySelector('menu');
// const body = document.querySelector('body');
// icons.forEach (icon => {  
//   icon.addEventListener('click', (event) => {
//     icon.classList.toggle("open");
//     header.classList.toggle("open");
    
//     body.classList.toggle("open");

//   });
// });

