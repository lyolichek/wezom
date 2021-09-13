import { types } from './types';

export const initialState = {
    user: void(0),
    isLogged: false,
    profile: void(0),
    contacts: void(0)
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN: {
            return {
                ...state,
                user: action.payload
            }
        }
        case types.USER_LOGOUT: {
            return {
                ...state,
                user: null,
                profile: null
            }
        }
        case types.UPDATE_USER_PROFILE: {
            return {
                ...state,
                user: action.payload.user,
                profile: action.payload.profile,
                isLogged: action.payload.isLogged,
            }
        }
        case types.ADD_PROFILE: {
            return {
                ...state,
                profile: action.payload
            }
        }
        case types.ADD_CONTACTS: {
            return {
                ...state,
                contacts: action.payload
            }
        }
        case types.UPDATE_IS_LOGGED: {
            return {
                ...state,
                isLogged: action.payload
            }
        }

        default:
            return state;
    }
};
