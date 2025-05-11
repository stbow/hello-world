const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

function checkValid(input) {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }
  let origNum = userInput.value;
  let phoneRegEx = new RegExp('^(\\+?1\\s?)?((\\([0-9]{3}\\))|([0-9]{3}))([-\\s])?(([0-9]{3})([-\\s])?([0-9]{4}))$');
  let isValid = phoneRegEx.test(input) ? "Valid" : "Invalid";
  let result = document.createElement("p");
  result.innerText = `${isValid} US number: ${origNum}`;
  resultsDiv.appendChild(result);
}

checkBtn.addEventListener("click", () => {
  checkValid(userInput.value);
});

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});
