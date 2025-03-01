export function getFormFields(getValue = true) {
  const id = document.getElementById("billId");
  const description = document.getElementById("description");
  const amount = document.getElementById("amount");
  const type = document.getElementById("type");
  const status = document.getElementById("status");
  const obs = document.getElementById("obs");

  if (getValue) {
    return {
      id: id.value,
      description: description.value,
      amount: amount.value,
      type: type.value,
      status: status.value,
      obs: obs.value,
    };
  }

  return {
    id: id,
    description: description,
    amount: amount,
    type: type,
    status: status,
    obs: obs,
  };
}
