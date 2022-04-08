const index = window;
const division = document.querySelector('main > div');

const sensitivity = 10;
const media = window.matchMedia('(min-width: 1200px)');

const parallax = (e, media) => {
    if(media.matches){
        const x = e.clientX;
        const y = e.clientY;
        division.style.transform = `translate(
            ${x / sensitivity}px,
            ${y / sensitivity}px
            )`;
    }
    else {
        division.style.transform = 'translate(0, 0)';
    }
}

index.addEventListener('mousemove', e => {
    parallax(e, media);
    // media.addListener(parallax);
});