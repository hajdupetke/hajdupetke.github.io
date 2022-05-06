window.addEventListener('scroll', e => {
    if(window.scrollY > 10 ) {
        addBackground();
    } else {
        if(window.innerWidth >= 992) {
            removeBackground();
        }
    }
})

window.addEventListener("resize", e => {
    if(window.innerWidth < 992) {
        addBackground();
    } else if (window.scrollY < 10 ) {
        removeBackground();
    }
})

const addBackground = () => {
    document.getElementById("nav").style.transition = "all ease .5s";
    //document.getElementById("nav").classList.remove("navbar-dark");
    document.getElementById("nav").classList.add("nav-bg");
    //document.getElementById("nav").classList.add("navbar-light");
}

const removeBackground = () => {
    document.getElementById("nav").classList.remove("nav-bg");
    //document.getElementById("nav").classList.remove("navbar-light");
    //document.getElementById("nav").classList.add("navbar-dark");
}


window.onload = () => {
    if(window.innerWidth < 992) {
        addBackground();
    } else {
        removeBackground();
    }
}