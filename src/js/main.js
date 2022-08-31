// selectors

const openPopupBtn = document.querySelector('.open-popup')
const lightboxContainer = document.querySelector('.lightbox-container');
const closeBtn = document.querySelector('.close');

console.log(lightboxContainer);




//functions



const showLightbox = () => {
	lightboxContainer.classList.add('active')
}

const hideLightbox = () => {
	lightboxContainer.classList.remove('active')
}



// listeners

openPopupBtn.addEventListener('click', () => {
    showLightbox();
    console.log('aaa');
})



closeBtn.addEventListener('click', () => {
    hideLightbox();
    console.log('aaa');
})
