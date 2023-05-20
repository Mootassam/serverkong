const models = [
  require('./tenant').default,
  require('./auditLog').default,  
  require('./settings').default,
  require('./user').default,
  require('./category').default,
  require('./subcategories').default,
  require('./chieldCategories').default,
  require('./taxes').default,
  require('./brands').default,
  require('./edit').default,
  require('./campaignItems').default,
  require('./gallery').default,
  require('./product').default,
  require('./shippingservice').default,
  require('./coupons').default,
  require('./transaction').default,
  require('./trackOrder').default,
  require('./order').default,
  require('./state').default,
  require('./attributeOptions').default,
  require('./cart').default,
  require('./paymentsettings').default,
  require('./review').default,  
];

export default function init(database) {
  for (let model of models) {
    model(database);
  }

  return database;
}

export async function createCollections(database) {
  for (let model of models) {
    await model(database).createCollection();
  }

  return database;
}
