# Microservices Architecture

## Project Overview

This project demonstrates a simple microservices architecture consisting of four components:
1. **API Service:** Handles API requests and interacts with the database.
2. **Frontend:** A React application displaying data retrieved from the API.
3. **Database:** Stores data accessed by the API service.
4. **Centralized Auth Service:** Verifies JWT tokens and user authentication.

## Technology Stack

- **API Service:** Node.js (Express)
- **Frontend:** React
- **Auth Service:** Node.js (Express)
- **Database:** PostgreSQL
- **Containerization:** Docker
- **CI/CD Pipeline:** GitHub Actions

## Project Structure

```plaintext
microservices-architecture/
├── api-service/
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
```plaintext
├── frontend/
│   ├── Dockerfile
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── serviceWorker.js
│   ├── package.json
│   └── .env
├── auth-service/
│   ├── Dockerfile
│   ├── index.js
│   └── package.json
├── database/
│   └── init.sql
├── docker-compose.yml
└── .github/
    └── workflows/
        └── ci-cd.yml
└── README.md
