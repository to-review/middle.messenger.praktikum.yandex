import Handlebars from 'handlebars/dist/handlebars.runtime';
import template from './message.hbs';
import './message.scss'

Handlebars.registerPartial('message', template);
