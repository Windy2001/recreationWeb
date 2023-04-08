Data = [
    {
        src: './images/books.jpg',
        index: 0,
        page: './books.html',
        alt: 'a picture of a book'
    },
    {
        src: './images/games.jpg',
        index: 1,
        page: './games.html',
        alt: 'a picture of a gamepad'
    },
    {
        src: './images/animations.jpg',
        index: 2,
        page: './animations.html',
        alt: 'a picture of spy family'
    },
    {
        src: './images/tv-series.jpg',
        index: 3,
        page: './tv-series.html',
        alt: 'a picture of Netflix'
    },
    {
        src: './images/movie.jpg',
        index: 4,
        page: './movies.html',
        alt: 'a picture of a movie board'
    }
]

let isPaused = false;
const img = document.querySelector('.content img');
const imgTotal = 5;
let imgCur = imgTotal;
let interval = setInterval(function(){
    if(!isPaused) {
        imgCur--;
        if(imgCur==0) {
            imgCur = imgTotal;
        }
        img.src = Data[imgCur-1].src;
        img.alt = Data[imgCur-1].alt;
    }
}, 2000);
img.addEventListener('mouseenter', function(){
    isPaused = true;
})
img.addEventListener('mouseleave', function(){
    isPaused = false;
})

const btn = document.querySelectorAll('.choices button');
for(let i=0; i<imgTotal; i++) {
    btn[imgTotal-i-1].addEventListener('click', function(){
        location.href = Data[i].page;
    })
}