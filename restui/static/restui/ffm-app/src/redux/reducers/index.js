/**
 * Created by I300934 on 7/5/2017.
 */

const initialState = {
    loggedIn: false,
    token: "",
    expirationTime: ""
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                loggedIn: true,
                token: action.token,
                expirationTime: action.expirationTime
            }
        case 'LOGOUT':
            return initialState
        default:
            return state
    }
}

export default reducers