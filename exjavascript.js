//without eventlistner

//button id="myBtn" onclick="displayDate()">Try it</button>

//p id="demo"></p>

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

//with addEventListener

//<button id="myBtn">Try it</button>

<p id="demo"></p>


document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}


