import { Bill } from "../orm/models/Bill.js";

export function editBill({ id, description, amount, type, status, obs }) {
  const bill = new Bill().update(id, {
    description,
    amount,
    type,
    status,
    obs,
  });

  return bill;
}
