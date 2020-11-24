window.addEventListener("scroll", (e) => {
    let nav = document.querySelector(".nav");
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle("nav-b", windowPosition);
});