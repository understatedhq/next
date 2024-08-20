# Next.js

## Development

```
npm install
npm run dev
```

## Data

### Postgres

Start Postgres with Docker:

```
docker run -d \
  --name postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=password \
  -e POSTGRES_DB=postgres \
  -p 5432:5432 \
  postgres
```

Create a `.env` file with the following content:

```
DATABASE_URL=postgresql://postgres:password@localhost:5432/postgres
```
