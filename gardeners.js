const { db, Gardener, Plot, Vegetable } = require('./models');

const gardeners = [

new Gardener({
  name: 'Javier',
  age: 30
}),

new Gardener({
  name: 'Laura',
  age: 31
}),

new Gardener({
  name: 'James',
  age: 35
}),

new Gardener({
  name: 'Javier',
  age: 32
}),

new Gardener({
  name: 'Gittie',
  age: 24
}),

new Gardener({
  name: 'John',
  age: 54
}),

new Gardener({
  name: 'Adil',
  age: 19
}),

new Gardener({
  name: 'Tess',
  age: 23
}),

new Gardener({
  name: 'Dan',
  age: 66
}),

new Gardener({
  name: 'Morgan',
  age: 15
})

];

module.exports = gardeners;
