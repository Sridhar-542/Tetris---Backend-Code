const express = require('express')
const router = express.Router()
const gameResultsSchema = require('../models/gameResults')

router.post('/gameResponse', async (req, res) => {
    console.log(req.body)
    const demographicInfo = req.body.info;
    const feedbackInfo = req.body.feedback;
    const gameScore = req.body.gameScore;
    const gameResults = new gameResultsSchema({
        userInfo: demographicInfo,
             gameScore: gameScore,
             feedback: feedbackInfo,
    })
    try {
        const response = await gameResults.save()
        res.status(200).json({ data: response, success: true })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router