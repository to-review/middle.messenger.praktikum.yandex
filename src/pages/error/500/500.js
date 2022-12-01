import '../../../components/error/error'
import errorTmpl from './500.hbs';

const data = {
    errorContext: {
        title: '500',
        message: 'Мы уже фиксим',
        linkName: 'Назад к чатам',
        linkUrl: '/',
    }
}

const renderError500 = () => {
    return errorTmpl(data);
}

export { renderError500 };
