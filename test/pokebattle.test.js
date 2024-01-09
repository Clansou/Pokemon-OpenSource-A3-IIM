import pokebattle from '../src/pokebattle';

describe('pokebattle(poke1, poke2)', () => {
  it('should return stats of pokemons', async () => {
        const result = await pokebattle(1, 2);
        console.log(result);
        expect(result).toBeDefined();
    });
});
