// Timeout in seconds
const waitTime = 1;

function loadScreen() {
    var myTimeout = setTimeout(showPage, waitTime * 1000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mainApp").style.display = "block";
}