const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TTipPercentageFormProps = {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
};

export default function TipPercentageForm({
  tip,
  setTip,
}: TTipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black mb-1">Propina: </h3>
      <form>
        {tipOptions.map((tipOptions) => (
          <div className="flex justify-between w-14" key={tipOptions.id}>
            <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
            <input
              type="radio"
              id={tipOptions.id}
              name="tip"
              value={tipOptions.value}
              checked={tipOptions.value === tip}
              onChange={(e) => setTip(+e.target.value)}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
