### README for MelodyVerse

---

# MelodyVerse

MelodyVerse is a full-stack web application that provides a platform for users to sign up, log in, and view posts. It includes features such as JWT authentication, password reset functionality, and email verification. The backend is built with Node.js and Express.js, and the frontend is built with React.js.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)

## Features

- User Signup
- User Login
- JWT Authentication
- Password Reset Functionality
- Email Verification
- Infinite Scroll for Posts
- Responsive Design with Tailwind CSS
- Rate Limiting for API Requests
- Unit Tests for API Endpoints

## Technology Stack

- **Backend**: Node.js, Express.js, MongoDB (with Mongoose)
- **Frontend**: React.js, Axios, React Router, Tailwind CSS
- **Authentication**: JSON Web Tokens (JWT)
- **Testing**: Jest, Supertest

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Backend Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd melodyverse-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory with the following environment variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```sh
   npm start
   ```

5. Run unit tests:
   ```sh
   npm test
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd melodyverse-frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend server:
   ```sh
   npm start
   ```

## Running the Application

1. **Backend**: Ensure the backend server is running by navigating to the `melodyverse-backend` directory and running:
   ```sh
   npm start
   ```

2. **Frontend**: Ensure the frontend server is running by navigating to the `melodyverse-frontend` directory and running:
   ```sh
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Authentication Routes

- **POST /api/signup**
  - Registers a new user and returns a JWT token.

- **POST /api/login**
  - Authenticates a user and returns a JWT token.

### Password Reset Routes

- **POST /api/request-reset-password**
  - Generates a password reset token and simulates sending an email.

- **POST /api/reset-password**
  - Resets the user's password using the token.

### Email Verification Routes

- **POST /api/request-email-verification**
  - Generates an email verification token and simulates sending an email.

- **POST /api/verify-email**
  - Verifies the user's email using the token.

### Post Routes

- **GET /api/posts**
  - Fetches posts with pagination. Requires JWT authentication.

## Folder Structure

```
melodyverse-backend/
│
├── models/
│   ├── User.js
│   ├── Post.js
│   └── PasswordResetToken.js
│   └── EmailVerificationToken.js
│
├── routes/
│   ├── auth.js
│   ├── posts.js
│   ├── passwordReset.js
│   └── emailVerification.js
│
├── middleware/
│   ├── auth.js
│   └── rateLimiter.js
│
├── tests/
│   ├── auth.test.js
│   └── posts.test.js
│
├── index.js
├── .env
└── package.json
```

```
melodyverse-frontend/
│
├── src/
│   ├── components/
│   │   ├── Signup.js
│   │   ├── PostList.js
│   │   ├── RequestPasswordReset.js
│   │   ├── ResetPassword.js
│   │   ├── RequestEmailVerification.js
│   │   └── VerifyEmail.js
│   │
│   ├── App.js
│   └── index.js
│
├── public/
├── .env
└── package.json
```

## Future Improvements

1. **Social Login**: Implement social login options using mock APIs and React libraries.
2. **Animations**: Use animations or microinteractions with React libraries like Framer Motion.
3. **Accessibility**: Include accessibility features like alt text and keyboard navigation using ARIA attributes and focus management.
4. **Security**: Implement additional security measures like XSS protection and SQL injection prevention.
5. **Rate Limiting**: Implement more sophisticated rate limiting mechanisms.


