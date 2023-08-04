// Variables to store initial touch position
let initialTouchX = null;
const nav = document.querySelector(".headerNav")
// Threshold for swipe detection
const swipeThreshold = 50;

// Function to handle touch start event
function handleTouchStart(event) {
    initialTouchX = event.touches[0].clientX;
}
// Function to handle touch end event
function handleTouchEnd(event) {
    if (initialTouchX === null) {
        return;
    }

    const currentTouchX = event.changedTouches[0].clientX;

    const deltaX = currentTouchX - initialTouchX;

    console.log(initialTouchX);
    // Check if swipe is long enough
    if (Math.abs(deltaX) > swipeThreshold) {
        if (deltaX > 0) {
            // Swiped right
            if (initialTouchX < 10)
                openMenu();
        } else {
            // Swiped left
            closeMenu();
        }
    }

    // Reset initial touch position
    initialTouchX = null;
}

// Function to open the menu
function openMenu() {
    nav.style.left = '0';
}

// Function to close the menu
function closeMenu() {
    nav.style.left = '-100%';
}

// Add event listeners for touch events
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);
