var navbarTogglerButton = document.querySelector(".navbar-toggler");

var navbarSupportedContent = document.getElementById("navbarSupportedContent");


// Add a click event listener to the button
navbarTogglerButton.addEventListener("click", function() {
    if(navbarSupportedContent.classList.contains("collapse")){
        navbarSupportedContent.classList.remove("collapse");
    }
    else{
        navbarSupportedContent.classList.add("collapse");
    }
});