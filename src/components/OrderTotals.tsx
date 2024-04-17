import { useMemo } from "react";
import { formatCurrency } from "../helpers";

type TOrderTotalsProps = {
  order: TOrderItem[];
  tip: number;
  placeOrder: () => void;
};

export default function OrderTotals({
  order,
  tip,
  placeOrder,
}: TOrderTotalsProps) {
  const subtotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-black text-2xl uppercase mt-10">Total y Propina</h2>
      <p>
        Subtotal a pagar:{" "}
        <span className="font-black">{formatCurrency(subtotalAmount)}</span>
      </p>
      <p>
        Propina: <span className="font-black">{formatCurrency(tipAmount)}</span>
      </p>
      <p>
        Total a pagar:{" "}
        <span className="font-black">{formatCurrency(totalAmount)}</span>
      </p>

      <button
        className="w-full bg-primary p-3 uppercase text-white font-bold mt-10 disabled:bg-gray-300"
        onClick={() => placeOrder()}
        disabled={totalAmount === 0}
      >
        Realizar pedido
      </button>
    </div>
  );
}
