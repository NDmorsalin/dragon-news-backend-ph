const News = require("../../Models/News/NewsModels");


const getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get single news by id
const getNewsById = async (req, res) => {
    try {
        const news = await News.findOne({ _id: req.params.id });
        res.json(news);
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
    }
}

// add news
const addNews = async (req, res) => {

    try {
        const news = new News({
            others_info: req.body.others_info,
            category_id: req.body.category_id,
            rating: req.body.rating,
            total_view: req.body.total_view,
            title: req.body.title,
            author: req.body.author,
            thumbnail_url: req.body.thumbnail_url,
            image_url: req.body.image_url,
            details: req.body.details,

        });
        const newNews = await news.save();
        res.status(201).json(newNews);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllNews,
    getNewsById,
     addNews
}
