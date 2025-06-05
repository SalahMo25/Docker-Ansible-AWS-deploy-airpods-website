
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY ./src ./src
COPY ./public ./public
COPY ./tailwind.config.js ./

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# write value into .env.production
RUN echo "REACT_APP_API_URL=$REACT_APP_API_URL" > /app/.env.production


RUN npm run build







FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
