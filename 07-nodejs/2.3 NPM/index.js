//var generateName = require('sillyname'); jeito antigo de usar node, hoje se usa import

import generateName from 'sillyname';
import {randomSuperhero} from 'superheroes';

var sillyName = generateName();
console.log(`My name is ${sillyName}.`);

var superHero = randomSuperhero();
console.log(`I'm ${superHero}, the best on the galaxy!`);