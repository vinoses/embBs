import Component from '@ember/component';

export default Component.extend({
  tagName: 'img',
  attributeBindings: ['src'],
  classNames: ['img-fluid'],
  src: 'assets/images/bgvin.png'
});
