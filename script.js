// document.addEventListener("DOMContentLoaded", function() {
    var convertButton = document.getElementById("convertbutton");
    convertButton.addEventListener("click", convert);
// });
function convert() {
    var feet = parseFloat(document.getElementById("box1").value);
    if (!isNaN(feet)) {
        var inches = feet * 12;
        document.getElementById("result").innerText = feet + " feet is equal to " + inches + " inches.";
    } else {
        document.getElementById("result").innerText = "Please enter a valid number.";
    }
}






