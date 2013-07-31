GistClone.Views.GistDetailView = Backbone.View.extend({
  initialize: function () {
    var that = this;
    var renderCallback = that.render.bind(that);

    that.listenTo(that.collection, "add", renderCallback);
    that.listenTo(that.collection, "remove", renderCallback);
    that.listenTo(that.collection, "reset", renderCallback);
    that.listenTo(that.collection, "change", renderCallback);
  },

  events: {
    "click button": "toggleFavorite",
  },

  template: JST["gists/show"],

  render: function() {
    var that = this;
    var renderedContent = that.template({
      gist: that.model
    });
    that.$el.html(renderedContent);
    return that;
  },

  toggleFavorite: function (event) {
    if (event.currentTarget.id === "favorite-button") {
      var meth = "POST"
    } else {
      var meth = "DELETE"
    }

    $(".favorite-buttons").toggleClass("favorited")
    var that = this;
    $.ajax({
      url: "/gists/" + that.model.id + "/favorite",
      method: meth,
      success: function() {
        console.log("success!");
        that.model.fetch();
        that.render();
      },
      error: function() {
        console.log("error");
      }
    });

  }
});