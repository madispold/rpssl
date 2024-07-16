# RPSSL backend

## Simple Fastify service

- using Nodemon and ts-node for development

## Routes

- GET `/choice` randomly returns a choice
- GET `/choices` returns all available choices
- GET `/random` returns a random number `1...5`
- POST `/play` to play a round with computer

## Setup

### Running locally

- npm i

#### DEV mode

- npm run dev
- served at http://127.0.0.1:3000

#### PRODUCTION mode

- cd backend
- npm run build
- npm run start
- served at http://127.0.0.1:3000
