const News = require("../../Models/News/NewsModels");
const Category = require("../../Models/category/categoryModels");

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// add a category
const addCategory = async (req, res) => {
    try {
        const category = new Category(req.body);
        await category.save();
        res.json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get a single category news by id
const getNewsByCategoryId = async (req, res) => {
    const { id } = req.params;
    try {
        if (id === 'all') {
            const news = await News.find();
            res.json(news);
        } else {
            const category = await News.find({ category_id: id });
            res.json(category);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
}

module.exports = {
    getAllCategories,
    addCategory,
    getNewsByCategoryId
}