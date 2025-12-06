# Deployment Instructions for Royal Services Backend

## 1. Push to GitHub

Already done - just need to pull on server.

## 2. On Server - Pull Changes

```bash
cd /var/www/royalservices.me
sudo chown -R deploy:deploy /var/www/royalservices.me
git pull origin main
```

## 3. Install Backend Dependencies

```bash
cd /var/www/royalservices.me/backend
npm install
```

## 4. Setup Gmail App Password

1. Go to https://myaccount.google.com/
2. Security → 2-Step Verification (enable it)
3. Security → App passwords
4. Create new app password for "Mail"
5. Copy the 16-character password

## 5. Create .env File

```bash
cd /var/www/royalservices.me/backend
cp .env.example .env
nano .env
```

Edit and add your Gmail app password:

```
PORT=3003
EMAIL_USER=royalservicesme@gmail.com
EMAIL_PASS=your_16_char_app_password_here
```

## 6. Update Nginx Configuration

Add this to your royalservices.conf (inside both HTTPS server blocks):

```nginx
    # Backend API proxy
    location /api/ {
        proxy_pass http://localhost:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
```

Test and reload Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## 7. Start Backend with PM2

```bash
cd /var/www/royalservices.me/backend
pm2 start server.js --name royalservices-backend
pm2 save
```

## 8. Test

Visit: https://royalservices.me/
Fill out contact form and check if email arrives!

## Troubleshooting

Check backend logs:

```bash
pm2 logs royalservices-backend
```

Check if backend is running:

```bash
curl http://localhost:3003/health
```

Restart backend:

```bash
pm2 restart royalservices-backend
```
