import { Bill } from "../orm/models/Bill.js";

export function createBill({ description, amount, type, status, obs }) {
  const bill = new Bill().create({
    description,
    amount,
    type,
    status,
    obs,
  });

  return bill;
}
