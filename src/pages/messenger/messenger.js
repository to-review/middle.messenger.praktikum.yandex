import '../../components/message/message';

import messengerTmpl from './messenger.hbs';
import avatar1 from '../../../static/images/avatars/1.jpg';
import avatar2 from '../../../static/images/avatars/2.jpg';
import avatar3 from '../../../static/images/avatars/3.jpg';

const data = {
    messagesList: [
        {
            message: {
                name: 'Семен Петров',
                avatarUrl: avatar1,
                text: 'Привет',
                time: '11:12',
                messagesAmount: 6,
            }
        },
        {
            message: {
                name: 'Дмитрий Пучков',
                avatarUrl: avatar2,
                text: 'Сообщение тебе в личку пришло',
                time: '12:23',
                fromMe: true,
            }
        },
        {
            message: {
                name: 'ВАдим Иванов',
                avatarUrl: avatar3,
                text: 'Получи еще одно сообщение',
                time: '13:44',
            }
        },
        {
            message: {
                name: 'Семен Петров',
                avatarUrl: avatar1,
                text: 'Привет',
                time: '11:12',
                messagesAmount: 6,
            }
        },
        {
            message: {
                name: 'Дмитрий Пучков',
                avatarUrl: avatar2,
                text: 'Сообщение тебе в личку пришло',
                time: '12:23',
                fromMe: true,
            }
        },
        {
            message: {
                name: 'ВАдим Иванов',
                avatarUrl: avatar3,
                text: 'Получи еще одно сообщение',
                time: '13:44',
            }
        },
        {
            message: {
                name: 'Семен Петров',
                avatarUrl: avatar1,
                text: 'Привет',
                time: '11:12',
                messagesAmount: 6,
            }
        },
        {
            message: {
                name: 'Дмитрий Пучков',
                avatarUrl: avatar2,
                text: 'Сообщение тебе в личку пришло',
                time: '12:23',
                fromMe: true,
            }
        },
        {
            message: {
                name: 'ВАдим Иванов',
                avatarUrl: avatar3,
                text: 'Получи еще одно сообщение',
                time: '13:44',
            }
        },
        {
            message: {
                name: 'Семен Петров',
                avatarUrl: avatar1,
                text: 'Привет',
                time: '11:12',
                messagesAmount: 6,
            }
        },
        {
            message: {
                name: 'Дмитрий Пучков',
                avatarUrl: avatar2,
                text: 'Сообщение тебе в личку пришло',
                time: '12:23',
                fromMe: true,
            }
        },
        {
            message: {
                name: 'ВАдим Иванов',
                avatarUrl: avatar3,
                text: 'Получи еще одно сообщение',
                time: '13:44',
            }
        },
        {
            message: {
                name: 'Семен Петров',
                avatarUrl: avatar1,
                text: 'Привет',
                time: '11:12',
                messagesAmount: 6,
            }
        },
        {
            message: {
                name: 'Дмитрий Пучков',
                avatarUrl: avatar2,
                text: 'Сообщение тебе в личку пришло',
                time: '12:23',
                fromMe: true,
            }
        },
        {
            message: {
                name: 'ВАдим Иванов',
                avatarUrl: avatar3,
                text: 'Получи еще одно сообщение',
                time: '13:44',
            }
        }
    ]
};

const renderMessenger = () => {
    return messengerTmpl(data);
}

export { renderMessenger };