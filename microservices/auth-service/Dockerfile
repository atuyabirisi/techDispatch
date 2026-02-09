FROM node:24-alpine3.21

WORKDIR /tdd

COPY package*.json .

RUN npm ci --only=production && npm cache clean --force

COPY . .

EXPOSE 3001

CMD ["npm", "start"]