import { mount } from 'auth/AuthApp';
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';


interface Props {
    onSignIn: () => void;
}


const AuthApp: React.FC<Props> = ({ onSignIn }) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname }) => {
                if (history.location.pathname !== pathname) {
                    history.push(pathname);
                }
            },
            onSignIn
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />;
};


export default AuthApp;