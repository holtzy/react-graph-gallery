export type Variable = "speed" | "acceleration" | "conso" | "safety" | "style" | "price"

type DataItem<T extends string> = {
  [key in T]: number
} & {
  name: string
}

export type Data = DataItem<Variable>[]

export const data: Data = [
  { speed: 5.1, acceleration: 9.5, conso: 1.4, safety: 0.1, style: 90, price: 7, name: "mercedes" },
  { speed: 4.9, acceleration: 3.0, conso: 9.4, safety: 0.2, style: 590, price: 76, name: "peugeot" },
  { speed: 2.7, acceleration: 1.2, conso: 1.3, safety: 0.9, style: 990, price: 96, name: "honda" },
]
