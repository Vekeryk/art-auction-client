# Dockerfile for React frontend
FROM node:22-alpine as build

WORKDIR /usr/src/app

COPY ./package.json .
COPY ./yarn.lock .
RUN yarn install

COPY . ./
RUN yarn build

RUN ls -la /usr/src/app/dist

FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
