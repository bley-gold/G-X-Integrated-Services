#!/bin/bash

# GX Services Backend Startup Script

echo "🚀 Starting GX Services Backend..."

# Create logs directory
mkdir -p logs

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install --production
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    cp .env.example .env
    echo "📝 Please edit .env file with your configuration"
fi

# Kill any existing process on port 3001
echo "🔍 Checking for existing processes on port 3001..."
PID=$(lsof -ti:3001)
if [ ! -z "$PID" ]; then
    echo "🛑 Killing existing process on port 3001 (PID: $PID)"
    kill -9 $PID
    sleep 2
fi

# Start with PM2 if available, otherwise use node directly
if command -v pm2 &> /dev/null; then
    echo "🚀 Starting with PM2..."
    pm2 start ecosystem.config.js
    pm2 save
    echo "✅ Backend started with PM2"
    echo "📊 View logs: pm2 logs gx-services-backend"
    echo "🔄 Restart: pm2 restart gx-services-backend"
    echo "🛑 Stop: pm2 stop gx-services-backend"
else
    echo "🚀 Starting with Node.js directly..."
    nohup node server.js > logs/app.log 2>&1 &
    echo $! > logs/app.pid
    echo "✅ Backend started with PID: $(cat logs/app.pid)"
    echo "📊 View logs: tail -f logs/app.log"
fi

# Wait a moment and check if the server is running
sleep 3
if curl -f http://localhost:3001/health > /dev/null 2>&1; then
    echo "✅ Backend is running successfully!"
    echo "🌐 Health check: http://localhost:3001/health"
    echo "📧 Contact endpoint: http://localhost:3001/send-email"
else
    echo "❌ Backend failed to start or is not responding"
    echo "📊 Check logs for errors"
    exit 1
fi