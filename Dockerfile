FROM node:14
WORKDIR /usr/src/app
ENV ENV="production"
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
