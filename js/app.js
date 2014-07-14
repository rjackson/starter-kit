App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      model: ['red', 'yellow', 'blue']
    })
    .then(function(hash) {
      alert(hash.model);

      return hash;
    });
  },

  setupController: function(controller, hash) {
    controller.setProperties(hash);
  }
});
