FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./

COPY .env ./

COPY . .

RUN npm install

COPY package-lock.json ./

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/main.js" ]
