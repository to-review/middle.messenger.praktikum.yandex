
import '../../modules/form/form';
import loginTmpl from './login.hbs';

const data = {
    formContext: {
        formTitle: 'Вход',
        fields: [
            {
                field: {
                    className: 'input form__input',
                    type: 'text',
                    name: 'login',
                    placeholder: 'Логин',
                }
            },
            {
                field: {
                    className: 'input form__input',
                    type: 'password',
                    name: 'password',
                    placeholder: 'Пароль',
                }
            },
        ],
        button: {
            className: 'form__button button',
            type: 'submit',
            content: 'Войти',
        },
        link: {
            text: 'Нет аккаунта?',
            url: '/register',
        },
    }
}

const renderLogin = () => {
    return loginTmpl(data);
}

export { renderLogin };