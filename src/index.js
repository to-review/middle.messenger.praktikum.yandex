import './vendor/vendor.scss';

import { renderError404 } from './pages/error/404/404';
import { renderError500 } from './pages/error/500/500';

const root = document.querySelector("#root");
const path = window.location.pathname;

switch (path) {
    case '/':
        root.innerHTML = renderError404();
        break;
    case '/500':
            root.innerHTML = renderError500();
            break;
    
    default:
        root.innerHTML = renderError404();
}