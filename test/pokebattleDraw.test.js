import pokebattle from '../src/pokebattle';
import getAleatoirePokemon from "../src/getPokemon";

describe('pokebattle()', () => {
  it('should return draw', async () => {
        const poke1 = await getAleatoirePokemon();
        const result = await pokebattle(poke1, poke1);
        expect(result).toBe("Wawawaw it's a draw !!!");
        console.log(result);
    });
});
