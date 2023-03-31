FROM node:18

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm install

EXPOSE 3000

ENV CHARACTER_REQUEST=https://rickandmortyapi.com/api/character
ENV PAGE_REQUEST=https://rickandmortyapi.com/api/character?page=

CMD [ "npm", "run", "dev" ]
