import Handlebars from 'handlebars/dist/handlebars.runtime';

import './chat-header/chat-header';
import './chat-content/chat-content';
import './chat-input/chat-input';

import template from './chat.hbs';
import './chat.scss'

Handlebars.registerPartial('chat', template);