@echo off
echo Starting Todo List Application...
echo.

echo Starting Spring Boot Backend...
start "Spring Boot Backend" cmd /k "mvnw spring-boot:run"

echo Waiting for backend to start...
timeout /t 10 /nobreak > nul

echo Starting React Frontend...
start "React Frontend" cmd /k "cd frontend && npm start"

echo.
echo Application is starting...
echo Backend: http://localhost:8080
echo Frontend: http://localhost:3000
echo.
echo Press any key to close this window...
pause > nul
