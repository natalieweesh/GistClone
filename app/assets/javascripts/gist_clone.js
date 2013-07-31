window.GistClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function ($rootEl, gistsData) {
    new GistClone.Routers.GistsRouter($rootEl, gistsData);
    Backbone.history.start();
  }
}

$(function() {
  var gists = JSON.parse($('#bootstrapped_gists_json').html());

  GistClone.initialize($("body"), gists);
})