# Royal Services Backend

Simple Node.js/Express backend for handling contact forms on Royal Services website.

## Features

- Contact form endpoint
- Transfer request form endpoint
- Email notifications using Gmail
- CORS enabled for frontend integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Configure Gmail App Password:
   - Go to Google Account Settings
   - Enable 2-Step Verification
   - Generate App Password for Mail
   - Add to `.env` file

4. Start server:
```bash
npm start
```

## Endpoints

- `GET /health` - Health check
- `POST /api/contact` - Contact form
- `POST /api/transfer` - Transfer request form

## Running with PM2

```bash
pm2 start server.js --name royalservices-backend
pm2 save
```
