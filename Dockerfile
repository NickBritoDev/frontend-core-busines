# Estágio de desenvolvimento
FROM node:18-alpine as development

WORKDIR /usr/app

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# Estágio de desenvolvimento
FROM node:18-alpine as production

WORKDIR /usr/app

COPY package*.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

EXPOSE 3000

CMD ["node", "app.js"]