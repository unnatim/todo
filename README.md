# todo
**ToDo application created using nodejs**
Get all Todos - GET http://localhost:3001/v1/to-do
Create a Todo - POST http://localhost:3001/v1/to-do
Get ToDo by ID - GET http://localhost:3001/v1/to-do/(id)
Edit a Todo - PUT http://localhost:3001/v1/to-do/(id)
Delete a Todo - DELETE http://localhost:3001/v1/to-do/(id)

**Follow the below steps to run the ToDo application using Docker Desktop**
Dockerized Node.js Backend Application
This repository contains source code for a basic to-do CRUD (Create, Read, Update, Delete) based Node.js application. The application source code also contains a Dockerfile to build an image and containerize the application.

**Folder Structure**
├── Dockerfile

├── README.md
├── package-lock.json
├── package.json
└── src
   ├── app.js
   ├── config
   ├── controllers
   ├── index.js
   ├── models
   ├── routes
   └── test

**Dockerfile**
FROM node:14-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
COPY . .
EXPOSE 3001
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]

**Run Application with Docker**
Run the following commands in your terminal to build the image, start a container and test the application.

docker build -t <image-tag> .
docker run -p 3001:3001 <image-tag>
curl http://localhost:3001/v1/to-do
