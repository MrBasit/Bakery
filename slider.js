var arrowRight = document.querySelector(".fa-arrow-right");
var arrowLeft = document.querySelector(".fa-arrow-left");
var sliders = document.querySelectorAll(".slider");
var count =  0;

sliders.forEach((slider, index) => {
        slider.style.left =   `${index * 100}%`;
        console.log(slider.style.left)
    });

function slideSlider(){
    sliders.forEach(slider =>{
        slider.style.transform = `translateX(-${count * 100}%)`;
    })
}
arrowRight.addEventListener('click', function(){
    console.log("right arrow clicked")
    if(count < 2){
        count++ 
        slideSlider();

    }
    
})
arrowLeft.addEventListener('click', function(){
    console.log("left arrow clicked")
    if(count > 0){
        count-- 
        slideSlider();

    }
})



var humburger = document.querySelector('.fa-bars');
var navbar = document.querySelector('nav');
var header = document.querySelector('.header');
var cross = document.querySelector('nav > a');
var ul = document.querySelector('nav ul');


humburger.addEventListener('click', function(){
    navbar.classList.add('tablet-response')
    cross.classList.add('cross')
    ul.classList.add('un-list')

})
cross.addEventListener('click', function(){
    navbar.classList.remove('tablet-response')
    cross.classList.remove('cross')
    ul.classList.remove('un-list')
})