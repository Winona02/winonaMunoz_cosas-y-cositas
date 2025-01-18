const brandSlides = document.querySelector('.brand-slides');
const prevBrandButton = document.querySelector('.prev-brand');
const nextBrandButton = document.querySelector('.next-brand');

let brandIndex = 0; // Índice actual
const totalBrands = document.querySelectorAll('.brand').length;
const visibleBrands = 5; 


function updateBrandSlide(index) {
    const slideWidth = document.querySelector('.brand').offsetWidth;
    brandSlides.style.transform = `translateX(-${index * slideWidth}px)`;
}

prevBrandButton.addEventListener('click', () => {
    brandIndex = (brandIndex - 1 + totalBrands) % totalBrands;
    updateBrandSlide(brandIndex);
});

nextBrandButton.addEventListener('click', () => {
    brandIndex = (brandIndex + 1) % totalBrands;
    updateBrandSlide(brandIndex);
});
