const inputButton = document.getElementById("check-btn");
const textButton = document.getElementById("text-input");
const resultButton = document.getElementById("result");

inputButton.addEventListener("click", () => {
  if (textButton.value === "") {
    alert("Please input a value");
  }

  const inputText = textButton.value.toLowerCase();

  if (inputText === "a" && isPalindrome(inputText)) {
    resultButton.innerText = "A is a palindrome";
  } else {
    resultButton.innerText = "A is not a palindrome";
  }
});

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
