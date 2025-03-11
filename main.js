import './style.css';

import { pdsTheme } from '@porsche-design-system/components-js/ag-grid';
import * as agGrid from 'ag-grid-community';
import {
    AllCommunityModule,
    ModuleRegistry,
    ValidationModule /* Development Only */,
    provideGlobalGridOptions,
    ClientSideRowModelModule
} from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule, ClientSideRowModelModule, ValidationModule]);

provideGlobalGridOptions({
    theme: pdsTheme,
});
window.agGrid = agGrid;

const routes = [
    { path: '#home', file: 'home.html', name: 'Home' },
    { path: '#performance', file: 'performance.html', name: 'Performance' },
    { path: '#ag-grid', file: 'ag-grid.html', name: 'AG Grid' }
];

function createNav() {
    const nav = document.querySelector('#nav');

    routes.forEach(item => {
        const element = document.createElement('p-link-pure');
        element.setAttribute('href', item.path);
        element.innerHTML = item.name;
        nav.appendChild(element);
    });
}

const updateRoute = async () => {
    if (['#', ''].includes(document.location.hash)) {
        return;
    }

    const app = document.querySelector('#app');
    const page = document.location.hash.substr(1);

    app.innerHTML = await (await fetch(`src/${page}.html`)).text();

    // execute scripts inserted via innerHTML
    const scripts = app.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
        const newScript = document.createElement('script');
        if (scripts[i].type) newScript.type = scripts[i].type; // Preserve "module"
        if (scripts[i].src) {
            newScript.src = scripts[i].src;
            newScript.async = true; // Avoid blocking
        } else {
            newScript.textContent = scripts[i].innerText;
        }
        document.body.appendChild(newScript);
    }
};

window.addEventListener('hashchange', updateRoute);
window.addEventListener('load', () => {
    createNav();
    updateRoute();
});
