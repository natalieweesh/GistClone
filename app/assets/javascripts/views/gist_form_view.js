GistClone.Views.GistFormView = Backbone.View.extend({

  template: JST["gists/form"],
  events: {
    "click .submit" : "newGist"
  },
  render: function() {
    var that = this;
    var renderedContent = that.template();
    that.$el.html(renderedContent);
    return that;
  },

  newGist: function(event) {
    var that = this;
    event.preventDefault();
    var formData = $('.gist-form').serialize();
    // var str = $('input[type=text]').val()
    // var formInfo = {gist: {title: str}}
    that.collection.create({title: $('input[type=text]').val()});
    that.collection.fetch();
    console.log(that.collection);
    Backbone.history.navigate("", {trigger: true});
        //
    // $.ajax({
    //   url: "/gists",
    //   type: "POST",
    //   data: formData,
    //   success: function() {
    //     console.log("success");
    //     that.collection.fetch();
    //
    //   },
    //   error: function () {
    //     console.log("error");
    //   }
    // });
  }

});