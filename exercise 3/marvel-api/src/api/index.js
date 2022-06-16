// import {PUBLIC_KEY} from '../util/config';
const PUBLIC_KEY = "6eb1805cb04a6438f731efda4856f129";

export const getCharacters = async (limit, offset) => {
    try {
        const res = await fetch(
            `https://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_KEY}&limit=${limit}&offset=${offset}`
        );
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const searchByNameCharacter = async () => {
    const res = await fetch(
        `https://gateway.marvel.com/v1/public/characters?apikey=${PUBLIC_KEY}`
    );
};
