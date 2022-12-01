import Handlebars from 'handlebars/dist/handlebars.runtime';


import template from './chat-content.hbs';
import './chat-content.scss'

Handlebars.registerPartial('chat-content', template);
