FROM node:24-bookworm-slim

WORKDIR /ttd

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173  

CMD ["npm", "run", "dev"]
