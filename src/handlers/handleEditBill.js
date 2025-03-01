import { findBill } from "../functions/findBill.js";
import { getFormFields } from "../helpers/getFormFields.js";

export function handleEditBill(id) {
  const bill = findBill(id);

  const { description, amount, obs, status, type } = getFormFields(false);

  description.value = bill.description;
  amount.value = bill.amount;
  obs.value = bill.obs;
  status.value = bill.status;
  type.value = bill.type;

  const inputBillId = document.getElementById("billId");
  inputBillId.value = id;

  const resetButton = document.getElementById("resetButton");
  resetButton.classList.remove("hidden");

  const submitButton = document.getElementById("submitButton");
  submitButton.textContent = "Editar";
}
