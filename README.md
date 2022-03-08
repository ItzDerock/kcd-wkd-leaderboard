# KCD Wild Kingdom Day Leaderboard
> GitHub repository for https://wkd.derock.dev/ - for those finding this in your feed, KCD = a school

## How it works
Frontend is made in React and Typescript. It will pull data from the backend API.

The backend is made in Typescript with Fastify. The server pulls data from google using the [Google Sheets API](https://developers.google.com/sheets/api/). 
It will then cache the data in a Redis database for 5 minutes. 

All of this is behind a nginx reverse proxy.

## Using it for your own Google Sheet
In `backend/src/index.ts`, change lines 23-27 to use your cells and row titles.

## Installation / Local Usage
Prereq: a redis server
1. Clone this repo.
2. cd into frontend, then run `npm install --include-dev`
3. cd into backend, and do the same.
4. Copy .env.example to .env and fill it out.
5. Start the frontend with `npm run start`
6. Start the backend with `npm run dev`
7. Head over to `locahost:3000` and enjoy!

## Production deployment
1. Run `npm build` in frontend and backend.
2. Move the build folder in frontend and backend to your server.
3. In backend, run `node .` or use [pm2](https://pm2.keymetrics.io/), systemd, etc
4. Move build folder of frontend to some static webhosting or a directory and use nginx/apache(ew) to serve. 
Example nginx config:
```
    root /var/www/wkd.derock.dev;

    location ~ ^/api {
        proxy_pass http://localhost:8000;
    }

    location / {
        try_files $uri $uri/ index.html;
    }
```
