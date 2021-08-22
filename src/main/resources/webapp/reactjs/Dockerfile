FROM node:12.4.0-alpine as build
EXPOSE 3000
WORKDIR /reactjs
ENV PATH /reactjs/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
COPY . ./
RUN npm install --silent
RUN npm install react-scripts@0.1.0 -g --silent
RUN npm install axios
RUN npm install react-bootstrap
RUN npm install
CMD ["npm", "start","public/index/html"]