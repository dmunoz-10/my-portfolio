FROM node:latest

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

RUN npm install -g gatsby-cli

CMD ["gatsby", "develop", "-H", "0.0.0.0"]
