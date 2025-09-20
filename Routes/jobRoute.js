const express = require('express');
const router = express.Router();
const jobcontroller = require('../controllers/jobcontroller');
const upload=require('../utility/multer')
const auth = require('../middleware/authMiddelware')

router.get('/', jobcontroller.list);

router.get('/jobpost',auth, (req, res) => {
    res.render('jobpost');
});

router.post('/jobpost',auth, jobcontroller.jobpost);

router.post('/apply/:id',auth, upload.single('resume'), jobcontroller.applyJob)

module.exports = router;
