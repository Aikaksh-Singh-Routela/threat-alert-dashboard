# 🚨 Threat Alert Dashboard

[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green.svg)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-orange.svg)](https://jwt.io/)
[![SQLite](https://img.shields.io/badge/SQLite-Database-lightgrey.svg)](https://www.sqlite.org/)

## 📋 Overview

A **full-stack threat alert management system** for cybersecurity monitoring. This application provides real-time threat detection and alert management with secure authentication.

### Key Features

| Feature | Description |
|---------|-------------|
| **🔐 JWT Authentication** | Secure user registration and login |
| **📊 Real-time Dashboard** | Live threat statistics and metrics |
| **⚠️ Alert Management** | Create, view, and delete security alerts |
| **📈 Statistics Cards** | Total, suspicious, normal alerts with percentage |
| **📱 Responsive Design** | Works on desktop, tablet, and mobile |

## 🏗️ Architecture

┌─────────────────────────────────────────────────────────────┐
│ USER BROWSER │
│ (React Frontend) │
└─────────────────────┬───────────────────────────────────────┘
↓
┌─────────────────────────────────────────────────────────────┐
│ FASTAPI BACKEND │
│ (REST API Server) │
│ ┌──────────────┼──────────────┐ │
│ ↓ ↓ ↓ │
│ JWT Auth Alert CRUD Statistics │
└─────────────────────────────────────────────────────────────┘
↓
┌─────────────────────────────────────────────────────────────┐
│ SQLITE DATABASE │
│ (User & Alert Storage) │
└─────────────────────────────────────────────────────────────┘


## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React, Axios, CSS3 |
| **Backend** | FastAPI (Python) |
| **Authentication** | JWT (JSON Web Tokens) |
| **Database** | SQLite |
| **API Documentation** | Swagger/OpenAPI (auto-generated) |

## 📦 Installation

### Backend Setup

```bash
# Clone repository
git clone https://github.com/Aikaksh-Singh-Routela/threat-alert-dashboard.git
cd threat-alert-dashboard/threat_alert_api

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# or
.\venv\Scripts\activate  # Windows

# Install dependencies
pip install -r requirements.txt

# Run the server
python main.py

cd ../threat_alert_dashboard
npm install
npm start

🔌 API Endpoints
Method	Endpoint	Description
POST	/register	Create new user account
POST	/login	Authenticate and receive JWT token
GET	/alerts	Get all alerts for authenticated user
POST	/alerts	Create new alert
DELETE	/alerts/{id}	Delete specific alert
GET	/stats	Get alert statistics

# Login
curl -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"secret"}'

# Get alerts (with JWT token)
curl -X GET http://localhost:8000/alerts \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
