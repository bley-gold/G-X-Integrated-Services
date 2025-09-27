# 🔧 Troubleshooting 502 Bad Gateway

## Common Causes & Solutions

### 1. **Backend Not Running**
```bash
# Check if backend is running
curl http://localhost:3001/health

# If not running, start it
./start.sh
# or
npm start
```

### 2. **Port Issues**
```bash
# Check what's running on port 3001
lsof -i :3001

# Kill any conflicting processes
sudo kill -9 $(lsof -ti:3001)
```

### 3. **Nginx Configuration**
```bash
# Test nginx configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx

# Check nginx status
sudo systemctl status nginx
```

### 4. **Firewall Issues**
```bash
# Check if port 3001 is open
sudo ufw status

# Open port 3001 if needed
sudo ufw allow 3001
```

### 5. **Process Management**
```bash
# Using PM2 (recommended)
npm run pm2:start
npm run pm2:logs

# Check PM2 status
pm2 status
pm2 monit
```

## Quick Diagnostics

### Check Backend Health
```bash
# Local health check
curl -v http://localhost:3001/health

# External health check (if accessible)
curl -v http://your-domain.com/health
```

### Check Logs
```bash
# Application logs
tail -f logs/combined.log

# PM2 logs
pm2 logs gx-services-backend

# Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Test Email Endpoint
```bash
# Test contact form endpoint
curl -X POST http://localhost:3001/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

## Environment Check

### Required Environment Variables
- `PORT=3001`
- `NODE_ENV=production`
- `SMTP_HOST=smtp.zoho.com`
- `SMTP_USER=admin@gxservices.co.za`
- `SMTP_PASS=H3xgaNSqcqK2`
- `EMAIL_TO=simamkelem@gxservices.co.za,support@gxservices.co.za`

### System Requirements
- Node.js 16+ installed
- npm or yarn package manager
- Sufficient memory (at least 512MB available)
- Port 3001 available

## Step-by-Step Fix

1. **Stop all processes**:
   ```bash
   ./stop.sh
   ```

2. **Start fresh**:
   ```bash
   ./start.sh
   ```

3. **Check health**:
   ```bash
   curl http://localhost:3001/health
   ```

4. **Test nginx proxy**:
   ```bash
   curl http://your-domain.com/health
   ```

5. **Monitor logs**:
   ```bash
   tail -f logs/combined.log
   ```

If issues persist, check the specific error messages in the logs for more detailed troubleshooting.