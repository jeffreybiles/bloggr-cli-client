import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(input, options) {
  var string = input;

  if(options.hash.first){
    string += options.hash.first
  }
  if(options.hash.second){
    string += options.hash.second
  }
  var tagName = options.hash.tagName || 'div'
  string = "<"+ tagName + ">" + string + "</" + tagName + ">";

  return Ember.String.htmlSafe(string);
})
