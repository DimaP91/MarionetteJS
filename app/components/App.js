import Marionette from 'backbone.marionette';
import ItemView from './NorrisWidget';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new ItemView());
  }
});
