const { User } = require('../models');

const userData = [
  {
    username: 'sam123',
    email: 'sam@cbc.ca',
    password: 'pass123'
  },
  {
    username: 'raj123',
    email: 'raj@sogou.com',
    password: 'pass123'
  },
  {
    username: 'mad123',
    email: 'mad@last.fm',
    password: 'pass123'
  },
  {
    username: 'jack123',
    email: 'jack123@goo.ne.jp',
    password: 'pass123'
  },
  {
    username: 'jill123',
    email: 'jill123@weather.com',
    password: 'pass123'
  },
  {
    username: 'sill123',
    email: 'sill123@imdb.com',
    password: 'pass123'
  },
  {
    username: 'dan123',
    email: 'dan123@feedburner.com',
    password: 'pass123'
  },
  {
    username: 'shan123',
    email: 'shan123@china.com.cn',
    password: 'pass123'
  },
  {
    username: 'ali123',
    email: 'ali123@google.ru',
    password: 'pass123'
  },
  {
    username: 'mark123',
    email: 'mark12@epa.gov',
    password: 'pass123'
  }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;