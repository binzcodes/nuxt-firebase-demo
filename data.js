const fs = require('fs');

const dict = {
  products: Array
    .from({length: 24}, (_, idx) => ({
      text: `Product #${idx}`,
      subtitle: `Product subtitle for ${idx}`,
      description: "Lorem ipsum dolor sit amet",
      rating: Math.ceil(Math.random() * 4) / 2 + 3,
      price: Math.floor(Math.random() * 1000),
      stock: Math.floor(Math.random() * 10)
    }))
}
const stringy = JSON.stringify(dict)

fs.writeFileSync("data.json", stringy);
