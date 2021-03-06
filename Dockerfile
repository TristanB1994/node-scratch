FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If build is for production
# RUN npm ci --only=production

# Bundle app source
COPY . . 

EXPOSE 3000

CMD ["node", "index.js"]
