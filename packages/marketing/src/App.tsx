import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';
import { History } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';


const generateClassName = createGenerateClassName({
    productionPrefix: 'ma',
});

// Workaround to circumvent Typescript error
// TODO: Import working type definition
const StylesProviderAsAny = StylesProvider as any;


interface Props {
    history: History;
}


const App: React.FC<Props> = ({ history }) => {
    return (
        <div>
            <StylesProviderAsAny generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProviderAsAny>
        </div>
    );
};


export default App;