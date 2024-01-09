import catchThemAll from '../src/catchThemAll';
import getAleatoirePokemon from '../src/getPokemon';

describe('catchThemAll(data)', () => {
    it('should return data of pokemon', async () => {
        const pokemonid = await getAleatoirePokemon();
        const result = await catchThemAll(pokemonid["id"]);
        console.log(result);
        expect(typeof result).toBe('boolean');
    });
  });