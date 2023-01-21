const express = require('express');
const router = express.Router();
const Upload = require('../middleware/upload');
const authverifytoken = require('../middleware/authveriftoken');
const profileController = require('../controller/profileController');


router.get('/search',profileController.unsearch);
router.get('/liked/:username',authverifytoken,profileController.likedtweets);
router.get('/mynotifs',authverifytoken,profileController.mynotifs);
router.get('/:username',authverifytoken,profileController.viewprofile);


router.patch('/readnotif/:notifId',authverifytoken,profileController.readnotif);
router.put('/follow/:username',authverifytoken,profileController.follow);
router.put('/editprofile',authverifytoken,profileController.editprofile);





module.exports = router;