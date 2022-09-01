// selectors

const openPopupBtn = document.querySelector('.open-popup');
const lightboxContainer = document.querySelector('.lightbox-container');
const closeBtn = document.querySelector('.close');
const popup = document.querySelector('.popup-wrapper');
const resetButton = document.querySelector('.reset')
let clickCount = document.querySelector('.click-count');
let clicks = 0;

if (sessionStorage.clickNumber) {
    clicks = sessionStorage.getItem("clickNumber");
} else {
    clicks = 0;
}



//functions

const showLightbox = () => {
	lightboxContainer.classList.remove('hide');
};

const hideLightbox = () => {
	lightboxContainer.classList.add('hide');
};

const addClick = () => {
    clicks++;
    clickCount.innerHTML = clicks;
    if (clicks >= 5) {
        resetButton.classList.remove('hide');
        }
    resetButton.addEventListener('click', ()=> {
        clicks = 0;
        clickCount.innerHTML = clicks;
        resetButton.classList.add('hide');
    }); 
    sessionStorage.setItem("clickNumber", clicks);
    }



// listeners

openPopupBtn.addEventListener('click', () => {
	showLightbox();
    addClick();
});

lightboxContainer.addEventListener('click', () => {
    hideLightbox();
});

closeBtn.addEventListener('click', () => {
	hideLightbox();
});

popup.addEventListener('click', (e) => {
	e.stopPropagation();
})



