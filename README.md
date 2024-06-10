# MyNotebook - Full Stack Notes Management Website


## Overview

MyNotebook is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to manage their personal notes efficiently. Users can create, read, update, and delete notes seamlessly.

## Features

- User authentication and authorization
- Create, read, update, and delete notes
- Responsive design for mobile and desktop
- Secure data storage using MongoDB
- Intuitive and user-friendly interface

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** Bootstrap, CSS

## Screenshots
![Notes](https://github.com/jeevank280/MyNotebook/assets/62411773/26fe3eb8-a17f-4483-abb0-27f160289de2)
<br>

![createAccout](https://github.com/jeevank280/MyNotebook/assets/62411773/25dc3403-a668-4bee-a07d-c7528fd84c91)

![Login](https://github.com/jeevank280/MyNotebook/assets/62411773/d96871e2-f6d1-4a44-8fcc-44070303141c)


## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/jeevank280/MyNotebook.git
    cd MyNotebook
    ```

2. **Install dependencies for both frontend and backend:**

    ```bash
    # Install backend dependencies
    cd backend
    npm install

    # Install frontend dependencies [Go back to parent directory]
    cd ../
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following:

    ```env
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret
    ```


4. **Run the application:**

    ```bash
    # Run backend server
    cd backend
    npm start

    # Run frontend server  [Go back to parent directory]
    cd ../
    npm start
    ```

    The backend server will start on `http://localhost:5000` and the frontend server will start on `http://localhost:3000`.

## Usage

1. Register a new account or log in with an existing account.
2. Create, edit, or delete notes as needed.
3. Log out when done.

## API Endpoints

### Auth

- `POST /api/auth/createuser` - Register a new user
- `POST /api/auth/login` - Authenticate user and get token

### Notes

- `GET /api/notes/fetchallnotes` - Get all notes
- `POST /api/notes/addnote` - Create a new note
- `PUT /api/notes/updatenote/:id` - Update a note
- `DELETE /api/notes/deletenote/:id` - Delete a note



