export default ({ store, next }) => {
    // Your custom if statement
    if(store.state.tokenStore.token === "") {
        next("/login")
        return false
    }
    next()
    return
}

