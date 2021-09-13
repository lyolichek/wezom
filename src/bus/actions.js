import { types } from './types';
import { USER_KEY, PROFILE_KEY, LOGGED_KEY, CONTACTS_KEY } from '../constants/general';
import { addToLocalStorage, removeFromLocalStorage } from '../utils/login';

export const userActions = Object.freeze({
    logIn: (profile) => {
        addToLocalStorage(USER_KEY, profile);
        addToLocalStorage(LOGGED_KEY, true);

        return {
            type: types.USER_LOGIN,
            payload: profile
        }
    },

    logOut: () => {
        removeFromLocalStorage();

        return {
            type: types.USER_LOGOUT,
            payload: null
        }
    },

    addProfile: (profile) => {
        addToLocalStorage(PROFILE_KEY, profile);

        return {
            type: types.ADD_PROFILE,
            payload: profile
        }
    },

    addContacts: (contacts) => {
        addToLocalStorage(CONTACTS_KEY, contacts);

        return {
            type: types.ADD_CONTACTS,
            payload: contacts
        }
    },

    updateIsLogged(state) {
        return {
            type: types.UPDATE_IS_LOGGED,
            payload: state
        }
    },

    updateUserProfile(data) {
        return {
            type: types.UPDATE_USER_PROFILE,
            payload: data
        }
    }
});
