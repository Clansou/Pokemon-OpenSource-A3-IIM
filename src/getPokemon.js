/**
 * Returns a random pokemon from the 1st to the 4th generation
 * @returns {JSON} with the data of the pokemon
 */
export default async function getAleatoirePokemon() {
    const idPokemon = Math.floor(Math.random() * 493 + 1);
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching Pokemon:", error);
        throw error;
    }
}