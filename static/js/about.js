document.addEventListener("DOMContentLoaded", () => {

    const courseCards = document.querySelectorAll(".why-card");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.1
    });


    courseCards.forEach((card) => {
        observer.observe(card);
    });

});



const aboutImage = document.querySelector(".about-image");
const aboutContent = document.querySelector(".about-content");
const campusContent = document.querySelector(".campus-content");
const campusImage = document.querySelector(".campus-image")


const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");

            aboutObserver.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.2
});


if (aboutImage) {
    aboutObserver.observe(aboutImage);
}

if (aboutContent) {
    aboutObserver.observe(aboutContent);
}

if (campusContent) {
    aboutObserver.observe(campusContent);
}

if (campusImage) {
    aboutObserver.observe(campusImage);
}