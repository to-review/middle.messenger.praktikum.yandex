import '../../components/side-panel/side-panel';
import '../../modules/chat/chat';

import chatTmpl from './chat.hbs';
import avatar1 from '../../../static/images/avatars/1.jpg';
import avatar2 from '../../../static/images/avatars/2.jpg';
import avatar3 from '../../../static/images/avatars/3.jpg';

const data = {
    chat: {
        name: 'Дмитрий Пучков',
        avatarUrl: avatar2,
        messages: [   
            {
                content: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.',
                date: '19 июня',
                time: '11:56'
            },
            {
                content: 'Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
                date: '19 июня',
                time: '13:48'
            },
            {
                content: 'Круто!!',
                date: '19 июня',
                time: '12:00',
                fromMe: true
            }
        ]
        
    },
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

const renderChat = () => {
    return chatTmpl(data);
}

export { renderChat };