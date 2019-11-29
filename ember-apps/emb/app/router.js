import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('root', { path: 'home'});
  this.route('java-tools-tech');
  this.route('java-e-e', { path: 'jakarta'});
  this.route('uml');
});

export default Router;
