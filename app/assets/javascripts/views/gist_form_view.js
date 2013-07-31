GistClone.Views.GistFormView = Backbone.View.extend({

  template: JST["gists/form"],
  events: {
    "click .submit" : "newGist"
  },
  render: function() {
    var that = this;
    var renderedContent = that.template();
    that.$el.html(renderedContent);
    that.$el.find('.gist-form').append(JST["gists/file_form"]);
    return that;
  },

  newGist: function(event) {
    var that = this;
    event.preventDefault();
    var formData = $('.gist-form').serialize();
    that.collection.create({
      title: $('input[type=text]').val(),
      gist_files_attributes: [{
        name: $('input[name=gist\\[gist_files_attributes\\]\\[0\\]\\[name\\]]').val(),
        body: $('textarea[name=gist\\[gist_files_attributes\\]\\[0\\]\\[body\\]]').val()
      }]
    });
    that.collection.fetch();
    Backbone.history.navigate("", {trigger: true});
  }

});