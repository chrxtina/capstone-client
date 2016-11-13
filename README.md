# Capstone Project: Full-Stack Application

Live application: https://chrxtina.github.io/capstone-client/

Back-end repository: https://github.com/chrxtina/capstone-api

## About

Cup O' Sugar is a 'shareconomy' application that allows users to post items online and share them with their neighbors. The app is meant to foster community, provide a resource for those in need and possibly prevent unnecessary consumerism.
![Cup O' Sugar screenshot](/app/images/CupoSugarScreenshot.jpg)

## Features

* User Authentication: sign-up, sign-in, sign-out, and change password
* Create and view all or own items
* Edit and delete own items.
* Simple messaging system allowing users to contact item owners

## Technologies Used

* Front-end: Ember.js, Bootstrap
* Back-end: Ruby on Rails

## Development Process

Since this was my first time using Ember, I started off by experimenting and
structuring the app according my understanding and trying to keep everything as
simple as possible. However, after starting to work, I was running into a lot
of errors and felt that my approach was not actually compatible with Ember.
After having a discussion with my instructor, a lot of things became clearer to
me, and I felt more confident in my understanding of how Ember likes to
communicate with APIs and what it expects. After re-structuring parts of the
app, things went a lot smoother and it was easier to navigate around and find
the answers to my questions/issues.

My general approach was to build out the Rails backend first and test all of the
endpoints. Then, I went to the frontend and began working on Ember. I tackled
one view state at a time and depending on the purpose, would develop components
for data and actions belonging to each route. Lastly, I worked on organizing
the layout and the styling of the app before deploying.

## Unsolved Problems and Next Steps

* Add google maps API to show item location
* Add unread/read visual difference between messages
* Add search functionality for category items

## Dependencies

Install build dependencies with `npm install`. Install runtime dependencies with
`bower install`.

-   [ember.js](http://emberjs.com/)
-   [ember-cli](http://www.ember-cli.com/)
-   [Bootstrap](http://getbootstrap.com)

## Planning

[Wireframes](https://drive.google.com/file/d/0B9I6LEzstvUqRlN3eHlrdHhmWUtSVExEQ3FMckpPaUZKRVZz/view?usp=sharing)

[Entity Relationship Diagram](https://docs.google.com/drawings/d/1GDq22b-j0gjaDgGtHtdWZpjNpgdO7GIeCxyDb_tnpUk/edit?usp=sharing)

### User Stories
- As a user, I want to see a list of categories, which each link to lists of items in that category.
- As a user, I want a form to create and post an item.
- As a user, I want a list of my items, which I can update and delete.
- As a user, I want to view my messages and have a option to reply to them.
