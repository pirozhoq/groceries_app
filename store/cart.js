export const state = () => ({
    list: []
})

export const mutations = {
    addToList(state, { id, quantity }) {
        let exist_item = state.list.find(x => x.id == id);
        if (exist_item) {
            quantity += exist_item.quantity;
            state.list.splice(state.list.findIndex(function(el) {
                el.id == id
            }), 1)
        }
        state.list.push({id: id, quantity: quantity});
    },
    delFromList(state, { id, quantity }) {
        state.list.splice(state.list.findIndex(function(el) {
            el.id == id
        }), 1)
    }
}
