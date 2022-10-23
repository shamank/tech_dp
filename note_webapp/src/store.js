import { createStore } from "vuex";

const store = createStore({
    state: () => {
        return {
            notes: []
        }
    },
    getters: {
        NOTES: (state) => {
            return state.notes;
        }
    },
    mutations: {
        ADD_NOTE: (state, note) => {
            state.notes.push(note);
        },
        REMOVE_NOTE: (state, index) => {
            state.notes.splice(index, 1)
        }

    },
    actions: {
        SAVE_NOTE: async (context, note) => {
            context.commit('ADD_NOTE', note)
        },
        DELETE_NOTE: async (context, index) => {
            context.commit('REMOVE_NOTE', index)
        }
    }
})

export default store;