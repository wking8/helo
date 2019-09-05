const initialState = {
    username: '',
    id: '',
    profile_pic: ''
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
            const { username, id, profile_pic } = payload
            return { ...state, username, id, profile_pic }
        default: return state
    }
}