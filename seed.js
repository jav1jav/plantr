const { db, Gardener, Plot, Vegetable } = require('./models');

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!');
    let x = veggieArray.map(veg => veg.save());
    // Promise.all(x).then(function(values) {
    //   console.log(values);
    // });
  })
  .catch(err => {
    console.log('Something went wrong');
    console.log(err);
    db.close();
  });

const veggie1P = new Vegetable({
  name: 'carrot',
  color: 'orange',
  planted_on: Date.now(),
});

const veggie2P = new Vegetable({
  name: 'potato',
  color: 'brown',
  planted_on: Date.now(),
});

let veggieArray = [veggie1P, veggie2P];
