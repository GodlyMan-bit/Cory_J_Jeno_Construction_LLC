const header = document.querySelector('.header');
const aboutLink = document.getElementById("about");
const whatWeDoLink = document.getElementById("whatWeDo");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 700) {
        header.classList.add("scrolled");
    } else if (window.scrollY < 700) {
        header.classList.remove("scrolled");
    }

    if (window.scrollY >= 680) {
        aboutLink.classList.add("active");
    } else {
        aboutLink.classList.remove("active");
    }

    if (window.scrollY >= 1500) { // Adjust this value based on the scroll position of your "What We Do" section
        whatWeDoLink.classList.add("active");
    } else {
        whatWeDoLink.classList.remove("active");
    }
});
