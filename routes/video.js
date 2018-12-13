const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const VideoModel = require('../models/video');
const passport = require('passport');

// Get All
router.get('/', (req, res) => {
    VideoModel.find({}, (err, videos) => {
        // TODO: Handle Error
        if(err) {
            throw err;
        }

        res.status(200).json({ videos });
    });
});

// Search by title
router.get("/search/:videoTitle", (req, res) => {
    const title = req.params.videoTitle;

    const searchRegex = new RegExp(`^${title}`, 'i');

    VideoModel.find({ title: searchRegex }, (err, videos) => {
        if(err) {
            throw err;
        }

        res.status(200).json({ videos });
    });
});

router.post('/reserve/:videoId', (req, res) => {
    const videoId = req.params.videoId;

    VideoModel.findOneAndUpdate({ _id: videoId }, { available: false}, (err, video) => {
        if(err) {
            throw err;
        }

        res.status(200).send({ video, success: "Video has been reserved."})
    });
});

// Add 
router.post('/add', (req, res) => {
    const video = new VideoModel(req.body.video);

    video.save(err => {
        if(err) {
            throw err;
        }

        res.status(200).send({ success: "Video has been added. "});
    })
});

// Update
router.put('/edit/:videoId', (req, res) => {
    const videoId = req.params.videoId;

    const video = req.body.video;

    VideoModel.findOneAndUpdate({ _id: videoId }, video, (err, video) => {
        if(err) {
            throw err;
        }

        res.status(200).json({ video, success: "Video has been updated." });
    });
});

router.delete('/:videoId',  (req, res) => {
    const videoId = req.params.videoId;

    VideoModel.findOneAndDelete({ _id: videoId}, (err, _) => {
        if(err) {
            throw err;
        }

        res.status(200).send({ success: "Video has been deleted." });
    })
});

module.exports = router;