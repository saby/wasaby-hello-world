((resourceRoot: string) => {
    function generateElement(key: string, path: string): Promise<void> {
        return new Promise((resolve) => {
            const element = document.createElement('script');
            element.setAttribute('key', key);
            element.setAttribute('type', 'text/javascript');
            element.setAttribute('src', `${window.location.origin}/${resourceRoot}/${path}.js`);
            element.addEventListener('load', resolve.bind(null));
            document.head.appendChild(element);
        });
    }

    const resources = {
        bundles: 'bundles',
        require: 'cdn/RequireJS/2.3.5-p5/require-min',
        contents: 'contents',
        router: 'router',
        config: 'RequireJsLoader/config'
    };

    // @ts-ignore
    window.wsConfig = {
        wsRoot: `/${resourceRoot}/WS.Core/`,
        resourceRoot: `/${resourceRoot}/`,
        appRoot: '/',
        debug: true//?
    };

    Promise.all(Object.keys(resources).map((key) => {
        return generateElement(key, resources[key]);
    })).then(() => {
        requirejs(['Application/Initializer', 'UI/Base', 'UI/State'], (AppInit: any, UI: any, UIState: any) => {
            // @ts-ignore
            window.startContextData = {AppData: new UIState.AppData({})};
            // @ts-ignore
            AppInit.default(window.wsConfig);
            UI.Start({}, document.getElementById('wasabyRoot'));
        });
    });
})('wasaby');
