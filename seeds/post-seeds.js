const { Post } = require('../models');

const postData = [
  {
    title: 'What is Node.js?',
    content: 'Node.js is an open source server environment',
    user_id: 2
  },
  {
    title: 'What is JavaScript and why it is used?',
    content: 'Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers.',
    user_id: 4
  },
  {
    title: 'What is Handlebars?',
    content: 'Handlebars is a simple templating language.',
    user_id: 1
  },
  {
    title: 'What is CSS?',
    content: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML',
    user_id: 3
  },
  {
    title: 'What is object-oriented programming?',
    content: 'Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic.',
    user_id: 11
  },
  {
    title: 'What is Testing in programming?',
    content: 'Testing is the process of executing a program with the aim of finding errors. ',
    user_id: 10
  },
  {
    title: 'What is MVC and why it is used?',
    content: 'MVC is a pattern in software design commonly used to implement user interfaces, data, and controlling logic.',
    user_id: 8
  },
  {
    title: 'What is ExpressJS used for?',
    content: 'Express is a node js web application framework that provides broad features for building web and mobile applications',
    user_id: 9
  },
  {
    title: 'What is the difference between NodeJS and ExpressJS?',
    content: 'Express. js is a framework based on Node. js for which is used for building web-application using approaches and principles of Node. js.',
    user_id: 6
  },
  {
    title: 'What is express JS middleware?',
    content: 'Express middleware are functions that execute during the lifecycle of a request to the Express server',
    user_id: 5
  },
  {
    title: 'What is HTML',
    content: 'HTML, in full hypertext markup language, a formatting system for displaying material retrieved over the Internet.',
    user_id: 7
  },
  {
    title: 'Can SQL be used in Excel?',
    content: 'Using SQL statements in Excel enables you to connect to an external data source, parse field or table contents and import data',
    user_id: 12
  },
  {
    title: 'What is SQL in simple words?',
    content: 'Basically, SQL stands for Structured Query Language which is basically a language used by databases.',
    user_id: 2
  },
  {
    title: 'What software uses SQL?',
    content: 'Microsoft SQL Server Management Studio (SSMS) SQLGate. Postico. PopSQL.',
    user_id: 1
  },
  {
    title: 'What is Heroku and why it is used?',
    content: 'Heroku is a container-based cloud Platform as a Service (PaaS). Developers use Heroku to deploy, manage, and scale modern apps.',
    user_id: 6
  },


];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;