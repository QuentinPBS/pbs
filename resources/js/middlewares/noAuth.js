export default ({ store, next }) => {
    // Your custom if statement
    if(store.state.tokenStore.token !== "") {
        next("/")
        return false
    }
    next()
    return
}