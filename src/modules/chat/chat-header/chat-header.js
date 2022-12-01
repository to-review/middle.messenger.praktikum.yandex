import Handlebars from 'handlebars/dist/handlebars.runtime';

import template from './chat-header.hbs';
import './chat-header.scss'

Handlebars.registerPartial('chat-header', template);
