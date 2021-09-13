import { config } from './config';

export const api = Object.freeze({
    profile: {
        get: () => {
            return fetch(config).then((resp) => resp.json());
        }
    },
    contacts: {
        get: () => {
            return fetch(`${config}?results=60`).then((resp) => resp.json());
        }
    },
});
