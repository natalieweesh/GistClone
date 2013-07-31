GistClone.Models.Favorite = Backbone.Model.extend({
  initialize: function(gistId) {
    this.url = "/gists/" + gistId + "/favorite"
  }
});