const inputButton = document.getElementById("check-btn");
const textButton = document.getElementById("text-input");

inputButton.addEventListener("click", () => {
  if (textButton.value === "") {
    alert("Please input a value");
  }
});
