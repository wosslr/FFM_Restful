/**
 * Created by I300934 on 7/6/2017.
 */
export const logIn = (tokenObject) => ({
    type: 'LOGIN',
    token: tokenObject.token,
    expirationTime: tokenObject.expirationTime,
    loggedIn: true
})

export const logOut = (tokenObject) => ({
    type: 'LOGOUT'
})