const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

function autoSlide() {
    // Increase imgId or reset to 1 when it reaches the total number of images
    imgId = (imgId % imgBtns.length) + 1;
    slideImage();
}

// Set interval for automatic sliding, change 5000 to the desired interval in milliseconds
const autoSlideInterval = setInterval(autoSlide, 5000);

// Stop automatic sliding on mouseenter, resume on mouseleave
document.querySelector('.img-showcase').addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

document.querySelector('.img-showcase').addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(autoSlide, 5000);
});

window.addEventListener('resize', slideImage);