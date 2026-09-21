const annualButton = document.getElementById("annualBtn");
const monthlyButton = document.getElementById("monthlyBtn");
const creditPacksButton = document.getElementById("creditPacksBtn");

const annualContent = document.querySelectorAll(".annual-content");
const monthlyContent = document.querySelectorAll(".monthly-content");


// ================= ANNUAL =================

annualButton.addEventListener("click", function () {

    // Annual becomes black
    annualButton.classList.add("active");

    // Monthly loses black
    monthlyButton.classList.remove("active");

    // Show Annual content
    annualContent.forEach(function (item) {
        item.style.display = "block";
    });

    // Hide Monthly content
    monthlyContent.forEach(function (item) {
        item.style.display = "none";
    });

});


// ================= MONTHLY =================

monthlyButton.addEventListener("click", function () {

    // Monthly becomes black
    monthlyButton.classList.add("active");

    // Annual loses black
    annualButton.classList.remove("active");

    // Hide Annual content
    annualContent.forEach(function (item) {
        item.style.display = "none";
    });

    // Show Monthly content
    monthlyContent.forEach(function (item) {
        item.style.display = "block";
    });

});


// ================= CREDIT PACKS =================

creditPacksButton.addEventListener("click", function () {

    /*
        IMPORTANT:

        We do NOT add "active" to Credit Packs.

        Therefore its background DOES NOT change.
    */

    creditPacksButton.classList.remove("active");

    /*
        Scroll to the SECOND SECTION,
        where Credit Packs are located.
    */

    document.getElementById("creditPacksSection").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});