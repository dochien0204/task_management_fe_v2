FROM node:16.18 as builder

# set up directory for the app
WORKDIR /frontend

# copy package.sjon
COPY ./package.json /frontend

# run install dependencies
RUN yarn

# copy all source code
COPY . .

RUN yarn build

# Handle Nginx
FROM nginx:alpine
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
