import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';
import React, { lazy, ReactElement, Suspense, useEffect, useState } from 'react';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';


const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

const history = createBrowserHistory();

// Workaround to circumvent Typescript error
// TODO: Import working type definition
const StylesProviderAsAny = StylesProvider as any;


const App: React.FC = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    return (
        <Router history={history}>
            <StylesProviderAsAny generateClassName={generateClassName}>
                <div>
                    <Header
                        onSignOut={() => setIsSignedIn(false)}
                        isSignedIn={isSignedIn}
                    />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path="/auth">
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path="/dashboard">
                                {!isSignedIn && <Redirect to="/" />}
                                <DashboardLazy />
                            </Route>
                            <Route path="/">
                                <MarketingLazy />
                            </Route>
                        </Switch>
                    </Suspense>
                </div>
            </StylesProviderAsAny>
        </Router>
    );
};


export default App;