//Initialize all required variables
const input = document.getElementById( "input" );
const output = document.getElementById("expression");
const clearBtn = document.getElementById("clear");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
let inputVal = "";
let expressionStack = [];
let resultStack = [];
const operators = ["+", "-", "*", "/"];

//set an event listener to manage the onchange events
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

//On result shown, clear input and output areas
const clearExpression = () => {
  input.value = "";
  input.focus()
  output.value = "";
  expressionStack = [];
}

//Solve to give an actual result or throw an error in the case of an exception or invalid characters then clear input and output
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

  clearExpression()
};

//clear entire action
const clear = () => {
  input.value = "";
  input.focus()
  output.value = "";
  expressionStack = [];
  resultStack = [];
  result.innerText = "";
};
clearBtn.onclick = clear;

//submit action
submit.onclick = evaluate;