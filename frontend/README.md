# RPSSL frontend

## React + TypeScript + Vite template

- using [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) for HMR
- `Eslint` for linting
- `Prettier` for formatting
- [Tailwind](https://tailwindcss.com/) for styling, global styles in `index.css`
- [Clsx](https://www.npmjs.com/package/clsx) for `className` strings
- Images from https://www.svgrepo.com/

## Setup

### Running locally

- cd frontend
- npm i
- create a .env file with the following content in `/frontend` directory:

```tsx
VITE_API_URL=https://codechallenge.boohma.com
```

- npm run dev
