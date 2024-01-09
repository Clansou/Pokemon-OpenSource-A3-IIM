import pokebattle from '../src/pokebattle';
import getAleatoirePokemon from "../src/getPokemon";

describe('pokebattle()', () => {
  it('should return stats of pokemons', async () => {
        const [poke1, poke2] = await Promise.all([getAleatoirePokemon(), getAleatoirePokemon()]);
        const result = await pokebattle(poke1, poke2);
        console.log(result);
        expect(result).toBeDefined();
    });
});
