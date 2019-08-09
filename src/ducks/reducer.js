const initialState = {
    username: '',
    password: ''
}

// Actions
const SET_USER = 'SET_USER'

// builders
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}


// Reducer 
export default (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_USER:
            const { username, password } = payload
            return { ...state, username, password }
        default: return state
    }
}