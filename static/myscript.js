function myFunction() {
    document.getElementById("intro").innerHTML = "JavaScript makes your webpage interactive.";
}

var btn = document.getElementById('btn');

function mOver() {
    btn.innerHTML = "Wowoo";
}

function mOut() {
    btn.innerHTML = "Try it";
}


// Ask the user for their name and assign it to a variable username
var username = prompt("Please enter your name:");

// Check if a name was entered
if (username) {
    // Creating a welcome statement
    var greeting = "Welcome, " + username + "!";

    // Update the content of an existing element with the ID "welcome"
    var wel_element = document.getElementById("welcome").innerHTML ="<h1>" + greeting + "</h1>";

} else {
    // If the user didn't enter a name
    var wel_element = document.getElementById("welcome").innerHTML="<h1>Welcome, Unknown!</h1>";
}

    