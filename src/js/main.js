const textAboutMe = document.querySelector('#aboutMe');

const dataWebSite = {
    aboutMe: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum, voluptatibus cupiditate labore eligendi tenetur
     deleniti fugiat nihil facilis, quidem atque quisquam? Unde eveniet odit dolor voluptatum saepe magnam veniam?</p>`
};

    textAboutMe.innerHTML = dataWebSite.aboutMe;

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const carouselButtons = document.querySelectorAll('.buttonCarousel');
const images = document.querySelectorAll('.imageCarousel');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
carouselButtons.forEach((buttonCarousel, indice) => {
    buttonCarousel.addEventListener('click', () => {
        deactivateSelectedButton();

        selectCarouselButton(buttonCarousel);

        hideActiveImage();

        showHiddenImage(indice);
    })
})

function deactivateSelectedButton() { // passo 3 - desmarcar o botão selecionado anterior
    const selectedButton = document.querySelector('.selected');
    selectedButton.classList.remove('selected');
}

function selectCarouselButton(buttonCarousel) { // passo 4 - marcar o botão clicado como se estivesse selecionado
    buttonCarousel.classList.add('selected');
}

function hideActiveImage() { // passo 5 - esconder a imagem ativa de fundo
    const activeImage = document.querySelector('.activeImg');
    activeImage.classList.remove('activeImg');
}

function showHiddenImage(indice) { // passo 6 - fazer aparecer a imagem correspondente ao botão clicado
    images[indice].classList.add('activeImg');
}
