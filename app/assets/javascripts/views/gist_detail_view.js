GistClone.Views.GistDetailView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    var renderCallback = that.render.bind(that);

    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "reset", renderCallback);
    that.listenTo(that.model, "change", renderCallback)
  },

  events: {
    "click button#favorite-button": "favorite",
    "click button#unfavorite-button" : "unfavorite"
  },

  template: JST["gists/show"],
  tagName: "ul",

  render: function() {
    console.log("called");
    var that = this;
    var renderedContent = that.template({
      gist: that.model
    });
    that.$el.html(renderedContent);
    return that;
  },

  favorite: function () {
    $(".favorite-buttons").toggleClass("favorited")
    var that = this;
    $.ajax({
      url: "/gists/" + that.model.id + "/favorite",
      method: "POST",
      success: function() {
        console.log("success!");
        that.model.fetch();
        that.render();
      },
      error: function() {
        console.log("error");
      }
    });
  },

  unfavorite: function() {
    $(".favorite-buttons").toggleClass("favorited")
    var that = this;
    $.ajax({
      url: "/gists/" + that.model.id + "/favorite",
      method: "DELETE",
      success: function() {
        console.log("success!");
        that.model.fetch();
        that.render();
      },
      error: function () {
        console.log("error");
      }
    });
  }
});