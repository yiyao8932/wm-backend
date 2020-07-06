## Instructions

### Local Development
This project requires PostgreSQL 12.x

Install it here: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

Next, create a new .env file

```
touch .env
```
In the .env file, include these key and values

DATABASE_URL="postgres://{user}:{password}@{hostname}:{port}/{database-name}"

PORT="YOUR PORT NUMBER"

Next, run these commands to get local environment up and running: 
```
npm i
npm run serve
```

### Production build/serve

```
# Production build
npm run build
# Start in production mode
npm run start
```