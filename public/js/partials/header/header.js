$(window).scroll(function() {
    $('.upper-nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    $('.category').toggleClass('category-scrolled', $(this).scrollTop() > 50);
    $('.nav-links').toggleClass('nav-links-scrolled', $(this).scrollTop() > 50);
})
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuLinks.forEach((link) => {
            link.classList.remove("is-active");
        });
        link.classList.add("is-active");
    });
});

// open menu
function openMenu() {
    $('.menu').toggleClass("open-mobile-navbar");
}

function search() {
    console.log("clicked")
    document.querySelector(".search-overlay").classList.add("active");
    document.querySelector('#html').style.overflow = 'hidden'
}

function closeSearch() {
    document.querySelector(".search-overlay").classList.remove("active");
    document.querySelector('#html').style.overflow = 'scroll'
}