const { db, Gardener, Plot, Vegetable } = require('./models');

const veggies = [

new Vegetable({
  name: 'carrot',
  color: 'orange',
  planted_on: Date.now(),
}),

new Vegetable({
  name: 'tomato',
  color: 'red',
  planted_on: Date.now(),
}),

new Vegetable({
  name: 'cucumber',
  color: 'green',
  planted_on: Date.now(),
}),

new Vegetable({
  name: 'lettuce',
  color: 'green',
  planted_on: Date.now(),
}),

new Vegetable({
  name: 'eggplant',
  color: 'purple',
  planted_on: Date.now(),
}),

new Vegetable({
  name: 'pepper',
  color: 'red',
  planted_on: Date.now(),
}),

new Vegetable({
  name: 'kale',
  color: 'green',
  planted_on: Date.now(),
}),

new Vegetable({
  name: 'onion',
  color: 'white',
  planted_on: Date.now(),
}),

new Vegetable({
  name: 'garlic',
  color: 'white',
  planted_on: Date.now(),
}),

new Vegetable({
  name: 'potato',
  color: 'brown',
  planted_on: Date.now(),
})

];

module.exports = veggies;
