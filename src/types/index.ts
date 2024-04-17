type TMenuItem = {
  id: number;
  name: string;
  price: number;
};

type TOrderItem = TMenuItem & {
  quantity: number;
};
