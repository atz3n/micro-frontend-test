declare module "marketing/MarketingApp" {
    function mount(ref: ReactElement, config: {
        initialPath: string,
        onNavigate: (params: { pathname: string }) => void,
    })
};

