GistClone.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function ($rootEl, gistsData) {
    this.$rootEl = $rootEl;
    this.gists = new GistClone.Collections.Gists(gistsData);
    gists = this.gists;
  },

  routes: {
    "" : "index",
    "gists/new" : "create",
    "gists/:id" : "show"
  },

  index: function() {
    var that = this;
    console.log(that.gists);
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
  },
  create: function() {
    var that = this;
    var gistFormView = new GistClone.Views.GistFormView({
      collection: that.gists
    });
    that.$rootEl.html(gistFormView.render().$el);
  }

});