import generateName from "sillyName";
import superheroes from "superheroes";

//var generateName = require("sillyname");

var sillyName = generateName();
var superhero = superheroes.random();

console.log(`Hello! My name is ${sillyName} and I will be your guide for today!`);
console.log(`And I am ${superhero}! There's really nothing going on for me today so I'm just taking the tour as well :/`);