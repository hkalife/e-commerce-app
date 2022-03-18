const { products, categories } = require('../db')

exports.Query = {
  hello: (parent, args, context) => 'World!',
  products: (parent, args, context) => products,
  product: (parent, args, context) => {
    const { id } = args;
    return products.find(product => product.id === id);
  },
  products: (parent, args, context) => products,
  category: (parent, args, context) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  }
}
