# 📝 Todo List Application

A modern, full-stack todo list application built with **Spring Boot** (backend) and **React** (frontend) featuring a clean, responsive UI.

![Todo List App](https://img.shields.io/badge/Spring%20Boot-3.5.4-green)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Material-UI](https://img.shields.io/badge/Material--UI-7.3.1-purple)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 🚀 Live Demo

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080

## ✨ Features

### 🎨 Frontend (React)
- **Modern UI**: Clean Material-UI design with responsive layout
- **Task Management**: Add, edit, delete, and mark tasks as complete
- **Real-time Updates**: Immediate UI updates after API calls
- **Progress Tracking**: Visual completion status in header
- **Toast Notifications**: Success/error feedback for all actions
- **Keyboard Support**: Press Enter to add tasks
- **Mobile Responsive**: Works perfectly on all devices
- **Beautiful Animations**: Smooth transitions and hover effects

### 🔧 Backend (Spring Boot)
- **RESTful API**: Clean REST endpoints for CRUD operations
- **JPA/Hibernate**: Robust data persistence layer
- **H2 Database**: In-memory database for development
- **CORS Enabled**: Cross-origin requests for frontend communication
- **Auto-configuration**: Spring Boot's powerful auto-configuration

## 🏗️ Architecture

```
todolist/
├── src/                    # Spring Boot Backend
│   ├── main/java/
│   │   └── com/todo/todolist/
│   │       ├── controller/ # REST API Controllers
│   │       ├── model/      # Entity Models
│   │       ├── repository/ # Data Access Layer
│   │       └── service/    # Business Logic
│   └── resources/
│       └── static/         # Static Files
└── frontend/               # React Frontend
    ├── src/
    │   ├── App.js         # Main React Component
    │   └── index.css      # Global Styles
    ├── public/
    └── package.json
```

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Java 17** or higher
- **Node.js 16** or higher
- **Maven** (or use the included Maven wrapper)
- **Git** (for cloning the repository)

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todolist.git
cd todolist
```

### 2. Backend Setup (Spring Boot)

#### Option A: Using Maven Wrapper (Recommended)
```bash
# Start the Spring Boot application
./mvnw spring-boot:run
```

#### Option B: Using Maven (if installed globally)
```bash
# Start the Spring Boot application
mvn spring-boot:run
```

The backend will start on **http://localhost:8080**

### 3. Frontend Setup (React)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the React development server
npm start
```

The frontend will start on **http://localhost:3000**

## 🚀 Quick Start (Windows)

For Windows users, you can use the provided startup scripts:

### Using PowerShell
```powershell
.\start-app.ps1
```

### Using Command Prompt
```cmd
start-app.bat
```

These scripts will automatically start both the Spring Boot backend and React frontend in separate windows.

## 📚 API Documentation

### Base URL
```
http://localhost:8080/api
```

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/tasks` | Get all tasks | - |
| `POST` | `/tasks` | Create a new task | `{"title": "Task name", "completed": false}` |
| `PUT` | `/tasks/{id}` | Update a task | `{"title": "Updated task", "completed": true}` |
| `DELETE` | `/tasks/{id}` | Delete a task | - |

### Task Model
```json
{
  "id": 1,
  "title": "Complete project documentation",
  "completed": false
}
```

### Example API Calls

```bash
# Get all tasks
curl http://localhost:8080/api/tasks

# Create a new task
curl -X POST http://localhost:8080/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn React", "completed": false}'

# Update a task
curl -X PUT http://localhost:8080/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn React", "completed": true}'

# Delete a task
curl -X DELETE http://localhost:8080/api/tasks/1
```

## 🛠️ Technologies Used

### Backend
- **Spring Boot 3.5.4** - Main framework
- **Spring Data JPA** - Data persistence
- **H2 Database** - In-memory database
- **Maven** - Build tool and dependency management

### Frontend
- **React 18.3.1** - UI library
- **Material-UI (MUI) 7.3.1** - Component library
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling and animations

## 📱 Screenshots

The application features:
- Clean, modern interface with Material Design
- Responsive layout that works on all devices
- Progress tracking with visual indicators
- Smooth animations and transitions
- Toast notifications for user feedback

## 🔧 Development

### Backend Development
- Uses Spring Boot's auto-configuration
- H2 in-memory database for development
- CORS configured for frontend communication
- RESTful API design principles

### Frontend Development
- React hooks for state management
- Material-UI for consistent design
- Axios for HTTP requests
- Responsive design with CSS Grid and Flexbox

## 🚀 Deployment

### Backend Deployment
1. Build the JAR file:
```bash
./mvnw clean package
```

2. Run the JAR:
```bash
java -jar target/todolist-0.0.1-SNAPSHOT.jar
```

### Frontend Deployment
1. Build for production:
```bash
cd frontend
npm run build
```

2. Serve the `build` folder with any static file server (nginx, Apache, etc.)

## 🐛 Troubleshooting

### Common Issues

1. **Port 8080 already in use**
   ```bash
   # Find and kill the process using port 8080
   netstat -ano | findstr :8080
   taskkill /PID <PID> /F
   ```

2. **Port 3000 already in use**
   ```bash
   # Find and kill the process using port 3000
   netstat -ano | findstr :3000
   taskkill /PID <PID> /F
   ```

3. **Node modules not found**
   ```bash
   cd frontend
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Maven dependencies issues**
   ```bash
   ./mvnw clean install
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Khizer Jahangir Khan**
- GitHub: [@khizer-flow](https://github.com/khizer-flow)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/khizerjahangir2001)

## 🙏 Acknowledgments

- Spring Boot team for the amazing framework
- React team for the powerful UI library
- Material-UI team for the beautiful components
- All contributors and supporters

---

⭐ **Star this repository if you found it helpful!**
