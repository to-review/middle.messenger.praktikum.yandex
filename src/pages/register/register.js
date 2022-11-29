import '../../modules/form/form';
import registerTmpl from './register.hbs';

const data = {
    formContext: {
        formTitle: 'Зарегистрироваться',
        fields: [
            {
                field: {
                    className: 'input form__input',
                    type: 'email',
                    name: 'email',
                    placeholder: 'Почта',
                }
            },
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
                    type: 'text',
                    name: 'first_name',
                    placeholder: 'Имя',
                }
            },
            {
                field: {
                    className: 'input form__input',
                    type: 'text',
                    name: 'second_name',
                    placeholder: 'Фамилия',
                }
            },
            {
                field: {
                    className: 'input form__input',
                    type: 'tel',
                    name: 'phone',
                    placeholder: 'Телефон',
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
            {
                field: {
                    className: 'input form__input',
                    type: 'password',
                    name: 'password_again',
                    placeholder: 'Пароль (еще раз)',
                }
            },
        ],
        button: {
            className: 'form__button button',
            type: 'submit',
            content: 'Зарегистрироваться',
        },
        link: {
            text: 'Войти',
            url: '/login',
        }
    }
}

const renderRegister = () => {
    return registerTmpl(data);
}

export { renderRegister };