const { getAllCategories, addCategory, getNewsByCategoryId } = require('../controller/category/categoryController');
const { getAllNews, getNewsById, addNews } = require('../controller/news/newsController');
const { addUser, getAllUser, getUserById, updateUser, deleteUser } = require('../controller/user/userController');

const routes = require('express').Router();




// category routes
routes.route('/categories')
    .get(getAllCategories)// get all categories
    .post(addCategory);// add a category

routes.route('/category/:id')
    .get(getNewsByCategoryId)// get a single category
/* .put(updateCategory)// update a category
.delete(deleteCategory);// delete a category */

// new routes
routes.route('/news')
    .get(getAllNews)// get all news
    .post(addNews);// add a news

routes.route('/news/:id')
    .get(getNewsById)// get a single news
/* .put(updateNews)// update a news
.delete(deleteNews);// delete a news */

// user routes
routes.route('/users')
    .get(getAllUser)// get all user
    .post(addUser);// add a user

routes.route('/user/:userId')
    .get(getUserById)// get a single user
    .put(updateUser)// update a user
    .delete(deleteUser);// delete a user


module.exports = routes;