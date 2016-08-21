import Ember from 'ember';

export default Ember.Component.extend({
  counter: 0,

  actions: {
    dismiss() {
      this.sendAction('dismiss');
    },

    startCounter() {
      Ember.run.later(this, function() {
      var counter = this.get('counter');
      this.set('counter', counter++);
      }, 1000);
    },

    resetCounter() {
      this.set('counter', 0)
    }
  }
});
