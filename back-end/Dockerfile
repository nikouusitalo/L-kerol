FROM node:18.16.0-alpine3.17 AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
COPY . .
CMD [ "npm","run", "dev"]

# Tuotanto
FROM node:18.16.0-alpine3.17 AS prod

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
RUN npm build
CMD ["npm", "start"]
