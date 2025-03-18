// Select the background image element
const bgImageEL = document.getElementById("bg-image");

// Listen for scroll events and update background properties
window.addEventListener("scroll", () => {
  updateImage();
});

// Function to update background image opacity and size on scroll
function updateImage() {
    // Reduce opacity as the user scrolls down (max fade at 800px scroll)
  bgImageEL.style.opacity = 1 - window.pageYOffset / 800;
    // Decrease background size to create a zoom-out effect while scrolling
  bgImageEL.style.backgroundSize = 160 - window.pageYOffset + "%";
}
