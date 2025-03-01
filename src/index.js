import { loadBills } from "./functions/loadBills.js";
import { handleCancelEdit } from "./handlers/handleCancelEdit.js";
import { handleCreateBill } from "./handlers/handleCreateBill.js";
import { handleDeleteBill } from "./handlers/handleDeleteBIll.js";
import { handleEditBill } from "./handlers/handleEditBill.js";

loadBills();

const createBillForm = document.getElementById("createBillForm");
createBillForm.onsubmit = (event) => handleCreateBill(event);

window.deleteBill = (id) => handleDeleteBill(id);
window.editBill = (id) => handleEditBill(id);
window.cancelEdit = () => handleCancelEdit();
