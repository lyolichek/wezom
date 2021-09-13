import React, { useEffect, useMemo } from 'react';
import { APP_NAME, PROFILE_KEY } from '../constants/general';
import { Header } from '../components/header';
import { userLoginCheck } from '../utils/login';
import { useUser } from '../hooks/useUser';
import { useRoute } from '../hooks/useRoute';
import { StyledLayout, StyledContent, StyledFooter } from './styled';

export const Layout = ( {children} ) => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);
    const { updateUserProfile } = useUser();
    const routeTo = useRoute('/profile');

    useEffect(() => {
        const data = userLoginCheck(PROFILE_KEY);

        if (data) {
            updateUserProfile(data);
            routeTo();
        }
    }, []);

    return (
        <StyledLayout>
            <Header/>
            <StyledContent>{children}</StyledContent>
            <StyledFooter>{currentYear} &copy; {APP_NAME}</StyledFooter>
        </StyledLayout>
    )
};
