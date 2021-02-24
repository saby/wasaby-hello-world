((resourceRoot) => {
    function generateElement(key, path) {
        return new Promise((resolve) => {
            const element = document.createElement('script');
            element.setAttribute('key', key);
            element.setAttribute('type', 'text/javascript');
            element.setAttribute('src', `/${resourceRoot}/${path}.js`);
            element.addEventListener('load', resolve);
            document.head.appendChild(element);
        })
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
        require(['Application/Initializer', 'UI/Base'], (AppInit, UI) => {
            // @ts-ignore
            window.startContextData = {AppData: new UI.AppData({})};
            // @ts-ignore
            AppInit.default(window.wsConfig, void 0, new UI.StateReceiver());
            UI.Start({}, document.getElementById('wasabyRoot'));
        });
    })
})('wasaby');
