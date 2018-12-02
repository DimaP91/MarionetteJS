import { Model } from 'backbone';

export default Model.extend({
  urlRoot: 'https://api.chucknorris.io/jokes/random'
})
