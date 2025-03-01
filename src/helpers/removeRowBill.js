export function removeRowBill(id) {
  // Remove the bill element from the DOM
  const billElement = document.getElementById(`bill-${id}`);
  if (billElement) {
    billElement.remove();
  }
}
