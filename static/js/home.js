const aboutImage = document.querySelector(".about-image");
const aboutContent = document.querySelector(".about-content");


document.addEventListener("DOMContentLoaded", () => {

    const courseCards = document.querySelectorAll(".course-card");

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