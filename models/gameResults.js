const mongoose = require('mongoose')
const gameResultsSchema = new mongoose.Schema({
    userInfo: {
        type: Object,
        required: true
    },
    gameScore:{
        type:Array,
        required:true
    },
    feedback: {
        type: Array,
        required: true
    }
})
module.exports = mongoose.model("gameResults", gameResultsSchema, 'gameResults')