const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");

const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");
const calculateBtn = document.getElementById("calcuateBtn");
const clearBtn = document.getElementById("clearBtn");

const result = document.getElementById("result");

let selectedOperation = null;

function getNumbers() {
  const val1 = num1Input.value.trim();
  const val2 = num2Input.value.trim();

  if (val1 === "" || val2 === "") {
    result.innerText = "Please enter values in both fields.";
    return null;
  }

  const num1 = Number(val1);
  const num2 = Number(val2);

  if (isNaN(num1) || isNaN(num2)) {
    result.innerText = "Please enter valid numbers only.";
    return null;
  }

  return { num1, num2 };
}

function selectOperation(op, button) {
  selectedOperation = op;

  [addBtn, subtractBtn, multiplyBtn, divideBtn].forEach((btn) =>
    btn.classList.remove("active")
  );

  button.classList.add("active");
}

addBtn.addEventListener("click", () => selectOperation("+", addBtn));
subtractBtn.addEventListener("click", () => selectOperation("-", subtractBtn));
multiplyBtn.addEventListener("click", () => selectOperation("*", multiplyBtn));
divideBtn.addEventListener("click", () => selectOperation("/", divideBtn));

// Calculate function
calculateBtn.addEventListener("click", () => {
  if (!selectedOperation) {
    result.innerText = "Please select an operation (+, −, ×, ÷) first.";
    return;
  }

  const numbers = getNumbers();
  if (numbers === null) return;

  const { num1, num2 } = numbers;
  let total = 0;

  switch (selectedOperation) {
    case "+":
      total = num1 + num2;
      break;
    case "-":
      total = num1 - num2;
      break;
    case "*":
      total = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        result.innerText = "Cannot divide by zero";
        return;
      }
      total = num1 / num2;
      break;
  }

  result.innerText = `Result: ${total}`;
});

// Clear function
clearBtn.addEventListener("click", () => {
  num1Input.value = "";
  num2Input.value = "";
  selectedOperation = null;

  [addBtn, subtractBtn, multiplyBtn, divideBtn].forEach((btn) =>
    btn.classList.remove("active")
  );

  result.innerText = "Result: 0";
});

// Global Keyboard Short-Cuts
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    calculateBtn.click();
  } else if (e.key === "Escape") {
    clearBtn.click();
  } else if (e.key === "+") {
    selectOperation("+", addBtn);
  } else if (e.key === "-") {
    selectOperation("-", subtractBtn);
  } else if (e.key === "*") {
    selectOperation("*", multiplyBtn);
  } else if (e.key === "/") {
    e.preventDefault();
    selectOperation("/", divideBtn);
  }
});