const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- SYNCED DATABASE -----\n');
  
    await seedUsers();
    console.log('\n-----SEED USERS -----\n');
  
    await seedPosts();
    console.log('\n-----SEED POSTS -----\n');
  
    await seedComments();
    console.log('\n-----SEED COMMENTS -----\n');
  
    process.exit(0);
};

seedAll();