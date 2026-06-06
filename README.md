# 🚨 Threat Alert Dashboard

[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.100+-green.svg)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![JWT](https://img.shields.io/badge/JWT-Authentication-orange.svg)](https://jwt.io/)
[![SQLite](https://img.shields.io/badge/SQLite-Database-lightgrey.svg)](https://www.sqlite.org/)

## 📋 Overview

A **full-stack threat alert management system** for cybersecurity monitoring. This application provides real-time threat detection and alert management with secure authentication.

🔗 Links
GitHub: Aikaksh-Singh-Routela/threat-alert-dashboard

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

text

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
Frontend Setup
bash
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
Example API Request
bash
# Login
curl -X POST http://localhost:8000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"secret"}'

# Get alerts (with JWT token)
curl -X GET http://localhost:8000/alerts \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
📁 Project Structure
text
threat-alert-dashboard/
├── threat_alert_api/          # FastAPI backend
│   ├── main.py                # Application entry point
│   ├── database.py            # SQLite database setup
│   ├── models.py              # Pydantic models
│   ├── auth.py                # JWT authentication
│   └── requirements.txt       # Python dependencies
├── threat_alert_dashboard/    # React frontend
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── App.js             # Main application
│   │   └── index.js           # Entry point
│   └── package.json           # Node dependencies
└── README.md                  # Documentation
🚀 Deployment
Deploy Backend to Render
bash
# Create render.yaml or connect GitHub repo to Render
# Set environment variables:
# - SECRET_KEY: your_jwt_secret_key
Deploy Frontend to Vercel
bash
npm run build
vercel --prod
📊 Sample Dashboard
The dashboard displays:

Total Alerts: All alerts in the system

Suspicious Alerts: High-risk threats

Normal Alerts: Routine events

Alert Percentage: Ratio of suspicious to total alerts

🔒 Environment Variables
Variable	Description
SECRET_KEY	JWT signing key (required)
DATABASE_URL	SQLite database path (optional)
🤝 Contributing
Feel free to submit issues and pull requests.

📄 License
MIT License

Author: Aikaksh Singh Routela

Built with ⚡, 🐍, and ⚛️ by Aikaksh Singh Routela
| Minimal setup | ✅ Complete installation guide |
| No API docs | ✅ Detailed API endpoints |
| No project structure | ✅ Clear folder hierarchy |
| Basic README | ✅ Professional documentation |
