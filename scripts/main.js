// Image fade-in/fade-out functionality
const images = ['images/image-1.jpg', 'images/image-2.jpg', 'images/image-3.jpg'];
let currentImageIndex = 0;
const body = document.body;

function changeBackgroundImage() {
    body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds

// Countdown functionality
const countdown = document.getElementById('countdown');
const launchDate = new Date("Dec 31, 2024 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdown.innerHTML = "We have launched!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
