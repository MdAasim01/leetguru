<h1 align="center">🧠 Leetguru</h1>
<p align="center">
  A full-stack, gamified problem-solving platform inspired by <strong>LeetCode</strong><br/>
  Built for developers who love to code, learn, and challenge themselves!
</p>

---


## 👨‍💻 About the Creator

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/145275382?v=4" width="120" style="border-radius: 50%" alt="Md Aasim" />
</p>

<p align="center">
  <strong>Md Aasim</strong><br/>
  Full-stack Developer | PHP, WordPress & React Enthusiast <br/>
  Over 4 years of experience building web apps and leading teams.
</p>

<p align="center">
  <a href="https://github.com/MdAasim01"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/></a>
  <a href="https://www.linkedin.com/in/md-aasim/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
  <a href="https://x.com/MdAasim03/"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
  <a href="https://www.youtube.com/aasim"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white"/></a>
</p>

---

### 🧰 Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/WordPress-21759B?style=for-the-badge&logo=wordpress&logoColor=white" />
  <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-339933?style=for-the-badge&logo=mongodb&logoColor=white" />
</p>


---

### 🎉 Fun Fact
> I have built this project within 14 days 💪

---


## 🚀 Project Overview

**Leetguru** is a self-hosted, full-stack platform that allows users to solve coding problems, submit code for evaluation via Judge0, and earn coins for their progress. It brings together the best of LeetCode, playground coding, and profile tracking—**with full admin controls and a gamified experience**.

> ⚙️ Backend, Database, and Judge0 are all hosted on a personal VPS using Docker.

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- ⚛️ React.js + Vite
- 🎨 Tailwind CSS
- 🧠 Zustand (state management)
- 🧩 ShadCN/UI Components
- ✍️ Monaco Editor (code editor)
- 🔔 React Hot Toast (notifications)

### 🔧 Backend
- 🧱 Node.js + Express
- 🐘 PostgreSQL with Prisma ORM
- 🧪 Judge0 (Dockerized, self-hosted)
- 🔐 Role-based authentication (User/Admin)

---

## ✨ Features

### 🧩 Problems
- 🧠 Create & solve coding problems
- 📊 Categorized by **difficulty** (Easy, Medium, Hard)
- 🌐 Multi-language support (e.g., JavaScript, Python)
- 🧪 Custom test cases with live code execution

### 🧠 AI Feedback System
- 🔍 Manually trigger feedback on submissions
- 💰 Costs **3 coins** per use
- ⚠️ Disabled if user doesn’t have enough coins

### 🪙 Gamification
- ✅ Earn **10 coins** for solving a problem
- 🪙 Spend **3 coins** for AI feedback
- ⚙️ Coin checks and toast notifications included

### 📁 Playlists
- 🗂️ Create public or private playlists
- ➕ Add problems to playlists
- 🔒 Admins can share private problems with specific users via playlists

### 🔐 Admin Tools
- 🛠️ Admins can:
  - Create **public or private** problems
  - Share private problems via playlists
  - Manage content visibility
- 🧑‍💻 Admin control is powered via `UserRole` enum in database

### 👤 Profile Management
- 📈 View:
  - Current streak
  - Longest streak
  - Total active days
  - Problems solved
  - Total submissions
  - Acceptance rate
  - GitHub-style contribution graph
- ⚙️ Edit Profile:
  - 🖊️ Name, Bio
  - 🖼️ Upload Avatar
  - 🔗 Add social links (GitHub, LinkedIn, etc.)

---

## 🗃️ Database Models (Prisma)

Includes:
- `User`
- `Problem`
- `Submission`
- `TestCaseResult`
- `ProblemSolved`
- `Playlist`
- `ProblemInPlaylist`
- `PlaylistAccess`

Enums:
- `UserRole`: `USER`, `ADMIN`
- `Difficulty`: `EASY`, `MEDIUM`, `HARD`

---

## 📡 API Endpoints (Highlights)

| Method | Endpoint          | Description                          |
|--------|-------------------|--------------------------------------|
| POST   | `/problems`       | Create a new problem (Admin only)    |
| GET    | `/problems`       | Fetch all public problems            |
| POST   | `/submit`         | Submit code for evaluation           |
| POST   | `/feedback`       | Trigger AI feedback on submission    |
| POST   | `/playlists`      | Create new playlist                  |
| GET    | `/profile`        | Fetch profile stats                  |
| PUT    | `/profile`        | Update profile info, avatar, socials|

---

## 🐳 Deployment & Hosting

- 🌐 Fully self-hosted on **VPS**
- 📦 Judge0, PostgreSQL, and backend run via **Docker**
- 🌱 Dev environment:
  - `npm run dev` (frontend/backend)
  - `.env` files for configuration
  - Postman/Thunder Client for testing APIs

---

## 📸 Screenshots & Demo

<!-- Add screenshots/gifs here when available -->
<!-- Example:
![Home](screenshots/home.png)
![Profile](screenshots/profile.png)
-->

---

## 🤝 Contribution

> 🛑 This is currently a personal project. Open contribution may be limited or private at this stage.

---

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- 🔥 Inspired by [LeetCode](https://leetcode.com/)
- 🧪 Powered by [Judge0](https://judge0.com/)
- 🧠 AI feedback concept inspired by platforms like Codewars & HackerRank

---

<p align="center">🚀 Built with ❤️ by Md Aasim</p>

