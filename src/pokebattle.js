/**
 * Returns the winner of the battle bases on the base stats
 * @param {Object} pokemon - The Pokemon data containing name and stats
 * @returns {String} The name of the winning Pokemon or a draw message
 * @throws {Error} - Throws an error if there is an issue fetching the pokemon data.
 */

async function getAverageBaseStat(pokemon) {
  const { name, stats } = pokemon;
  const totalBaseStat = stats.reduce((acc, { base_stat }) => acc + base_stat, 0);
  const averageBaseStat = totalBaseStat / stats.length;
  return [name, averageBaseStat];
}

export default async function pokebattle(pokemon1, pokemon2) {
  try {
    const poke1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon1}`);
    const datapoke1 = await poke1.json();
    const poke2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon2}`);
    const datapoke2 = await poke2.json();

    const [poke1Name, poke1Stats] = await getAverageBaseStat(datapoke1);
    const [poke2Name, poke2Stats] = await getAverageBaseStat(datapoke2);

    if (poke1Stats > poke2Stats) {
        return poke1Name;
    }else if (poke1Stats < poke2Stats) {
        return poke2Name;
    }else{
        return "Wawawaw it's a draw !!!";
    }
  } catch (error) {
    //console.error("Error fetching Pokemon:", error);
    throw error;
  }
}
