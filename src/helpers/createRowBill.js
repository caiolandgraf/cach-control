import { createRowBillContent } from "./createRowBillContent.js";

export function createRowBill(billData) {
  const row = document.createElement("tr");
  row.classList = "hover:bg-zinc-800 group";
  row.innerHTML = createRowBillContent(billData);
  row.id = `bill-${billData.id}`;

  return row;
}
