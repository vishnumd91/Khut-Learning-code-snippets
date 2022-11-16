const formElement = document.querySelector("#form-id");

//   Button Elements
const addBtn = document.getElementById("addBtn").innerText;
const subBtn = document.getElementById("subBtn").innerText;
const mulBtn = document.getElementById("mulBtn").innerText;
const divBtn = document.getElementById("divBtn").innerText;

const manageCalculations = (calculationType) => {
  formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    //   Input Elements
    const n1Element = parseInt(document.getElementById("n1").value);
    const n2Element = parseInt(document.getElementById("n2").value);

    const resultElement = document.getElementById("result");
    if (calculationType === "Add") {
      resultElement.value = n1Element + n2Element;
    } else if (calculationType === "Subtract") {
      resultElement.value = n1Element - n2Element;
    } else if (calculationType === "Multiply") {
      resultElement.value = n1Element * n2Element;
    } else if (calculationType === "Divide") {
      resultElement.value = n1Element / n2Element;
    } else {
      resultElement.value = "Not a valid Operation";
    }
  });
};
const addNums = () => {
  manageCalculations(addBtn);
};
const subNums = () => {
  manageCalculations(subBtn);
};
const mulNums = () => {
  manageCalculations(mulBtn);
};
const divNums = () => {
  manageCalculations(divBtn);
};
