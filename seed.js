const { db, Gardener, Plot, Vegetable } = require('./models');
let veggieArray = require('./vegetables');
let gardenerArray = require('./gardeners');
let plotArray = require('./plots');

db.sync({ force: true })
  .then(() => {
    console.log('Database synced!');
    return Promise.all(veggieArray.map(veg => veg.save()));
  })
  .then((values) => {
    veggieArray = values;
  })
  .then(() => {
    return Promise.all(gardenerArray.map(gardener => gardener.save()));
  })
  .then((values) => {
    gardenerArray = values;
  })
  .then(() => {
    let index = 4;
    return Promise.all(plotArray.map(plot => plot.save()));
    // let index = 4;
    // return Promise.all(plotArray.map(plot => {
    //   plot.save();
    // }));
  })
  .then((values) => {
    plotArray = values;
  })
  // .then(() => {
  //   return Plot.update({gardenerId: 2});
  // })
  .then(() => {
    gardenerArray.forEach(el => {
      console.log('==================');
      console.log(el.name);
    });
    veggieArray.forEach(el => {
      console.log('==================');
      console.log(el.name);
    });
    plotArray.forEach(el => {
      console.log('==================');
      console.log(el.shaded);
    });
  })


  // .then(() => {
  //   gardenerArray = Promise.all(gardenerArray.map(gard => {
  //     gard.plotId = plotArray[(gard.id + 4) % 10].id;
  //     gard.save();
  //   }));
  // })
  // .then(function(values) {
  //   values.forEach(el => {
  //     console.log('==================');
  //     console.log(el.name);
  //   });
  // })
  .catch(err => {
    console.log('Something went wrong');
    console.log(err);
    db.close();
  });
