FROM node:10-alpine

WORKDIR /main
COPY ./server/websocket.js /main
COPY ./package.json /main
COPY ./package-lock.json /main

RUN npm install

EXPOSE 4007

CMD ["node", "websocket.js"]