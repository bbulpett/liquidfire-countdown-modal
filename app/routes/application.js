import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    display_modal: { replace: true }
  },

  display_modal: false,

  activate() {
    this._super();
    console.log("ACTIVATE HOOK");
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.replaceWith('index', { queryParams: { display_modal: true } });
    });
  }
});
