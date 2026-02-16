const selectElement = document.getElementById("options");
const checkboxContainer = document.getElementById("checkboxContainer");
selectElement.addEventListener("change", function () {

    if (selectElement.value === "show") {
        checkboxContainer.classList.remove("hidden");
    } else {
        checkboxContainer.classList.add("hidden");
    }

});



const textInput = document.getElementById("textInput");

textInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        alert("You pressed the Enter key!");
    }

});