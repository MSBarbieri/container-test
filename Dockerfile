FROM node:20.17.0

WORKDIR /usr/src/mock-server

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", "dist/src/server.js"]
