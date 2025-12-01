/* =========================================
   SLIDESHOW IMAGES
========================================= */

// Array of slideshow images
const images = [
    "images/IMG_3638.jpeg",
    "images/IMG_3639.jpeg",
    "images/IMG_3640.jpeg",
    "images/IMG_3641.jpeg",
    "images/IMG_3642.jpeg",
    "images/IMG_3643.jpeg",
    "images/IMG_3644.jpeg",
    "images/IMG_3646.jpeg",
    "images/IMG_3647.jpeg",
    "images/IMG_3648.jpeg",
    "images/IMG_3649.jpeg",
    "images/IMG_3651.jpeg",
    "images/IMG_3654.jpeg",
    "images/IMG_3655.jpeg",
    "images/IMG_3656.jpeg",
    "images/IMG_3659.jpeg",
    "images/IMG_3660.jpeg"
];

let currentSlideIndex = 0;
const slideElement = document.getElementById("slide");

// Show the current slide
function showSlide() {
    slideElement.src = images[currentSlideIndex];
}

// Move to the next slide
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % images.length;
    showSlide();
}

// Move to the previous slide
function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
    showSlide();
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Initialize first slide
showSlide();


/* =========================================
   LIVE NAME MESSAGE WITH TYPEWRITER
========================================= */

const nameInput = document.getElementById("contact-name");
const liveMessage = document.getElementById("liveMessage");

let currentText = "";  // Text currently displayed
let targetText = "";   // Text we want to display
let typing = false;    // Prevent overlapping type effects

function typeWriter() {
    if (typing) return; // Exit if already typing
    typing = true;

    function type() {
        if (currentText !== targetText) {
            // Add next character
            currentText = targetText.slice(0, currentText.length + 1);
            liveMessage.textContent = currentText;
            setTimeout(type, 30); // Typing speed
        } else {
            typing = false;
        }
    }

    type();
}

// Update live message when user types name
nameInput.addEventListener("input", function () {
    const name = nameInput.value.trim();

    if (name.length > 0) {
        targetText = 
            `Hey ${name}, leave your name and number and I'll reach out soon!\n` +
            `Feel free to use the button below to upload an inspiration photo. - Avery`;
    } else {
        targetText = "";
        currentText = "";
        liveMessage.textContent = "";
        return;
    }

    typeWriter();
});


//onclick
function ctaClicked() {
    alert("Thank you for clicking the button! Please make sure to attach your inspiration photo in the upload section.");
    console.log("CTA button was clicked.");
}

//onmouseover
function hoverSlide() {
    console.log("Mouse is hovering over the slideshow image.");
}

