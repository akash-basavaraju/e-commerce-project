# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
RUN yarn build
CMD ["node", "server.js"]
EXPOSE 3000