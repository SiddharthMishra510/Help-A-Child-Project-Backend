# Help A Child - Backend 🌟

This is the **backend** for the *Help A Child* project, a platform to **track and support underprivileged children** by viewing their aspirations, interests, and donation needs. Users can **donate to children in need**, while admins have additional management privileges.

👉 The frontend repository can be found here: [Help-A-Child-Frontend](https://github.com/SiddharthMishra510/Help-A-Child-Project-Frontend).

## 🚀 Features

✅ API to fetch **list of children** along with their donation requirements  
✅ **Donate** to support a child’s future  
✅ **Admin-only**: Add and remove children  
✅ **JWT-based authentication** for secure access for admin

## 🛠 Tech Stack

- **Backend**: NestJS (Node.js framework)
- **Database**: PostgreSQL (with Drizzle ORM)
- **Authentication**: JWT (JSON Web Tokens)

## 🔧 Setup & Installation

### 1️⃣ Clone the repository
```sh
git clone https://github.com/[YOUR_USERNAME]/Help-A-Child-Project-Backend.git
cd help-a-child-backend
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the root directory and configure the required variables:
```env
DB_NAME=nestdb
DB_HOST=localhost
DB_USER=nestuser
DB_PORT=5432
DB_PASSWORD=nestpassword
```

### 5️⃣ Start the backend server
```sh
npm run start
```
This runs the app on **port 3000**. Feel free to update it in package.json.

## 🎯 API Endpoints Overview

| Method | Endpoint             | Description                    | Access    |
|--------|----------------------|--------------------------------|-----------|
| GET    | `/children`          | Get list of children          | Public    |
| GET    | `/children/:id`      | Get details of a child        | Public    |
| PUT    | `/children/:id`      | Update child details          | Public     |
| DELETE | `/children/:id`      | Delete a child                | Admin     |
| POST   | `/auth/login`        | Login and get JWT token       | Public    |

## 🎯 Contributing

Contributions are welcome! Feel free to open **issues** and **pull requests**.

---

