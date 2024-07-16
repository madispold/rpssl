# RPSSL frontend

## React + TypeScript + Vite template

- using [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) for HMR
- `Eslint` for linting
- `Prettier` for formatting
- [Tailwind](https://tailwindcss.com/) for styling, global styles in `index.css`
- [Clsx](https://www.npmjs.com/package/clsx) for `className` strings
- Images from https://www.svgrepo.com/
- Icons from https://reactsvgicons.com/

## Setup

### Running locally

- npm i

#### DEV mode:

- NB! Make sure backend is running or replace localhost with hosted service in `.env.development.local`

* npm run dev
* open http://localhost:8080/

#### PRODUCTION build preview:

- create a .env file with the following content in `/frontend` directory:

```tsx
VITE_API_URL=http://localhost:3000

# Make sure backend service is running or replace with the following
# VITE_API_URL=https://codechallenge.boohma.com
```

- npm run build
- npm run preview
- open http://localhost:8080/

### Running a Containerized PRODUCTION build locally

- cd frontend
- create a .env file with the following content in `/frontend` directory:

```tsx
VITE_API_URL=http://localhost:3000

# Make sure backend service is running or replace with the following
# VITE_API_URL=https://codechallenge.boohma.com
```

- docker build . -t dockerized-rpssl
- docker run -d -p 8080:8080 dockerized-rpssl
