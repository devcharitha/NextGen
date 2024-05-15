import EmberRouter from '@ember/routing/router';
import config from 'next-gen/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('dashboard');
  this.route('customers');
  this.route('consumption');
  this.route('rewards');
});
