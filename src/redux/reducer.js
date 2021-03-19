const initialState = {
    ownerUser: {},
    renterUser: {}
}

const SET_OWNER_USER = 'SET_OWNER_USER',
      SET_RENTAL_USER = 'SET_RENTAL_USER',
      CLEAR_USER = 'CLEAR_USER';

export function setOwnerUser(userObj) {
    return {
        type: SET_OWNER_USER,
        payload: userObj
    }
}

export function setRenterUser(userObj) {
    return {
        type: SET_RENTAL_USER,
        payload: userObj
    }
}

export function clearUser() {
    return {
        type: CLEAR_USER,
        payload: {}
    }
}

export default function reducer(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case SET_RENTAL_USER:
            return {...state, user: payload}
        case SET_OWNER_USER:
            return {...state, user: payload}
        case CLEAR_USER:
            return {...state, user: payload}
        default:
            return state
    }
}