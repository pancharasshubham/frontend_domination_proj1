//nav sticky

const mainnav = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    if(document.documentElement.scrollTop > 2){
        mainnav.classList.add('sticky');
    } else {
        mainnav.classList.remove('sticky');        
    }
});

//swiper