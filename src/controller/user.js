const loginCheck = (username, password) => {
    if (username === 'ted' && password === '123') {
        return true
    }
    return false
}

module.exports = {
    loginCheck
}