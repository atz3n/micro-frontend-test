import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import { History } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';


const generateClassName = createGenerateClassName({
    productionPrefix: 'au',
});

// Workaround to circumvent Typescript error
// TODO: Import working type definition
const StylesProviderAsAny = StylesProvider as any;


interface Props {
    history: History;
    onSignIn?: () => void;
}


const App: React.FC<Props> = ({ history, onSignIn }) => {
    return (
        <div>
            <StylesProviderAsAny generateClassName={generateClassName}>
                <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <Signin onSignIn={onSignIn} />
                    </Route>
                    <Route path="/auth/signup">
                        <Signup onSignIn={onSignIn} />
                    </Route>
                </Switch>
                </Router>
            </StylesProviderAsAny>
        </div>
    );
};


export default App;