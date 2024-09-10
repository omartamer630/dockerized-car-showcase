FROM node:18 AS build

WORKDIR /app

COPY . ./

RUN npm install && npm run build

FROM node:18-alpine 

WORKDIR /app

COPY --from=build /app ./

EXPOSE 3000
CMD [ "npm","run","start" ]
