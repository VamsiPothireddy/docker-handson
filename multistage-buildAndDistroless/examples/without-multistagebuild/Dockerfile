FROM node:20 AS build-env
COPY . /app
WORKDIR /app

RUN npm ci --omit=dev
CMD ["app.js"]