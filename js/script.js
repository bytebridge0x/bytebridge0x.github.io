const images = [
    '/images/i1.png',
    '/images/i2.png',
    '/images/i3.png',
   '/images/i4.png',
];

let currentIndex = 0;
const backgroundElement = document.getElementById('background');

function changeBackground() {
 backgroundElement.classList.remove('active');

    setTimeout(() => {
        backgroundElement.style.backgroundImage = `url(${images[currentIndex]})`;
        backgroundElement.classList.add('active'); 
        currentIndex = (currentIndex + 1) % images.length; 
    }, 1000);
}

changeBackground();
setInterval(changeBackground, 20000);
function toggleMenu() {
            const menu = document.getElementById('menu');
            const xMenu = document.getElementById('x-menu');

            menu.classList.toggle('active');
        }

        const menuLinks = document.querySelectorAll('.menu a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                const menu = document.getElementById('menu');
                menu.classList.remove('active'); 
                document.getElementById('x-menu').classList.remove('active'); 
            });
        });

        document.addEventListener('click', (event) => {
            const menu = document.getElementById('menu');
            const xMenu = document.getElementById('x-menu');

            if (!menu.contains(event.target) && !xMenu.contains(event.target)) {
                menu.classList.remove('active'); 
                xMenu.classList.remove('active'); 
            }
        });



const items = document.querySelectorAll('.items');
const dotsContainer = document.getElementById('dotsContainer');
let currentIndexCRSL = 0;
const swipeInterval = 10000;
let autoSwipe;

items.forEach((items, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showItem(index));
    dotsContainer.appendChild(dot);
});

function showItem(index) {
    currentIndexCRSL = index;
    items.forEach((items, i) => {
        items.style.transform = `translateX(-${currentIndexCRSL * 100}%)`;
    });
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndexCRSL);
    });
}

showItem(currentIndexCRSL);

let startX = 0;
let endX = 0;

const container = document.getElementById('sccon');

container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    clearInterval(autoSwipe);
});

container.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
    e.preventDefault();
});

container.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        if (currentIndexCRSL < items.length - 1) {
            showItem(currentIndexCRSL + 1);
        }
    } else if (startX < endX - 50) {
        if (currentIndexCRSL > 0) {
            showItem(currentIndexCRSL - 1); 
        }
    }

    startAutoSwipe();
});

function startAutoSwipe() {
    autoSwipe = setInterval(() => {
        if (currentIndexCRSL < items.length - 1) {
            showItem(currentIndexCRSL + 1);
        } else {
            showItem(0);
        }
    }, swipeInterval);
}

startAutoSwipe();
