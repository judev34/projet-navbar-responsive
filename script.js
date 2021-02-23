

const button = document.querySelector(".burger");
const ul = document.querySelector("nav ul");


button.addEventListener("click", () => {

    if (ul.style.display === "flex") {
        ul.style.animation = "slideOut 1s"
        setTimeout(() => {
        ul.style.display = "none";
        }, 1000)
    } else {
        ul.style.animation = "slideIn 1s"
        ul.style.display = "flex";

    }

})

var mql = window.matchMedia('(max-width : 768px)');

mql.addEventListener("change",(e) => {
        
        if (e.matches) {
        ul.style.display = "none";

} else {
        ul.style.display = "flex";
        ul.style.animation = "";
    }
})


// --------------

