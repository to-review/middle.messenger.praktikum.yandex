import Handlebars from 'handlebars/dist/handlebars.runtime';

import template from './chat-input.hbs';
import './chat-input.scss'

Handlebars.registerPartial('chat-input', template);
