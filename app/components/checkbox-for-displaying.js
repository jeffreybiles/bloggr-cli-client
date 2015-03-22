import Ember from 'ember';

export default Ember.Component.extend({
  isDisplayed: Ember.computed('displayableItem.property', 'displayedList.@each', function(){
    var displayedList = this.get('displayedList')
    return displayedList.contains(this.get('displayableItem.property'))
  }),
  actions: {
    setBoolean: function(){
      console.log(this.get('isDisplayed'), this.get("displayedList"))
      if(this.get('isDisplayed')){
        this.get('displayedList').removeObject(this.get('displayableItem.property'))
      } else {
        this.get('displayedList').pushObject(this.get('displayableItem.property'))
      }
    }
  }
});