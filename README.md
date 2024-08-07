# RPSSL

Rock Paper Scissors Spock Lizard structured as a simple monorepo with 2 workspaces:

- [Frontend with `React + TypeScript + Vite` template](./frontend/README.md)
- [backend with `Fastify`](./backend/README.md)

## Running services concurrently in DEV mode

```tsx
npm i
npm run start
```

- backend http://localhost:3000
- frontend http://localhost:8080

## Running services with Docker Compose

- build FE and BE images
- run docker compose

```tsx
docker build ./backend -t rpssl-be -f ./backend/Dockerfile
docker build ./frontend -t rpssl-fe -f ./frontend/Dockerfile
docker compose up -d
```
