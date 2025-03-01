import { Bill } from "../orm/models/Bill.js";

export function deleteBill(id) {
  if (!id) return false;

  const bill = new Bill();
  bill.delete(id);

  return true;
}
