import Handlebars from 'handlebars/dist/handlebars.runtime';

import '../search-panel/search-panel';
import '../profile-menu/profile-menu';
import '../message/message';

import template from './side-panel.hbs';
import './side-panel.scss'

Handlebars.registerPartial('side-panel', template);