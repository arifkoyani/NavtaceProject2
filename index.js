// /* =========================================================
//    REWORDS AI
//    REAL EXAMPLES JAVASCRIPT
// ========================================================= */

// document.addEventListener("DOMContentLoaded", function () {

//     const workspaceButton =
//         document.getElementById("rwTryWorkspace");


//     if (workspaceButton) {

//         workspaceButton.addEventListener(
//             "click",
//             function (event) {

//                 const target =
//                     document.getElementById("app-section");


//                 if (target) {

//                     event.preventDefault();

//                     target.scrollIntoView({
//                         behavior: "smooth",
//                         block: "start"
//                     });

//                 }

//             }
//         );

//     }


//     /*
//        Small image loading effect
//     */

//     const caseImages =
//         document.querySelectorAll(
//             ".rw-image-box img"
//         );


//     caseImages.forEach(function (image) {

//         image.addEventListener(
//             "load",
//             function () {

//                 image.classList.add(
//                     "rw-image-loaded"
//                 );

//             }
//         );

//     });

// });
// ===============================
// FOOTER JAVASCRIPT
// ===============================


// Select all footer links
const footerLinks = document.querySelectorAll(".footer-column a");


// Add click effect to links
footerLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        // Ignore email link
        if (link.classList.contains("email")) {
            return;
        }

        // Prevent page from jumping to "#"
        event.preventDefault();

        console.log("You clicked:", link.textContent);

    });
    

});


// ===============================
// EMAIL CLICK
// ===============================

const email = document.querySelector(".email");

email.addEventListener("click", function() {

    console.log("Opening email:", email.textContent);

});