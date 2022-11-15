import { createMemoryHistory, History, MemoryHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


interface MountConfig {
    onSignIn?: () => void;
    onNavigate?: () => void;
    defaultHistory: History | MemoryHistory;
    initialPath?: string;
}


export function mount(el: Element, config: MountConfig) {
    const { onSignIn, onNavigate, defaultHistory, initialPath } = config;
    const history = defaultHistory || createMemoryHistory({
        initialEntries: initialPath ? [ initialPath ] : []
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

    return {
        onParentNavigate(params: { pathname: string }) {
            const { pathname } = params;
            if (history.location.pathname !== pathname) {
                history.push(pathname);
            }
        },
    };
};