const billType = {
  income: "Receita",
  expense: "Despesa",
};

const billStatus = {
  paid: "Pago",
  unpaid: "Á Pagar",
};

export function createRowBillContent({
  id,
  description,
  amount,
  type,
  status,
}) {
  return `
      <td
        class="group-[&+&]:border-t border-zinc-700 px-3 py-1.5 group-last:rounded-bl-md"
      >
        ${description}
      </td>

      <td class="group-[&+&]:border-t border-zinc-700 px-3 py-1.5">
        ${amount}
      </td>

      <td class="group-[&+&]:border-t border-zinc-700 px-3 py-1.5">
        <span class="text-red-400">${billType[type]}</span>
      </td>

      <td class="group-[&+&]:border-t border-zinc-700 px-3 py-1.5">
        <span class="text-yellow-400">${billStatus[status]}</span>
      </td>

      <td
        class="group-[&+&]:border-t border-zinc-700 px-3 py-1.5 w-[50px] group-last:rounded-br-md"
      >
        <div class="flex gap-2 justify-center">
          <button class="text-zinc-400 hover:text-zinc-100 text-xl transition-colors cursor-pointer" onclick="editBill('${id}')">
            <i class="fa-solid fa-pencil-square w-4 h-4"></i>
          </button>

          <button class="text-zinc-400 hover:text-red-400 text-xl transition-colors cursor-pointer" onclick="deleteBill('${id}')">
           <i class="fa-solid fa-trash w-4 h-4"></i>
          </button>
        </div>
      </td>
    `;
}
