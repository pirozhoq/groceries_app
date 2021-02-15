export const state = () => ({
    list: []
})

export const mutations = {
    toggleInList(state, id) {
        let index = state.list.indexOf(id);
        if (index != -1) {
            state.list.splice(index, 1)
        } else {
            state.list.push(id)
        }
    }
}
