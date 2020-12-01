
# base image
FROM node:12.4-alpine

RUN mkdir -p /src/app

# set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /src/app
RUN npm install

EXPOSE 80
# start app
CMD ["npm", "start"]
