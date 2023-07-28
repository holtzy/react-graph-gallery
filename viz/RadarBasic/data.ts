export type Variable =
  | 'speed'
  | 'acceleration'
  | 'conso'
  | 'safety'
  | 'style'
  | 'price';

type DataItem<T extends string> = {
  [key in T]: number;
} & {
  name: string;
};

export type Data = DataItem<Variable>;

export const data: Data = {
  speed: 5.1,
  acceleration: 9.5,
  conso: 1.4,
  safety: 0.1,
  style: 90,
  price: 7,
  name: 'mercedes',
};
