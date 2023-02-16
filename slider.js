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

