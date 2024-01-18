function openPopup() { //Source of code for popup- https://stackoverflow.com/a/42184910/23224384
    var contactDetails = document.getElementById("myPopup");
    var overlay = document.getElementById("myOverlay");
    contactDetails.classList.toggle("show");
    overlay.classList.toggle("show");
}