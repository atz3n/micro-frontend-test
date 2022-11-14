declare module "auth/AuthApp" {
    function mount(ref: ReactElement, config: {
        initialPath: string,
        onNavigate: (params: { pathname: string }) => void,
        onSignIn: () => void,
    })
};

