// images
import sliderImgElectronics from "../images/slider-img-electronics-0.jpg";
import sliderImgJewelery from "../images/slider-img-jewelery-1.jpg";
import sliderImgMensClothing from "../images/slider-img-mensClothes-2.jpg";
import sliderImgWomensClothing from "../images/slider-img-womensClothes-3.jpg";

const sliderImg = document.querySelector(".slider__img");
const previousBtn = document.querySelector(".slide__btn-previous");
const nextBtn = document.querySelector(".slide__btn-next");

let indexOfCurrentImage = 0;
const timeToChangeSlide = 5000;
let images = [
    sliderImgElectronics,
    sliderImgJewelery,
    sliderImgMensClothing,
    sliderImgWomensClothing,
];





export const changeSliderImg = _ => {
     const changeSlideAuto = () => {
        sliderImg.src = images[indexOfCurrentImage];
        if(indexOfCurrentImage < images.length - 1) {
            indexOfCurrentImage++;
        } else {
            indexOfCurrentImage = 0;
        }
        setTimeout(changeSlideAuto, timeToChangeSlide);
    }



    const changeSlideNext = () => {
        sliderImg.src = images[indexOfCurrentImage];
        if(indexOfCurrentImage < images.length - 1) {
            indexOfCurrentImage++;
        } else {
            indexOfCurrentImage = 0;
        }
    }



    const changeSlidePrev = _ => {
        sliderImg.src = images[indexOfCurrentImage];
        if(indexOfCurrentImage <= 0) {
            indexOfCurrentImage = images.length - 1;
        } else {
            indexOfCurrentImage--;
        }
    }



    // next slide
    nextBtn.addEventListener("click", changeSlideNext);

    // previous slide
    previousBtn.addEventListener("click", changeSlidePrev);

    // initiate the auto slide
    window.onload = changeSlideAuto;


    console.log("image slider module")
}
