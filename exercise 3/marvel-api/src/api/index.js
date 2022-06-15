const publicKey = "6eb1805cb04a6438f731efda4856f129";
const privateKey = "81c9d1f97733bb10c26891db2dabfc1aee5097cb";

export const getCharacters = async () => {
    try {
        const res = await fetch(
            `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}`
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const searchByNameCharacter = async () => {
    const res = await fetch(
        `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}`
    );
};
