import { View } from 'backbone.marionette';
import template from '../templates/NorrisWidge.template.jst';
import Joke from './Joke';
import JokeModel from '../models/Joke.model';

export default View.extend({
  tagName: 'div',
  className: 'container mt-5 p-5 text-center',
  template,

  initialize() {
    this.model = new JokeModel();
  },
  
  ui: {
    btn: 'button'
  },

  events: {
    'click @ui.btn': 'fetchJoke'
  },

  modelEvents: {
    'sync': 'renderJoke'
  },

  regions: {
    'jokeRegion': '#js-joke-region'
  },

  fetchJoke() {
    this.getUI('btn').attr('disabled', true).text('Loading...');
    this.model.unset('id');
    this.model.fetch();
  },

  renderJoke(model, res, ops) {
    this.getUI('btn').attr('disabled', false).text('New joke');
    this.showChildView('jokeRegion', new Joke({ model }))
  },

  onRender() {
    this.model.fetch();
  }
});
