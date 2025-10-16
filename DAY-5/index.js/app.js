document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addForm");
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const result = document.getElementById("result");
  const addBtn = document.getElementById("addBtn");
  const clearBtn = document.getElementById("clearBtn");

  function validateInput(input) {
    const value = parseFloat(input.value);
    const isValid = !isNaN(value);
    input.classList.toggle("is-invalid", !isValid);
    return isValid ? value : null;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const val1 = validateInput(num1);
    const val2 = validateInput(num2);

    if (val1 === null || val2 === null) {
      result.textContent = "";
      return;
    }

    const sum = val1 + val2;
    result.textContent = `Sum: ${sum.toLocaleString()}`;
    result.classList.add("animate");
    setTimeout(() => result.classList.remove("animate"), 300);
  });

  clearBtn.addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    result.textContent = "";
    num1.classList.remove("is-invalid");
    num2.classList.remove("is-invalid");
  });
});