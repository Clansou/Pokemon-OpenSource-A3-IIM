import getAleatoirePokemon from '../src/getPokemon';

describe('getAleatoirePokemon()', () => {
  it('should return data of pokemon', async () => {
        const result = await getAleatoirePokemon();
        //console.log(result);
        expect(result).toBeDefined();
    });
});
