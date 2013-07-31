GistClone.Views.GistDetailView = Backbone.View.extend({
  template: JST["gists/show"],
  tagName: "ul",
  render: function() {
    var that = this;
    var renderedContent = that.template({
      gist: that.model
    });
    that.$el.html(renderedContent);
    return that;
  }
});