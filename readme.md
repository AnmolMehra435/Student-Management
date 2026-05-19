# Student Management System (MERN Stack)

A full-stack Student Management System built using the MERN stack with production-style deployment workflows, Docker containerization, CI/CD automation, and cloud hosting.

Live Demo: https://studentmanagement963.qzz.io/

---

#  Features

## Authentication & Authorization

* JWT-based authentication
* Role-based authorization
* Secure password hashing using bcrypt

## Student Management

* Create student records
* View all students
* Update student details
* Delete students
* Search students dynamically

## User Experience

* Protected routes
* Logout functionality
* Responsive frontend
* Role-specific dashboards

---

#  Roles

## Admin

* Create Students
* View All Students
* Edit Student Data
* Search Students
* Delete Students

## Student

* View Personal Student Data

---

# Tech Stack

## Frontend

* React.js
* React Router DOM
* Axios
* Vite

## Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt
* dotenv
* CORS
* Mongoose

## Database

* MongoDB Atlas

## DevOps & Deployment

* Docker
* Docker Compose
* GitHub Actions (CI/CD)
* AWS EC2
* NGINX Reverse Proxy
* Linux
* Cloudflare SSL/HTTPS

---

#  DevOps & Deployment Workflow

This project follows a production-style deployment workflow:

* Containerized frontend and backend using Docker
* Multi-container setup managed through Docker Compose
* Automated CI/CD pipeline using GitHub Actions
* Deployed on AWS EC2 Linux VM
* Configured NGINX as a reverse proxy
* Enabled HTTPS using Cloudflare SSL
* Automated deployment on every push to the main branch

### CI/CD Flow

```text
Code Push → GitHub Actions → CI Checks → SSH into EC2 → Docker Rebuild → Deployment
```

---

#  Database Schema

## User Schema

```js
{
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    required: true,
    enum: ['Admin', 'Student']
  }
}
```

## Student Schema

```js
{
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  age: {
    type: Number,
    required: true
  },

  marks: Number,

  course: {
    type: String,
    enum: ['MCA', 'BCA', 'Btech']
  }
}
```

---

#  Docker Setup

## Run Using Docker Compose

```bash
docker compose up --build
```

---

#  Environment Variables

Example `.env` configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

---

#  What I Learned From This Project

* Full Stack MERN Development
* REST API Design
* Authentication & Authorization
* Docker & Containerization
* CI/CD Pipeline Automation
* AWS EC2 Deployment
* NGINX Reverse Proxy Configuration
* HTTPS & Cloudflare SSL
* Linux Server Management

---

#  Future Improvements

* Backend testing using Jest & Supertest
* Monitoring & logging
* Redis caching
* WebSocket integration
* Role-based analytics dashboard
* Kubernetes deployment exploration

---

#  Author

Anmol Mehra

* LinkedIn: https://www.linkedin.com/in/anmolmehra435
