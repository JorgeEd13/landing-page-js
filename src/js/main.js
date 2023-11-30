const textAboutMe = document.querySelector('#aboutMe');


const dataWebSite = {
    aboutMe: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum, voluptatibus cupiditate labore eligendi tenetur
    deleniti fugiat nihil facilis, quidem atque quisquam? Unde eveniet odit dolor voluptatum saepe magnam veniam?</p>`
};

const onLoad = () => {
    textAboutMe.innerHTML = dataWebSite.aboutMe;
};

window.addEventListener("load", onLoad);

const carouselButtons = document.querySelectorAll('.buttonCarousel');
const loadingWarning = document.querySelector('loadImg');
let imagesCarousel = document.getElementById('imageCarousel');

let firstImgId = 100;

imagesCarousel.src = `https://picsum.photos/id/${firstImgId}/500`;

carouselButtons.forEach((buttonCarousel, i) => {
    buttonCarousel.addEventListener('click', () => {
        // imagesCarousel.style.display = 'none';


        const selectedButton = document.querySelector('.selected');
        selectedButton.classList.remove('selected');

        let imageIndex = firstImgId + i;
        let activeImg = `https://picsum.photos/id/${imageIndex}/500`;
        imagesCarousel.src = activeImg;

        buttonCarousel.classList.add('selected');
    });
});
