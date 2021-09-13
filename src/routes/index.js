import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useUser } from '../hooks/useUser';
import { Layout } from '../layout';
import { routes } from './routes';
import { Home, Contacts, Profile, NotFound } from '../pages';

const { home, profile, contacts } = routes;

export const Router = () => {
    const {userData} = useUser();

    return (
        <Switch>
            <Route exact path={home.path} render={() => <Layout><Home/></Layout>}/>
            <Route
                path={profile.path}
                render={() => userData.isLogged ? <Layout><Profile/></Layout> : <Redirect to="/"/>}
            />
            <Route
                path={contacts.path}
                render={() => userData.isLogged ? <Layout><Contacts/></Layout> : <Redirect to="/"/>}
            />
            <Route path="*" render={() => <Layout><NotFound/></Layout>}/>
        </Switch>
    );
};
