const goldBar = document.querySelector('.gold-bar');
const blackBar = document.querySelector('.black-bar');
const bottomBar = document.querySelector('.bottom-bar');
const logo = document.querySelector('.img-container');
const topBar = document.querySelector('.top-bar');
const textLayer = document.querySelector('.main-bar-text');
const bottomBarText = document.querySelector('.bottom-bar .bottom-bar-text');

function animationIN () {
    //set clip path
    goldBar.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0% 100%)';
    blackBar.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0% 100%)';

    logo.style.animation = 'revealLeft .5s linear forwards';
    goldBar.style.animation = 'slideIn .5s ease-in-out forwards .1s';
    blackBar.style.animation = 'slideIn .5s ease-in-out forwards .2s';
    bottomBar.style.animation = 'slideDownBottom .6s ease-in-out forwards .2s';
    topBar.style.animation = 'slideUpTop .5s ease-in forwards .2s';
}

function animationOUT () {
    //set clip path
    goldBar.style.clipPath = 'polygon(8px 0, 100% 0, 100% 100%, 0% 100%)';
    blackBar.style.clipPath = 'polygon(8px 0, 100% 0, 100% 100%, 0% 100%)';

    logo.style.animation = 'hideLeft .5s linear forwards';
    goldBar.style.animation = 'slideOut .4s ease-in-out forwards .3s';
    blackBar.style.animation = 'slideOut .4s ease-in-out forwards .2s';
    bottomBar.style.animation = 'slideUpBottom .3s ease-in forwards';
    topBar.style.animation = 'slideDownTop .3s ease-in forwards';
}

// keyboard shortcut to toggle animations
let isGraphicVisible = true
window.addEventListener('keydown', (event) => {
    event.preventDefault();

    // Check if pressed keycode is a space
    if (event.code === 'Space') {
        if(isGraphicVisible) {
            animationOUT();
            isGraphicVisible = false;
        } else {
            animationIN();
            isGraphicVisible = true;
        }
    }
});

// Adjust Bar widths to fit text
function adjustBarWidth() {
    // Get width of main/bottom texts
    const textLayerWidth = textLayer.offsetWidth;
    const bottomBarTextWidth = bottomBarText.offsetWidth;

    // Add margin left
    const textLayerStyle = window.getComputedStyle(textLayer);
    const marginLeft = parseFloat(textLayerStyle.getPropertyValue('margin-left'));

    // Use width of main or bottomTextLayer
    const barWidth = Math.max(textLayerWidth, bottomBarTextWidth) + marginLeft;

    // Set width of bars
    blackBar.style.width = barWidth + 'px';
    bottomBar.style.width = `${barWidth + 8}px`;
    goldBar.style.width = `${barWidth + 15}px`;
}

// On Load Adjust Bar width
window.onload = () => adjustBarWidth();