import { formatCurrency } from "../helpers";

type TMenuItemProps = {
  item: TMenuItem;
  addItem: (item: TMenuItem) => void;
};

export default function MenuItem({ item, addItem }: TMenuItemProps) {
  return (
    <button
      onClick={() => addItem(item)}
      className="font-QSanSerif border border-secondary hover:border-none rounded-md px-4 py-2 w-full flex justify-between hover:bg-primary hover:text-white hover:scale-105 transition-all"
    >
      <h2 className="font-black text-lg">{item.name}</h2>
      <p>
        Precio: {""}
        <span className="font-black italic">{formatCurrency(item.price)}</span>
      </p>
    </button>
  );
}
