const { db, Gardener, Plot, Vegetable } = require('./models');

const gardeners = [

new Plot({
  size: 40,
  shaded: true
}),

new Plot({
  size: 32,
  shaded: true
}),

new Plot({
  size: 60,
  shaded: false
}),

new Plot({
  size: 121,
  shaded: false
}),

new Plot({
  size: 20,
  shaded: false
}),

new Plot({
  size: 9,
  shaded: true
}),

new Plot({
  size: 5,
  shaded: false
}),

new Plot({
  size: 31,
  shaded: true
}),

new Plot({
  size: 12,
  shaded: false
}),

new Plot({
  size: 10,
  shaded: false
})

];

module.exports = gardeners;
