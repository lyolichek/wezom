import { useHistory } from 'react-router';
import { useCallback } from 'react';

export const useRoute = (path) => {
    const history = useHistory();
    return useCallback(() => history.push(path), [history]);
};
