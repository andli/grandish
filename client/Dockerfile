FROM node:lts-alpine

# install simple http server for serving static content
#RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./
COPY yarn.lock ./
COPY vue.config.js ./


# install project dependencies
RUN yarn install
RUN yarn global add @vue/cli

# copy project files and folders to the current working directory (i.e. 'app' folder)
#COPY . .
# build app for production with minification
#RUN yarn run build

ENTRYPOINT [ "yarn", "serve" ]