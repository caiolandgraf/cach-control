import { Bill } from "../orm/models/Bill.js";

export function findBill(id) {
  if (!id) return null;

  const bill = new Bill();
  return bill.findById(id);
}
