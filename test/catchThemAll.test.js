import catchThemAll from '../src/catchThemAll';
import getAleatoirePokemon from '../src/getPokemon';

describe('catchThemAll(data)', () => {
    it('should return data of pokemon with id', async () => {
        const result = await catchThemAll(1);
        expect(typeof result).toBe('boolean');
    });
    it('should return data of pokemon with name', async () => {
        const result = await catchThemAll("mewtwo");
        expect(typeof result).toBe('boolean');
    });
    it('should throw an error', async () => {
        await expect(async () => {
            await catchThemAll("angel");
        }).rejects.toThrow();
    });

  });