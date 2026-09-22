document.addEventListener("DOMContentLoaded", function () {

    /* 1. BEFORE / AFTER IMAGE INTERACTION */

    const comparisonImages = document.querySelectorAll(".comparison-image");

    comparisonImages.forEach(function (image) {

        image.addEventListener("mouseenter", function () {
            image.classList.add("image-hover");
        });

        image.addEventListener("mouseleave", function () {
            image.classList.remove("image-hover");
        });

    });


    /* 2. CHANGE ROW INTERACTION */

    const changeRows = document.querySelectorAll(".change-row");

    changeRows.forEach(function (row) {

        row.addEventListener("click", function () {

            row.classList.toggle("active-change");

        });

    });


    /* 3. WORKSPACE BUTTON */

    const workspaceButton =
        document.querySelector(".workspace-btn");

    if (workspaceButton) {

        workspaceButton.addEventListener("click", function () {

            /*
             * Change this URL to the page
             * where your workspace is located.
             */

            window.location.href = "workspace.html";

        });

    }


    /* 4. BUTTON HOVER EFFECT */

    if (workspaceButton) {

        workspaceButton.addEventListener("mouseenter", function () {

            workspaceButton.classList.add("button-hover");

        });


        workspaceButton.addEventListener("mouseleave", function () {

            workspaceButton.classList.remove("button-hover");

        });

    }


    /* 5. IMAGE  */

    comparisonImages.forEach(function (image) {

        image.addEventListener("click", function () {

            image.classList.toggle("selected-image");

        });

    });

});