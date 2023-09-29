FROM node:18.17.1 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .

ENV TSC_COMPILE_ON_ERROR true
ENV ESLINT_NO_DEV_ERRORS true
RUN npm run build
EXPOSE 5173
CMD ["npm", "run", "dev"]
