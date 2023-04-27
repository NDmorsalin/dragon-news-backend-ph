const { getAllCategories, addCategory } = require('../controller/category/categoryController');

const routes = require('express').Router();




// category routes
routes.route('/categories')
    .get(getAllCategories)// get all categories
    .post(addCategory);// add a category

module.exports = routes;