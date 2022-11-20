const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const images = $$('.images .image img');
const button = $('.button');
const close = $('.close');
const img = $('.img img');
const next = $('.control.right');
const prev = $('.left');


currentIndex = 0;
images.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        Show();
    })
});

function Show() {
    if (currentIndex == 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }
    // console.log(currentIndex);
    if (currentIndex == images.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }

    img.src = images[currentIndex].src;
    button.classList.add('show');
}

close.addEventListener('click', () => {
    button.classList.remove('show');
});

next.addEventListener('click', () => { 
    if (currentIndex < images.length) {
        currentIndex++;
        Show();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.keyCode == 27) {
        button.classList.remove('show');
    }
 });
