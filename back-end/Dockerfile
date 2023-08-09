FROM node:18.16.0-alpine3.17 AS dev
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon
CMD [ "npm","run", "dev"]

# Tuotanto
FROM node:14 AS production

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .

CMD ["npm", "start"]
