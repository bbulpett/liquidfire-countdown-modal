import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.modal('countdown-modal', {
    path: 'countdown-modal',
    withParams: [],
    actions: {
    }
  });
});

export default Router;
