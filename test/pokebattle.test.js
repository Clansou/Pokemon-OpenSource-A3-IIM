import pokebattle from '../src/pokebattle';

describe('pokebattle(poke1, poke2)', () => {
  it('should return the winner', async () => {
        const result = await pokebattle(1, 2);
        console.log(result);
        expect(result).toBeDefined();
    });
    it('should throw an error', async () => {
      await expect(async () => {
          await pokebattle("angel", "clemsou");
      }).rejects.toThrow();
  });
});
