
import '../../modules/form/form';
import passwordTmpl from './password.hbs';

const data = {
    formContext: {
        formTitle: 'Изменить пароль',
        fields: [
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
            content: 'Сохранить',
        },
    }
}

const renderPassword = () => {
    return passwordTmpl(data);
}

export { renderPassword };