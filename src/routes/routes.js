import { Home, Contacts, Profile, NotFound } from '../pages';

export const routes = Object.freeze({
    'home': {
        path: '/',
        page: Home,
    },
    'profile': {
        path: '/profile',
        page: Profile,
    },
    'contacts': {
        path: '/contacts',
        page: Contacts,
    },
    'error': {
        path: '*',
        page: NotFound,
    }
});
