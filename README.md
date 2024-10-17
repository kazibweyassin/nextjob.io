# Remote Jobs Platform

A web application built using the MERN (MongoDB, Express, React, Node.js) stack, designed to allow users to post jobs and apply for remote job opportunities. This platform simplifies the process of finding and listing remote work, offering a user-friendly interface for both job seekers and employers.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Job Posting:** Employers can post job listings for remote positions.
- **Job Applications:** Job seekers can browse and apply for remote jobs.
- **User Authentication:** Secure user registration and login.
- **Admin Dashboard:** Manage job postings, applications, and users.
- **Responsive Design:** Optimized for mobile and desktop views.

## Technologies Used
- **Frontend:** React.js, HTML, CSS, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT (JSON Web Tokens)
- **Cloud Hosting:** Deployed on [Your Deployment Platform]
- **Version Control:** Git & GitHub

## Installation

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Steps

1. **Fork and Clone the Repository:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/REPO-NAME.git
   cd REPO-NAME
   ```

2. **Install Dependencies for Both Client and Server:**
   In the root directory, run:
   ```bash
   npm install
   cd client
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root and add the following:
   ```bash
   MONGO_URI=<your-mongo-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. **Start the Development Servers:**
   In the root directory, run:
   ```bash
   npm run dev
   ```

   This will start both the client and server.

5. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000` for the client and `http://localhost:5000` for the API server.

## Usage

- **For Job Seekers:** Sign up, browse job listings, and apply to remote jobs.
- **For Employers:** Register, create job postings, and manage applications.

## Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions, feel free to contact the project maintainer:

- **Yassin Chanua Kazibwe**
- Email: kazibweusama@example.com
