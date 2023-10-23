// document.addEventListener("DOMContentLoaded", function() {
//     const menuButton = document.getElementById("menu-button");
//     const navMenu = document.querySelector(".navbar #elements ul");

//     menuButton.addEventListener("click", function(event) {
//         if (navMenu.style.display === "flex") {
//             navMenu.style.display = "none";
//         } else {
//             navMenu.style.display = "flex";
//         }
//         event.stopPropagation(); 
//     });

//     const navLinks = document.querySelectorAll(".navbar #elements ul li");
//     navLinks.forEach(function(link) {
//         link.addEventListener("click", function() {
//             navMenu.style.display = "none";
//         });
//     });

//     document.body.addEventListener("click", function() {
//         navMenu.style.display = "none";
//     });

//     navMenu.addEventListener("click", function(event) {
//         event.stopPropagation();
//     });
// });
