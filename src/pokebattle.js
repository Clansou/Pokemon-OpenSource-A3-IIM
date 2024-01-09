async function getAverageBaseStat(pokemon) {
  const { name, stats } = pokemon;
  const totalBaseStat = stats.reduce((acc, { base_stat }) => acc + base_stat, 0);
  const averageBaseStat = totalBaseStat / stats.length;
  return [name, averageBaseStat];
}

export default async function pokebattle(poke1, poke2) {
  try {

    const [poke1Name, poke1Stats] = await getAverageBaseStat(poke1);
    const [poke2Name, poke2Stats] = await getAverageBaseStat(poke2);

    console.log([poke1Name, poke1Stats], [poke2Name, poke2Stats]);
    if (poke1Stats > poke2Stats) {
        return poke1Name;
    }else if (poke1Stats < poke2Stats) {
        return poke2Name;
    }else{
        "Wawawaw it's a draw !!!"
    }
  } catch (error) {
    console.error("Error fetching Pokemon:", error);
    throw error;
  }
}
