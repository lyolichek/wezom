import { USER_KEY, PROFILE_KEY, LOGGED_KEY, CONTACTS_KEY } from '../constants/general';

const addToLocalStorage = (key, data) => {
    if(key === USER_KEY) {
        localStorage.setItem(key, JSON.stringify( {email: data.email, password: data.password}));
    } else {
        localStorage.setItem(key, JSON.stringify(data));
    }
};

const removeFromLocalStorage = () => {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(PROFILE_KEY);
    localStorage.removeItem(CONTACTS_KEY);
    localStorage.removeItem(LOGGED_KEY);
};

const userLoginCheck = () => {
    const user = getFromLocalStorage(USER_KEY);
    const profile = getFromLocalStorage(PROFILE_KEY);
    const contacts = getFromLocalStorage(CONTACTS_KEY);

    if (user && profile) {
        addToLocalStorage(LOGGED_KEY, true);

        return {
            user,
            profile,
            contacts,
            isLogged: true
        };
    } else {
        return false;
    }
};

const getFromLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export { addToLocalStorage, removeFromLocalStorage, userLoginCheck };
