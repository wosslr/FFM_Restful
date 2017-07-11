/**
 * Created by I300934 on 7/11/2017.
 */
const initialState = {
    token: "",
    expirationTime: "",
    loggedIn: false
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                loggedIn: true,
                token: action.token,
                expirationTime: action.expirationTime
            }
        case 'LOGOUT':
            return {
                token: "",
                expirationTime: "",
                loggedIn: false
            }
        default:
            return state
    }
}

export default auth