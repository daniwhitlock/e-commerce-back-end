// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Category have many Products
Category.hasMany(Product, {
  // needs to match products belongTo category since they are talking to each other
  foreignKey: 'category_id'
})
// Products belongsToMany Tag (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  //utilizing the foreign key which has a reference to the product table
  foreignKey: 'product_id'
});
// Tag belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
