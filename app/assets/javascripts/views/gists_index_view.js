GistClone.Views.GistsIndexView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    var renderCallback = that.render.bind(that);

    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "change", renderCallback);
  },

  template: JST["gists/index"],

  render: function() {
    var that = this;
    var renderedContent = that.template({
      gists: that.collection
    });
    that.$el.html(renderedContent);
    return that;
  }

});