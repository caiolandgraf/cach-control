import { resetFormValues } from "../helpers/resetFormValues.js";

export function handleCancelEdit() {
  const resetButton = document.getElementById("resetButton");
  resetButton.classList.add("hidden");

  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Cadastrar";

  resetFormValues();
}
