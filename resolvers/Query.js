const { products, categories } = require('../db')

exports.Query = {
  products: (parent, args, { products }) => products,
  product: (parent, { id }, { products }) => {
    return products.find(product => product.id === id);
  },
  products: (parent, args, { products }) => products,
  category: (parent, { id }, { categories }) => {
    return categories.find((category) => category.id === id);
  }
}
