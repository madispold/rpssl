# RPSSL

Rock Paper Scissors Spock Lizard structured as a simple monorepo with 2 workspaces:

- [Frontend with `React + TypeScript + Vite` template](./frontend/README.md)
- [backend with `Fastify`](./backend/README.md)

## Running services concurrently in DEV mode

- npm i
- npm run start
- Frontend http://localhost:8080
- Backend http://localhost:3000

## Running services with Docker Compose

```tsx
// Build backend image
cd backend
docker build . -t rpssl-be

// Build frontend image
cd frontend
docker build . -t rpssl-fe

// from root directory
docker compose up -d
```
