import { defineStore } from "pinia";

export const useModalStore = defineStore({
    id: "modal",
    state: () => ({
        showModal: false,
        update:true,
        title: '',
    }),

    getters: {},

    actions: {
        show() {
            this.showModal = !this.showModal;
        },
        changeButton(value){
            this.update = value;
        },
        changeTitle(){
            this.title = this.update ? 'Updating a character' : 'Creating a character';
        }
    },
});
