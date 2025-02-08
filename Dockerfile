FROM node:22.12-alpine3.21
WORKDIR /app
COPY ./package*.json /app
RUN npm i
COPY . .
EXPOSE 5173
CMD ["npm","run","dev"]