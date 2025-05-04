README - JuzQuotes
===================

📌 Project: JuzQuotes

📝 Description:
A dynamic web application that allows users to create and manage blog posts (quotes or short blogs) in real-time. Built with Node.js for the server-side and MongoDB for database operations.

Users can:
- Add new blog posts/quotes dynamically.
- Delete any existing post.
- View all quotes in a clean, organized UI.

⚙️ Tech Stack:
- Node.js (Express.js)
- MongoDB (Mongoose)
- HTML/CSS/JavaScript (Frontend)
- EJS (Templating Engine)

🚀 Features:
- RESTful routes for creating and deleting blog posts
- MongoDB integration for persistent storage
- Real-time updates with minimal UI
- Clean and minimalist design

🛠️ Setup Instructions: [COPY]
-----------------------------
1. Clone the repository
   git clone https://github.com/RonaldRommel/JuzQuotes.git

2. Navigate to the project folder
   cd JuzQuotes

3. Install dependencies
   npm install

4. Create a `.env` file and add the following:
   MONGO_URI=your_mongodb_connection_string

5. Run the server
   node app.js

6. Visit the app at
   http://localhost:3000

- GitHub Repo: https://github.com/RonaldRommel/JuzQuotes.git

📂 Folder Structure:
- app.js              → Main server file
- views/              → EJS templates
- public/             → CSS and static assets
- models/             → Mongoose schema for posts
- routes/             → Express route handlers

📌 Future Improvements:
- Add user authentication (login/signup)
- Edit functionality for existing quotes
- Pagination and search

-------------------------
