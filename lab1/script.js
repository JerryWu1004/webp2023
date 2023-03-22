function generateRandomString() {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += letters.charAt(Math.floor(Math.random() * letters.length));
  }
  return result;
}

const container = document.getElementById("container");
const input = document.getElementById("input");

let randomString = generateRandomString();
container.innerText = randomString;

window.addEventListener("keydown", function(event) {
  const firstChar = randomString[0];
  const inputChar = event.key.toLowerCase();
  if (inputChar === firstChar) {
    
    randomString = randomString.slice(1) + generateRandomString()[0];
    container.innerText = randomString;
  } else {
    
    randomString += inputChar;
    container.innerText = randomString;
  }
});
