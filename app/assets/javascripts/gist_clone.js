window.GistClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function ($sidebar, $content, gistsData) {
    new GistClone.Routers.GistsRouter($sidebar, $content, gistsData);
    Backbone.history.start();
  }
}

$(function() {
  var gists = JSON.parse($('#bootstrapped_gists_json').html());

  GistClone.initialize($("#sidebar"), $("#content"), gists);
})