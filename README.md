# midterm

Student Information System
This is a RESTful API for managing student information. It allows you to perform CRUD operations (Create, Read, Update, Delete) on a student database.

Prerequisites
Before running this project, make sure you have the following prerequisites installed:
-Node.js
-MongoD

Installation
-Clone this repository to your local machine.
-Install the project dependencies by running the following command in the project : npm install

Configuration
-Rename the .env.example file to .env.
-Update the MongoDB connection string in the .env file to match your MongoDB setup.

Usage
To start the server, run the following command: npm start
The server will start running on http://localhost:3000.

API Routes
-GET /students: Fetch all students.
-GET /students/:id: Fetch a single student by ID.
-POST /students: Add a new student.
-PUT /students/:id: Update a student by ID.
-DELETE /students/:id: Delete a student by ID.

Testing
-You can test the API routes using a tool like Postman or any API testing tool of your choice.
-Make requests to the respective routes mentioned above to perform CRUD operations on the student database.

Acknowledgments
-Node.js
-Express.js
-MongoDB
-Mongoose
