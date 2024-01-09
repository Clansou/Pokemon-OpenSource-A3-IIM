/**
 * Get a pokemon and check if it's caught.
 * @param {number|string} pokemon - The ID or name of the pokemon to be fetched and checked for catchability.
 * @returns {boolean} - A boolean indicating whether the pokemon can be caught or not.
 * @throws {Error} - Throws an error if there is an issue fetching the pokemon data.
 */
export default async function catchThemAll(pokemon) {
    console.log(pokemon);
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
        const data = await response.json();
        const tryToCatch = Math.floor(Math.random() * 255 + 1);
        return tryToCatch <= data["capture_rate"] ? true : false;
    } catch (error) {
        console.error("Error fetching Pokemon:", error);
        throw error;
    }
}