/* =========================================================
   REWORDS AI
   REAL EXAMPLES JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const workspaceButton =
        document.getElementById("rwTryWorkspace");


    if (workspaceButton) {

        workspaceButton.addEventListener(
            "click",
            function (event) {

                const target =
                    document.getElementById("app-section");


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }


    /*
       Small image loading effect
    */

    const caseImages =
        document.querySelectorAll(
            ".rw-image-box img"
        );


    caseImages.forEach(function (image) {

        image.addEventListener(
            "load",
            function () {

                image.classList.add(
                    "rw-image-loaded"
                );

            }
        );

    });

});