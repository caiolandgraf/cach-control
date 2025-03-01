import { createRowBill } from "../helpers/createRowBill.js";
import { Bill } from "../orm/models/Bill.js";

export function loadBills(removeChildren = false) {
  const tbody = document.getElementById("billsTable");
  const bills = new Bill().getAll();

  if (removeChildren) {
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  }

  for (const bill of bills) {
    tbody.appendChild(createRowBill(bill));
  }
}
