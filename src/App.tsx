import "./App.css";
import MenuItem from "./components/MenuItem";
import OrderContest from "./components/OrderContest";
import OrderTotals from "./components/OrderTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();
  return (
    <>
      <header className="pt-10 flex justify-center">
        <img
          className="w-52 h-auto"
          src="../public/logo.svg"
          alt="logo pizzeria d'angela"
        />
      </header>
      <main className="max-w-7xl mx-auto pb-5 grid md:grid-cols-2 font-QSanSerif">
        <div className="p-5 text-start ">
          <h2 className="text-2xl font-black mb-5 uppercase">Pizzas</h2>
          <div className="space-y-3">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="p-5 text-start ">
          <OrderContest order={order} removeItem={removeItem} />
          <TipPercentageForm tip={tip} setTip={setTip} />
          <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
