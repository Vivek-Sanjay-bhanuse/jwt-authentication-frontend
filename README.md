# React Authentication Frontend

This frontend is built using **React (Vite)** and communicates with the Spring Boot backend to provide **User Login, Registration, and Profile pages**.

## Tech Stack

* React
* Vite
* Axios
* React Router

---

# Pages

## Login Page

* User enters email and password
* JWT token is stored in localStorage after successful login

## Register Page

* User creates a new account

## Profile Page

* Displays logged-in user's name and email

---

# Application Flow

1. User registers using the Register page
2. User logs in with email and password
3. Backend returns a JWT token
4. Token is stored in localStorage
5. Token is sent in Authorization header to access profile

---

# Setup Instructions

## 1. Navigate to frontend folder

```
cd frontend
```

## 2. Install dependencies

```
npm install
```

## 3. Run the application

```
npm run dev
```

Frontend will run at

```
http://localhost:5173
```

---

# Backend Connection

The frontend communicates with backend APIs:

```
http://localhost:8080/api
```

---

# Features

* User Registration
* Login Authentication
* JWT Token Storage
* Protected Profile Page
* Logout Functionality
