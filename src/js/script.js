document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const aside = document.querySelector("aside");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const openMenu = document.querySelector(".open-menu");
    const closeMenu = document.querySelector(".close-menu");



    menuButton.addEventListener("click", () => {
        const isOpen = aside.classList.toggle("open");

        main.classList.toggle("open", isOpen);
        footer.classList.toggle("open", isOpen);
        menuButton.classList.toggle("open", isOpen);
        openMenu.classList.toggle("open", isOpen);
        closeMenu.classList.toggle("open", isOpen);

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Close menu" : "Open menu"
        );
    });

});