import Component from '@ember/component';

export default Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  classNames: ['img-thumbnail'],
  src: 'assets/images/root1.png'
});
