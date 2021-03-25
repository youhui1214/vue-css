



export default {

    searchUsers ({state, commit}, obj) {
        let {accounts, done} = obj
        const nim = state.nim
        if (!Array.isArray(accounts)) {
            accounts = [accounts]
        }
    }

}
