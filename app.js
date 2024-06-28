function checkForEnglish() {
  const inputString = document.getElementById("inputString").value;
  const resultElement = document.getElementById("result");

  if (containsEnglish(inputString)) {
    resultElement.textContent = 'The string contains the word "English".';
    resultElement.style.color = "green";
  } else {
    resultElement.textContent =
      'The string does not contain the word "English".';
    resultElement.style.color = "red";
  }
}

function containsEnglish(str) {
  return /english/i.test(str);
}
