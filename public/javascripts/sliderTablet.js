const prevButtonTablet = document.querySelector('.prev_tablet');
const nextButtonTablet = document.querySelector('.next_tablet');
const slidesTablet = document.querySelectorAll('.slides_tablet img');
let currentTabletIndex = 0;

function updateTabletSlide(index) {
    slidesTablet.forEach((slide, i) => {
        slide.classList.toggle('active_tablet', i === index);
    });
}

prevButtonTablet.addEventListener('click', () => {
    currentTabletIndex = (currentTabletIndex - 1 + slidesTablet.length) % slidesTablet.length;
    updateTabletSlide(currentTabletIndex);
});

nextButtonTablet.addEventListener('click', () => {
    currentTabletIndex = (currentTabletIndex + 1) % slidesTablet.length;
    updateTabletSlide(currentTabletIndex);
});

updateTabletSlide(currentTabletIndex);
