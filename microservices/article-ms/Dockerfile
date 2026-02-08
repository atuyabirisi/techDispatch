FROM node:24-alpine3.21

RUN addgroup ttd && adduser -S -G ttd ttd

USER ttd

WORKDIR /ttd

COPY package*.json ./

RUN npm ci 

COPY . .

EXPOSE 3002

CMD ["npm", "start"]
