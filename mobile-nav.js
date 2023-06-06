window.addEventListener("DOMContentLoaded", (event) => {
    const burgermenu = document.getElementById("burgermenu");
    const closemenu = document.getElementById("mobileMenuClose");

    burgermenu.addEventListener("click", () =>{
        window.scrollTo(0, 0);

        document.getElementById("mobileMenu").style.display = "block";
        document.getElementsByTagName("html")[0].style.height = "100vh";
        document.getElementsByTagName("body")[0].style.height = "100vh";
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    })

    closemenu.addEventListener("click", () => {
        document.getElementById("mobileMenu").style.display = "none";
        document.getElementsByTagName("html")[0].style.height = "auto";
        document.getElementsByTagName("body")[0].style.height = "auto";
        document.getElementsByTagName("html")[0].style.overflow = "auto";
        document.getElementsByTagName("body")[0].style.overflow = "auto";
    })
});