FROM node:16-slim

# Create app directory
WORKDIR /usr/src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./package*.json ./
RUN npm install

# Bundle app source
COPY . ./
