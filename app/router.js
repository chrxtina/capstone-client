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
  this.route('item', {path: 'items/:item_id'});
  this.route('item/edit', {path: 'items/:item_id/edit'});

  this.route('conversations');
  this.route('conversation', { path: 'conversations/:conversation_id' });
  this.route('message', {path: 'messages/:message_id'});
});

export default Router;
