import '../../modules/info-table/info-table';
import registerTmpl from './profile.hbs';

import avatar from '../../../static/images/avatars/1.jpg';

const data = {
    profile: {
        title: 'Дмитрий Пучков',
        image: avatar,
        fields: [
            {
                field: {
                    value: 'aa@aa.bb',
                    title: 'Почта',
                }
            },
            {
                field: {
                    value: 'puchkov',
                    title: 'Логин',
                }
            },
            {
                field: {
                    value: 'Дмитрий',
                    title: 'Имя',
                }
            },
            {
                field: {
                    value: 'Пучков',
                    title: 'Фамилия',
                }
            },
            {
                field: {
                    value: '+7 (911) 123-4567',
                    title: 'Телефон',
                }
            }
        ],
        links: [
            {
                text: 'Изменить Пароль',
                url: '/password',
            },
            {
                text: 'Выйти',
                url: '#',
            }
        ]
    }
}

const renderProfile = () => {
    return registerTmpl(data);
}

export { renderProfile };