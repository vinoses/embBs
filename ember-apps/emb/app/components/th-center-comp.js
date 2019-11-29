import Component from '@ember/component';

export default Component.extend({
  tagName: 'th',
  attributeBindings: ['scope'],
  classNames: ['text-center'],

  scope: 'col'
});
