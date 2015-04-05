import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  isToggled: Ember.computed('toggleableItem.property', 'toggledList.@each', function(){
    var toggledList = this.get('toggledList')
    return toggledList.contains(this.get('toggleableItem.property'))
  }),
  actions: {
    toggleItem: function(){
      if(this.get('isToggled')){
        this.get('toggledList').removeObject(this.get('toggleableItem.property'))
      } else {
        this.get('toggledList').pushObject(this.get('toggleableItem.property'))
      }
    }
  }
});