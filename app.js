let count = 0;

function changeText() {
  document.getElementById("title").textContent =
  "My first real app!";
}

function increaseCounter() {

  count = count + 1;

  document.getElementById("counter").textContent = count;

}




function resetCounter(){

  count = 0;

  document.getElementById("counter").textContent = count;

}



async function checkServer(){

const response = await fetch("/api/status");

const data = await response.json();

alert(data.message);

}


async function checkHealth(){

const response = await fetch("/health");

const data = await response.json();

alert("Server running for: " + Math.floor(data.uptime) + " seconds");

}