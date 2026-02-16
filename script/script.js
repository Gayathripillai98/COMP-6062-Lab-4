const select = document.getElementById("options");
const checkboxDiv = document.getElementById("checkboxContainer");
const textInput = document.getElementById("textInput");
const form = document.getElementById("myForm");

// Show / Hide checkbox
select.addEventListener("change", function () {
    if (select.value === "show") {
        checkboxDiv.style.display = "block";
    } else {
        checkboxDiv.style.display = "none";
    }
});

// Enter key alert
textInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        alert("You pressed the Enter key!");
    }
});

// Prevent form refresh
form.addEventListener("submit", function (event) {
    event.preventDefault();
});