(function(){
    const header = document.querySelector(".header");
    window.onscroll = () => {
        if(window.scrollY > 50) header.classList.add("header_active")
        else header.classList.remove("header_active")
    }
}());


// Burger Handler
(function(){
    const burger = document.querySelector(".burger");   
    const menu = document.querySelector(".header__nav");
    const menuCloseItem = document.querySelector(".header__nav-close")
    burger.addEventListener("click", ()=> {
        menu.classList.add("header__nav_active");
    });
    menuCloseItem.addEventListener("click", ()=> {
        menu.classList.remove("header__nav_active");
    });
}());