const { db, Gardener, Plot, Vegetable } = require('./models');
const veggieArray = require('./vegetables');

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!');
    return Promise.all(veggieArray.map(veg => veg.save()));
  })
  .then(function(values) {
    values.forEach(el => {
      console.log('==================');
      console.log(el.name);
    });
  })
  .catch(err => {
    console.log('Something went wrong');
    console.log(err);
    db.close();
  });
