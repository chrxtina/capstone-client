import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('categories');
  this.route('category', { path: 'categories/:category_id' });
  this.route('post-item');
  this.route('my-items');
});

export default Router;
