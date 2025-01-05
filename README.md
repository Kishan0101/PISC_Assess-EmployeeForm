# Employee Form Management System

A modern **Employee Form Management System** built with **React** for the frontend and **Node.js** with **Express** for the backend. This system allows users to register employee details like first name, last name, email, phone, and address. Duplicate email addresses are prevented during registration, and data is stored in a database using MongoDB.

## Features

- **User-Friendly Form**: A sleek and modern UI with validation for required fields.
- **Unique Email Validation**: Ensures that duplicate emails cannot be registered.
- **Responsive Design**: Works seamlessly across devices, including desktops, tablets, and mobile phones.
- **Real-Time Alerts**: Displays error messages when invalid or duplicate data is submitted.
- **Backend API**: Built with Node.js and Express to handle form submissions and database operations.

## Technologies Used

### Frontend
- **React**: For building the user interface.
- **CSS**: Styled using an attractive, responsive layout.

### Backend
- **Node.js**: For handling API requests and business logic.
- **Express**: Lightweight framework for routing and server-side operations.

### Database
- **MongoDB**: NoSQL database to store employee data.

---

## Installation and Setup

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (or use MongoDB Atlas for cloud)
- A package manager like `npm` or `yarn`

### Clone the Repository
```bash
git clone https://github.com/your-username/employee-form-management.git
cd employee-form-management
```

### Install Dependencies

1. Navigate to the `client` folder and install dependencies:
   ```bash
   cd client
   npm install
   ```

2. Navigate to the `server` folder and install dependencies:
   ```bash
   cd ../server
   npm install
   ```

### Start the Application

1. Start the backend server:
   ```bash
   cd server
   npm start
   ```

2. Start the React frontend:
   ```bash
   cd ../client
   npm start
   ```

---

## Project Structure

```
employee-form-management/
├── client/                # React frontend
│   ├── public/            # Static files
│   ├── src/               # React components
│       ├── App.js         # Main application component
│       ├── App.css        # Application styling
│       ├── api.js         # Axios API functions
├── server/                # Node.js backend
│   ├── routes/            # API routes
│   ├── models/            # MongoDB models
│   ├── server.js          # Main server file
├── README.md              # Project documentation
```

---

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Fill out the form with employee details.
3. Submit the form. The data will be validated and saved to the database.
4. If the email is already registered, an error message will appear.

---

## Screenshots

### Form UI
![Form UI Screenshot]![screenshot-localhost_3000-2025_01_05-23_49_15](https://github.com/user-attachments/assets/051c0d66-06fd-4451-8b2b-5de7083fe7d5)


---

## API Endpoints

### Base URL: `http://localhost:5000`

#### `POST /api/employees`
- **Description**: Saves employee data to the database.
- **Request Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "address": "123 Main St"
  }
  ```
- **Response**:
  - **200**: Employee successfully added.
  - **400**: Validation error (e.g., email already exists).

---

## Contributing

Contributions are welcome! If you'd like to improve this project:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---


