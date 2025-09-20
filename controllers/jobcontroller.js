const job = require('../models/jobs'); 
const Application = require('../models/application')

exports.jobpost = async (req, res) => {
    try {
        const { title, company, location, description } = req.body;
        await job.create({ title, company, location, description });
        res.redirect('/jobs');
    } catch (err) {
        res.render('jobpost', { error: 'Server error' });
    }
};

exports.list = async (req, res) => {
    try {
        const jobs = await job.find().sort({ createdAt: -1 });
        res.render('job', { jobs });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching jobs');
    }
};

exports.applyJob = async (req, res) => {
    try {
        const jobId = req.params.id;
        const { name, email } = req.body;
        const resume = req.file ? req.file.filename : null;

        if (!resume) return res.status(400).send('Resume is required');

        await Application.create({ job: jobId, name, email, resume });
        res.send('Application submitted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error applying for job');
    }
};

