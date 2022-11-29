import './common-styles/init.scss';
//import './vendor/vendor.scss';

import { renderMessenger } from './pages/messenger/messenger';
import { renderChat } from './pages/chat/chat';
import { renderLogin } from './pages/login/login';
import { renderPassword } from './pages/password/password';
import { renderProfile } from './pages/profile/profile';
import { renderRegister } from './pages/register/register';
import { renderError404 } from './pages/error/404/404';
import { renderError500 } from './pages/error/500/500';

const root = document.querySelector("#root");
const path = window.location.pathname;

switch (path) {
    case '/':
    case '/messenger':
        root.innerHTML = renderMessenger();
        break;
    case '/chat':
        root.innerHTML = renderChat();
        break;
    case '/login':
        root.innerHTML = renderLogin();
        break;
    case '/password':
        root.innerHTML = renderPassword();
        break;
    case '/register':
        root.innerHTML = renderRegister();
        break;
    case '/profile':
            root.innerHTML = renderProfile();
            break;
    case '/500':
            root.innerHTML = renderError500();
            break;
    
    default:
        root.innerHTML = renderError404();
}