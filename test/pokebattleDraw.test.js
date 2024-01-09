import pokebattle from '../src/pokebattle';

describe('pokebattle(poke1, poke2)', () => {
  it('should return draw', async () => {
        const result = await pokebattle(1, 1);
        expect(result).toBe("Wawawaw it's a draw !!!");
        console.log(result);
    });
});
