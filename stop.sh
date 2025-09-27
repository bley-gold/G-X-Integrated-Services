#!/bin/bash

# GX Services Backend Stop Script

echo "🛑 Stopping GX Services Backend..."

# Stop PM2 process if running
if command -v pm2 &> /dev/null; then
    if pm2 list | grep -q "gx-services-backend"; then
        echo "🛑 Stopping PM2 process..."
        pm2 stop gx-services-backend
        pm2 delete gx-services-backend
        echo "✅ PM2 process stopped"
    fi
fi

# Kill process by PID file
if [ -f "logs/app.pid" ]; then
    PID=$(cat logs/app.pid)
    if ps -p $PID > /dev/null; then
        echo "🛑 Stopping process PID: $PID"
        kill -TERM $PID
        sleep 2
        if ps -p $PID > /dev/null; then
            kill -9 $PID
        fi
        rm logs/app.pid
        echo "✅ Process stopped"
    else
        echo "⚠️  Process not running"
        rm logs/app.pid
    fi
fi

# Kill any remaining processes on port 3001
PID=$(lsof -ti:3001)
if [ ! -z "$PID" ]; then
    echo "🛑 Killing remaining process on port 3001 (PID: $PID)"
    kill -9 $PID
fi

echo "✅ Backend stopped successfully"