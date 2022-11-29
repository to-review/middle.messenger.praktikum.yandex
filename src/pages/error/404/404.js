import '../../../components/error/error'
import errorTmpl from './404.hbs';

const data = {
    errorContext: {
        title: '404',
        message: 'Не туда попали',
        linkName: 'Назад к чатам',
        linkUrl: '/',
    }
}

const renderError404 = () => {
     return errorTmpl(data);
}

export { renderError404 };
