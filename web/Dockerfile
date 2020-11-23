FROM node:alpine as build
WORKDIR /var/www
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 make gcc g++
RUN npm install -g --silent react gzipper
COPY ./react/package.json .
COPY ./react/package-lock.json .
RUN npm ci
COPY ./react/src/ /var/www/src/
COPY ./react/index.html .
COPY ./react/assets/ /var/www/assets/
COPY ./react/cnv.js .
COPY ./react/tsconfig.json .
COPY ./react/webpack.config.js .
RUN npm run build

FROM nginx:alpine
COPY --from=build /var/www/build /var/www
COPY --from=build /var/www/assets/ /var/www/assets/
CMD ["nginx", "-g", "daemon off;"]
