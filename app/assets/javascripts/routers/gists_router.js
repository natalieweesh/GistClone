GistClone.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function ($rootEl, gistsData) {
    this.$rootEl = $rootEl;
    this.gists = new GistClone.Collections.Gists(gistsData);
  },

  routes: {
    "" : "index",
    "gists/:id" : "show"
  },

  index: function() {
    var that = this;
    var gistsIndexView = new GistClone.Views.GistsIndexView({
      collection: that.gists
    });
    that.$rootEl.html(gistsIndexView.render().$el);
  },

  show: function(id) {
    var that = this;
    var gist = that.gists.findWhere({id: parseInt(id)});
    var gistDetailView = new GistClone.Views.GistDetailView({
      model: gist,
      collection: that.gists
    });
    that.$rootEl.html(gistDetailView.render().$el);
  }

});