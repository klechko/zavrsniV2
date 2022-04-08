const thumbs = document.getElementById('thumbs');
const carouselInner = document.querySelector('.carousel-inner');
const photos = [
    'ax',
    'bumblebee',
    'butterfly',
    'cat',
    'cocaWins',
    'coffee',
    'Copacabana',
    'dandelion',
    'flock',
    'fog',
    'fountain',
    'Fred',
    'grass',
    'hearthstone',
    'Katarina',
    'Marko',
    'parkL',
    'parkP',
    'Pecs',
    'Petar',
    'Pixie',
    'restaurant',
    'sign',
    'sparrow',
    'street',
    'subway',
    'sunset',
    'swift',
    'timesSquare',
    'towerEiffel',
    'wakeNBooze'
];

const addThumb = (thumbName, i) => {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'col-12 col-sm-6 col-lg-4 col-xl-2 mb-3 mb-xl-4');
    newDiv.setAttribute('data-toggle', 'modal');
    newDiv.setAttribute('data-target', '#portfolioModal');
    newDiv.setAttribute('data-keyboard', 'true');
    const newThumb = document.createElement('img');
    newThumb.setAttribute('src', `media/portfolio/thumbnails/${thumbName}.jpg`);
    newThumb.setAttribute('alt', thumbName);
    newThumb.setAttribute('data-target', '#carouselInModal');
    newThumb.setAttribute('data-slide-to', i);
    newDiv.appendChild(newThumb);
    thumbs.appendChild(newDiv);
}

const addToCarousel = (photoName, i) => {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', i == 0 ? 'carousel-item active' : 'carousel-item');
    const newImg = document.createElement('img');
    newImg.setAttribute('src', `media/portfolio/${photoName}.jpg`);
    newImg.setAttribute('class', 'img-fluid');
    newImg.setAttribute('alt', photoName);
    newDiv.appendChild(newImg);
    carouselInner.appendChild(newDiv);
}

window.addEventListener('load', () => {
    let i = 0;
    photos.forEach(photograph => {
        addThumb(photograph, i);
        addToCarousel(photograph, i);
        i++;
    });
});
