# Job Application Portal

A simple **RESTful API** and web interface for job posting and applying, built with **Node.js**, **Express**, **MongoDB**, and **Cloudinary** for resume uploads.

## Features

* User Authentication (JWT-based)
* Job posting & listing
* Candidate job applications
* Resume upload via Cloudinary
* Simple and clean UI with EJS templates

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JWT (JSON Web Tokens)
* **File Uploads:** Multer + Cloudinary
* **Templating Engine:** EJS

## Folder Structure

```
job-application-portal/
├─ README.md
├─ package.json
├─ .env.sample
├─ server.js
├─ config/
│  └─ db.js
├─ controllers/
│  └─ jobcontroller.js
├─ models/
│  ├─ User.js
│  ├─ Job.js
│  └─ Application.js
├─ routes/
│  └─ jobRoute.js
├─ middleware/
│  └─ authMiddleware.js
├─ utility/
│  └─ multer.js
└─ views/
   ├─ jobs.ejs
   └─ jobpost.ejs
```

## Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/username/job-application-portal.git
cd job-application-portal
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root folder:

```env
LOCAL_HOST=5000
JWT_SECRET='your_jwt_secret'
CLOUD_NAME='your_cloudinary_name'
CLOUD_API_KEY='your_cloudinary_api_key'
CLOUD_API_SECRET='your_cloudinary_api_secret'
MONGO_URI='your_mongodb_connection_string'
```

4. Run the server:

```bash
npm start
```

The application should now be running on `http://localhost:5000`.

## API Endpoints

### Authentication

* **POST** `/register` - Register a new user
* **POST** `/login` - Login and receive JWT token (cookie)

### Jobs

* **GET** `/jobs` - List all available jobs
* **GET** `/jobs/jobpost` - Render job posting form (protected)
* **POST** `/jobs/jobpost` - Create a new job (protected)
* **POST** `/jobs/apply/:id` - Apply to a job with resume upload (protected)


