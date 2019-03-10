var counter = 0;
function page2Slider(x) {
    var whileSlide = ["../images/pic2.jpg", "../images/pic3.jpg"];
    var size = whileSlide.length - 1;
    counter = counter + x;
    while(counter > size){
        counter=0
        }
    while(counter < 0){
        counter = size
    }
   
    document.querySelector("img").src=whileSlide[counter];
    }