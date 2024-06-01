function esconder(){
    var menu = document.querySelector(".barra-navegacion");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}