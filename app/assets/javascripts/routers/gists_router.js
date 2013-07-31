GistClone.Routers.GistsRouter = Backbone.Router.extend({
  initialize: function ($sidebar, $content, gistsData) {
    this.$sidebar = $sidebar;
    this.$content = $content;
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
    this.installSidebar(this.$sidebar, this.gists);
  },

  show: function(id) {
    var that = this;
    var gist = that.gists.findWhere({id: parseInt(id)});
    var gistDetailView = new GistClone.Views.GistDetailView({
      model: gist,
      collection: that.gists
    });
    that.$content.html(gistDetailView.render().$el);
  },
  create: function() {
    var that = this;
    var gistFormView = new GistClone.Views.GistFormView({
      collection: that.gists
    });
    that.$content.html(gistFormView.render().$el);
  },

  installSidebar: function ($sidebar, gists) {
    var that = this;

    var gistsIndexView = new GistClone.Views.GistsIndexView({
      collection: gists
    });
    $sidebar.html(gistsIndexView.render().$el);
  }

});