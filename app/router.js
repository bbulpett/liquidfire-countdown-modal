import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.modal('countdown-modal', {
    path: 'countdown-modal',
    withParams: ['display_modal'],
    actions: {
    }
  });
});

export default Router;
