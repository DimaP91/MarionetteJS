import Marionette from 'backbone.marionette';
import NorrisWidget from './NorrisWidget';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new NorrisWidget());
  }
});
