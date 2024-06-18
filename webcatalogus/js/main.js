const arLeft = document.querySelector('.carousel-left');
const arRight = document.querySelector('.carousel-right');
const carouselImages = document.querySelectorAll('.carousel-img');
let currentIndex = 0;

arLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
});

arRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel();
});

function updateCarousel() {
    carouselImages.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

// Initial call to updateCarousel to display the first image
updateCarousel();

//fetch for the intro p
const introText = document.querySelector('.intro-text');

fetch('http://localhost:3000/home-page')
    .then(data => data.json())
    .then(myIntroData => showIntro(myIntroData));
    

    function showIntro(intro) {
        console.log(intro);
        let htmlCode = '';
        for (let i = 0; i < intro.length; i++) {
            const introHome = intro[i];
            htmlCode += createIntro(introHome)
        }
            introText.innerHTML = htmlCode;
    }

    function createIntro(introHome) {
        const myIntro = `
            <p>${introHome.intro}<p>
        `;
        return myIntro;
    }