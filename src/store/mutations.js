



export default {
    setToken (state) {
        state.token = 'hfhfhfh'
    },
    updateLoading (state, status) {
        clearTimeout(state.loadingTimer)
        state.loadingTimer = setTimeout(() => {
            state.isLoading = status
        }, 20)
    },



}
