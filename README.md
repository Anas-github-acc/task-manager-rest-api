# Task-Manager-Api

## Overview
Task-Manager-Api is a robust and scalable web backend solution built with Node.js, Express, and Mongoose. This API provides a comprehensive suite of features for user management, task operations, and secure authentication, making it an ideal foundation for task management applications.

## Key Features
- User authentication and authorization
- CRUD operations for tasks
- User profile management including avatar uploads
- Email notifications for account actions
- Secure API endpoints with JWT authentication

## Technologies Used
- **Node.js (v14+)**: JavaScript runtime for server-side development
- **Express (v4.17+)**: Web application framework for Node.js
- **Mongoose (v5.12+)**: MongoDB object modeling tool
- **JSON Web Token (jsonwebtoken v8.5+)**: Implementation of JSON Web Tokens for secure authentication
- **Bcrypt (v5.0+)**: Library for hashing passwords
- **Multer (v1.4+)**: Middleware for handling multipart/form-data, used for file uploads
- **Postmark (v2.7+)**: Email delivery service for transactional emails
- **MongoDB (v4.4+)**: NoSQL database for storing user and task data

## Prerequisites
- Node.js (v14 or later)
- MongoDB (v4.4 or later)
- npm (v6 or later)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/task-manager-api.git
   ```
2. Navigate to the project directory:
   ```
   cd task-manager-api
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```
   PORT=3000
   MONGODB_URL=mongodb://localhost:27017/task-manager-api
   JWT_SECRET=your_jwt_secret
   POSTMARK_API_KEY=your_postmark_api_key
   ```
5. Start the server:
   ```
   npm run start
   ```

## API Endpoints

### User Management
- `POST /users`: Create a new user account
- `POST /users/login`: User login
- `POST /users/logout`: User logout (requires authentication)
- `POST /users/logoutAll`: Logout from all devices (requires authentication)
- `GET /users/me`: Retrieve current user profile (requires authentication)
- `PATCH /users/me`: Update user profile (requires authentication)
- `DELETE /users/me`: Delete user account (requires authentication)

### Avatar Operations
- `POST /users/me/avatar`: Upload user avatar (requires authentication)
- `DELETE /users/me/avatar`: Delete user avatar (requires authentication)
- `GET /users/:id/avatar`: Retrieve user avatar by ID

### Task Operations
- `POST /tasks`: Create a new task (requires authentication)
- `GET /tasks`: Retrieve all tasks for the authenticated user (requires authentication)
- `GET /tasks/:id`: Retrieve a specific task by ID (requires authentication)
- `PATCH /tasks/:id`: Update a specific task (requires authentication)
- `DELETE /tasks/:id`: Delete a specific task (requires authentication)

## Authentication
The API uses JSON Web Tokens (JWT) for authentication. Include the JWT in the `Authorization` header of your requests:

```
Authorization: Bearer <your_jwt_token>
```

## Data Models

### User Model
- `name`: String (required)
- `email`: String (required, unique)
- `password`: String (required, min length: 7)
- `age`: Number
- `tokens`: Array of JWT tokens
- `avatar`: Buffer for storing avatar image

### Task Model
- `description`: String (required)
- `completed`: Boolean (default: false)
- `owner`: ObjectId (reference to User model)

## Email Notifications
The API sends transactional emails using Postmark for the following events:
- Welcome email upon account creation
- Cancellation email when a user deletes their account
