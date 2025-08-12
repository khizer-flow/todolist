Write-Host "Starting Todo List Application..." -ForegroundColor Green
Write-Host ""

Write-Host "Starting Spring Boot Backend..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "mvnw spring-boot:run" -WindowStyle Normal

Write-Host "Waiting for backend to start..." -ForegroundColor Cyan
Start-Sleep -Seconds 10

Write-Host "Starting React Frontend..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd frontend; npm start" -WindowStyle Normal

Write-Host ""
Write-Host "Application is starting..." -ForegroundColor Green
Write-Host "Backend: http://localhost:8080" -ForegroundColor White
Write-Host "Frontend: http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "Press any key to close this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
