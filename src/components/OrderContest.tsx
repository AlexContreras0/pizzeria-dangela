type TOrderContestProps = {
  order: TOrderItem[];
  removeItem: (id: TMenuItem["id"]) => void;
};

export default function OrderContest({
  order,
  removeItem,
}: TOrderContestProps) {
  return (
    <div>
      <h2 className="text-2xl font-black mb-5 uppercase">Cuenta</h2>
      <div>
        {order.map((item) => (
          <div className="flex justify-between items-center mb-5" key={item.id}>
            <div>
              <h2 className="font-black text-lg">{item.name}</h2>
              <div className="flex gap-1">
                <p>Cantidad:</p>
                <span className="font-black">{item.quantity}</span>
              </div>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-primary hover:bg-red-700 transition-all h-8 w-8 rounded-full text-white font-black"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
