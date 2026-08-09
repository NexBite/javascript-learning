const restaurant = {
  name : "Food House",
  location : "kolkata",
  rating : 4.5,
  cusisin : "Indian",
  delivery : true
};
Object.keys(restaurant);
// keys
Object.keys(restaurant).forEach(key => {
  console.log(key,restaurant[key]);
});
// value
Object.values(restaurant).forEach(foodValue =>
{
  console.log(foodValue);
}
);


// enties
Object.entries(restaurant).forEach(food =>{
  console.log(food);
});
