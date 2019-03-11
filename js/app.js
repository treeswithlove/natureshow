var counter = 0;
page2Slider = (x) => {
    var whileSlide = [ "../images/pic2.jpg", "../images/pic11.png", "../images/pic3.jpg", "../images/pic4.png", "../images/pic5.png", "../images/pic6.png", "../images/pic7.png", "../images/pic8.png", "../images/pic9.png", "../images/pic10.png", "../images/pic16.png", "../images/pic13.png", "../images/pic15.png", "../images/pic17.png"];
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
    