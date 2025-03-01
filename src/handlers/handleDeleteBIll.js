import { deleteBill } from "../functions/deleteBill.js";
import { removeRowBill } from "../helpers/removeRowBill.js";

export function handleDeleteBill(id) {
  removeRowBill(id);

  return deleteBill(id);
}
