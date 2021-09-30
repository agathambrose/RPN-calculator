const input = document.getElementById("input");
const output = document.getElementById("expression");
const clearBtn = document.getElementById("clear");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
let inputVal = "";
let expressionStack = [];
let resultStack = [];
const operators = ["+", "-", "*", "/"];


input.addEventListener("change", (e) => {
  inputVal = e.target.value.trim();
  if (inputVal) {
    submit.disabled = false
    if (!operators.includes(inputVal)) {
      expressionStack.push(inputVal);
      resultStack.push(inputVal);
    } else {
      const operand2 = resultStack.pop() || 0;
      const operand1 = resultStack.pop() || 0;
      const val = eval(`${operand1} ${inputVal} ${operand2}`);
      resultStack.push(val);
    }
  }
  output.value += inputVal ? inputVal + " " : "";
  input.value = "";
});

const clear = () => {
  input.value = "";
  output.value = "";
  expressionStack = [];
  resultStack = [];
  result.innerText = "";
};

clearBtn.onclick = clear;

const evaluate = (e) => {
  e.preventDefault();
  if (
    !expressionStack.every((el) => !isNaN(Number(el)) || operators.includes(el))
  ) {
    result.innerText = "Invalid characters detected in expression";
    return;
  }
  if (resultStack.length > 1)
    result.innerText =
      "invalid expression. There are more operands than operators";
  else {
    result.innerText = resultStack[0];
  }
};

submit.onclick = evaluate;