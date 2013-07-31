GistClone.Views.GistsIndexView = Backbone.View.extend({
  template: JST["gists/index"],
  tagName: "ul",
  render: function() {
    var that = this;
    var renderedContent = that.template({
      gists: that.collection
    });
    that.$el.html(renderedContent);
    return that;
  }

});