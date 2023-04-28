const { Schema, model } = require('mongoose');

const newsSchema = new Schema({
    others_info: {
        is_todays_pick: Boolean,
        is_trending: Boolean,
    },
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    rating: {
        number: {
            type: Number,
            default: 0
        },
        badge: {
            type: String,
            default: 'Excellent',
            enum: ['Excellent', 'Good', 'Average', 'Poor', 'Very Poor']
        }
    },
    total_view: {
        type: Number,
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        name: {
            type: String,
            required: true,
        },
        published_date: {
            type: Date,
            default: Date.now,
        },
        img: {
            type: String,
            required: true,
        },
    },
    thumbnail_url: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },

})

const News = model('News', newsSchema);

module.exports = News;