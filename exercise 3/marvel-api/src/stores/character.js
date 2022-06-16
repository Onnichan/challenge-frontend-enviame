import { defineStore } from "pinia";

export const useCharacterStore = defineStore({
    id: "character",
    state: () => ({
        characters: [],
        limit: 20,
        offset: 0,
        error: null,
        loading: true,
    }),

    getters: {},

    actions: {
        addCharacterToStart(character) {
            this.characters.unshift(character);
        },
        addCharacterToFinish(characters) {
            this.characters = [...this.characters, ...characters];
        },
        editCharacter(characterId, replace) {
            const index = this.characters.findIndex(
                (character) => character.id == characterId
            );
            this.characters[index] = { ...this.characters[index], ...replace };
        },
        addOffset() {
            this.offset += this.limit;
        },
        setLoading(value) {
            this.loading = value;
        },
    },
});
