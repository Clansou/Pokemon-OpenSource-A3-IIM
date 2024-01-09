export default async function catchThemAll(pokemonid) {
    console.log(pokemonid);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonid}`);
        const data = await response.json();
        const tryToCatch = Math.floor(Math.random() * 255 + 1);
        return tryToCatch <= data["capture_rate"] ? true : false;
    } catch (error) {
        console.error("Error fetching Pokemon:", error);
        throw error;
    }
}