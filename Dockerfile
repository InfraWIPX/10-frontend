FROM node:8.9.4

WORKDIR /node-app
ADD . /node-app

RUN cd /node-app && npm install && npm run build

EXPOSE 3000

CMD ["npm", "start"]