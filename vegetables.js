const { db, Gardener, Plot, Vegetable } = require('./models');

const veggies = [

new Vegetable({
  name: 'carrot',
  color: 'orange',
  planted_on: Date.now(),
}),

new Vegetable({
  name: 'potato',
  color: 'brown',
  planted_on: Date.now(),
})

]

module.exports = veggies;

