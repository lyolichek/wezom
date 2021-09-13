import { useSelector, useDispatch } from 'react-redux';
import { userActions } from '../bus/actions';

export const useUser = () => {
    const selector = state => state.user;
    const userData = useSelector(selector);
    const dispatch = useDispatch();

    const userLogin = (profile) => {
        const action = userActions.logIn(profile);
        updateIsLogged(true);
        dispatch(action);
    };

    const userLogout = () => {
        const action = userActions.logOut();
        dispatch(action);
    };

    const addProfile = (profile) => {
        if (!userData.profile) {
            const action = userActions.addProfile(profile);
            dispatch(action);
        }
    };

    const addContacts = (contacts) => {
        const action = userActions.addContacts(contacts);
        dispatch(action);
    };

    const updateIsLogged = (state) => {
        const action = userActions.updateIsLogged(state);
        dispatch(action);
    };

    const updateUserProfile = (data) => {
        const action = userActions.updateUserProfile(data);
        dispatch(action);
    };

    return {
        userData,
        userLogin,
        userLogout,
        addProfile,
        addContacts,
        updateIsLogged,
        updateUserProfile
    };
};
