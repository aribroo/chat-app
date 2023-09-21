# Simple Chat Application

This is a simple chat application built using Node.js, Express, MongoDB, React, and Socket.io. The application allows users to communicate in real-time through text messages.

## Features

- User registration with name, email, and password.
- Logging in with registered accounts.
- List of user contacts.
- Real-time chat with other users.
- Contact management (add, remove).
- Deletable chat messages.
- Real-time notifications for new messages.

## Technologies Used

- **Node.js**: Used for running the server and application logic.
- **Express**: Node.js framework for handling routes and middleware.
- **MongoDB**: NoSQL database for storing user information and chat messages.
- **React**: JavaScript library for building the user interface.
- **Socket.io**: Library for real-time communication between the server and clients.

## Installation

1. Clone this repository to your computer:

   ```bash
   git clone https://github.com/aribroo/chat-app
   ```

2. Change to directory:

   ```bash
   cd chat-app
   ```
   
3. Install all dependencies:

   ```bash
   cd client
   npm install
   or
   yarn install
   ```
   ```bash
   cd server
   npm install
   or
   yarn install
   ```

4. Configure MongoDB:
   
    Create a MongoDB database and adjust the connection URL in server/apps/database.js.

5. Start the server
```bash
npm start
or
yarn start
```
6. Start the client
```bash
npm dev
or
yarn dev
```

The application will run at http://localhost:5173/
   


