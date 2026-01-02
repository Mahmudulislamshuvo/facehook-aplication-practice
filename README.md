# Facehook

[<video src="./public/Recording.mp4" width="100%" controls></video>](https://github.com/user-attachments/assets/6c26fb63-8d39-43f6-a9f5-6ea87386f088)
[ভিডিওটি দেখতে এখানে ক্লিক করুন](./public/Recording.mp4)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## Introduction

Facehook is a modern social media feed application built to provide a seamless user experience. It features a fully functional post feed with CRUD (Create, Read, Update, Delete) capabilities, user authentication, profile management, and interactive features like comments and likes. The application leverages a React-based frontend optimized with Vite and a custom Node.js/Express backend using JSON Server for rapid data handling.

## Tech Stack

| Component    | Technologies                                                |
| :----------- | :---------------------------------------------------------- |
| **Frontend** | React, Vite, Tailwind CSS, Axios, Context API, React Router |
| **Backend**  | Node.js, Express, JSON Server, JSON Server Auth, Multer     |

## Key Features

- **User Authentication:** Secure Login and Registration with token-based auth (JWT) and refresh token support.
- **Dynamic Feed:** Real-time display of user posts.
- **Create & Manage Posts:** Users can create new posts, edit existing ones, and delete them.
- **Rich Interactions:** Like and comment on posts to engage with the community.
- **Profile Management:** comprehensive user profiles with editable bio and avatar upload.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS.

## Project Structure

```bash
Facehook/
├── backend-server/       # Backend API (Node.js/Express)
│   ├── controller/       # Request handlers
│   ├── database/         # JSON database (db.json)
│   ├── middleware/       # Auth and validation middleware
│   ├── router/           # API routes
│   └── main.js           # Server entry point
├── src/                  # Frontend Source (React)
│   ├── actions/          # Action creators for Reducers
│   ├── api/              # Axios instance configuration
│   ├── components/       # Reusable UI components
│   │   ├── post/         # Post-related components
│   │   └── profile/      # Profile-related components
│   ├── context/          # React Context providers
│   ├── hooks/            # Custom hooks (useAuth, useAxios, etc.)
│   ├── pages/            # App pages (Home, Login, Profile)
│   └── reducers/         # State reducers
└── ...
```

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** or **yarn**

### Environment Variables

You need to configure environment variables for the frontend to communicate with the backend.

1.  Create a `.env` file in the root directory.
2.  Add the following line:

```env
VITE_SERVER_BASE_URL=http://localhost:3000
```

### Installation & Running

To ensure the application works correctly, **start the backend server first**.

#### Step 1: Start the Backend

1.  Navigate to the server directory:
    ```bash
    cd backend-server
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm run dev
    ```
    _The server will start at `http://localhost:3000`._

#### Step 2: Start the Frontend

1.  Open a new terminal and navigate to the project root:
    ```bash
    cd ..
    # (Ensure you are in the 'Facehook' root folder)
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    _The application will open in your browser (usually at `http://localhost:5173`)._

## API Reference

The application uses a custom backend running on port `3000`.

- **Base URL:** `http://localhost:3000`
- **Key Endpoints:**
  - `POST /auth/login` - User Login
  - `POST /auth/register` - User Registration
  - `GET /posts` - Fetch all posts
  - `GET /profile/:id` - Get user profile
