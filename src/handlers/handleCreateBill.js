import { createBill } from "../functions/createBill.js";
import { editBill } from "../functions/editBill.js";
import { loadBills } from "../functions/loadBills.js";
import { createRowBill } from "../helpers/createRowBill.js";
import { getFormFields } from "../helpers/getFormFields.js";
import { resetFormValues } from "../helpers/resetFormValues.js";
import { handleCancelEdit } from "./handleCancelEdit.js";

export function handleCreateBill(event) {
  event.preventDefault();

  const formData = getFormFields();

  if (formData.id) {
    editBill(formData);
    resetFormValues();
    handleCancelEdit();
    loadBills(true);
    return;
  }

  const newBill = createBill(formData);

  const tbody = document.getElementById("billsTable");
  tbody.prepend(createRowBill(newBill));

  resetFormValues();
}
