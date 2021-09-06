export interface Item {
  text: string;
  subtitle: string;
  description: string;
  price: number; // price in pence
  volume: number;
}

export interface Basket {
  list: Item[]
}

export const state = () => ({
  list: []
})

export const mutations = {
  add(state: Basket, item: Item): void {
    state.list.push({
      text: item.text,
      subtitle: item.subtitle,
      description: item.description,
      price: item.price,
      volume: item.volume,
    })
  },
  remove(state: Basket, removeItem: Item) {
    const idx = state.list.findIndex(item => item.text === removeItem.text);
    state.list.splice(idx, 1)
  },
}
