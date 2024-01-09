# PokeBattle

## Library

PokeBattle is a JavaScript library that simulates battles between Pokémon based on their average base stats.

```npm i pokebattle_clansou_anrelwsh```

## Features

- Two Pokemon from the 4th first generations are chosed, from pokeapi.com
```javascript
import getAleatoirePokemon from './node_modules/pokebattle_clansou_anrelwsh/src/getPokemon.js';

// Retrieve data for a random Pokemon
getAleatoirePokemon().then(data => {
  console.log(data);
});
```

- Simulates battles between two Pokémon.
```javascript
import pokebattle from './node_modules/pokebattle_clansou_anrelwsh/src/pokebattle.js';

// Now you can use the imported function
pokebattle(yourPokemonIdOrName,yourPokemonIdOrName).then(data => {
  console.log(data);
});
```

- Simulates a catch attempt with the real capture rate.
```javascript
import catchThemAll from './node_modules/pokebattle_clansou_anrelwsh/src/catchThemAll.js';

// Now you can use the imported function
catchThemAll(yourPokemonIdOrName).then(data => {
  console.log(data);
});
```


## Installation

Clone the repository:
```git clone https://github.com/your-username/PokeBattle.git```

Install dependencies:
```cd Pokemon-OpenSource-A3-IIM```
```npm install```

## Testing

```npm run test```

## Contributing

Contributions are welcome! Feel free to report bugs or add feature requests!

## License

This project is licensed under the MIT License.

## 
