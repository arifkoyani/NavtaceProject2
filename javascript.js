const editBtn = document.getElementById("editBtn");
const replacement = document.getElementById("replacement");

editBtn.addEventListener("click", function () {

    replacement.textContent = "NOW OPEN";

    editBtn.innerHTML = "Edit applied ✓";

});