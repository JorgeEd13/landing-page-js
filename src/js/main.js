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
let imagesCarousel = document.getElementById('imageCarousel');

let index = 100;

imagesCarousel.src = `https://picsum.photos/id/${index}/200/200`;

carouselButtons.forEach((buttonCarousel, i) => {    
buttonCarousel.addEventListener('click', () => {
        const selectedButton = document.querySelector('.selected');
        selectedButton.classList.remove('selected');
        
        let imageIndex = index + i;
        let activeImg = `https://picsum.photos/id/${imageIndex}/200/200`;
        imagesCarousel.src = activeImg;
        
        buttonCarousel.classList.add('selected');
    });
});




