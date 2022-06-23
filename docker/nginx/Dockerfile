FROM node:lts-alpine as builder

WORKDIR /app/portfolio
COPY frontend/portfolio_frontend/package*.json ./
RUN npm install
COPY frontend/portfolio_frontend/ .
RUN npm run build

WORKDIR /app/el_shopperino
COPY frontend/el_shopperino_frontend/package*.json ./
RUN npm install
COPY frontend/el_shopperino_frontend/ .
RUN npm run build
# CMD ["npm", "run", "serve"]
# EXPOSE 8080


WORKDIR /app/ijra
COPY frontend/frontend-ijra/package*.json ./
RUN npm install
COPY frontend/frontend-ijra/ .
RUN npm run build

# FROM nginx:alpine
# WORKDIR /usr/share/nginx/html/portfolio
# RUN rm -rf ./*
# COPY --from=builder /app/portfolio/dist .


# WORKDIR /usr/share/nginx/html/ijra
# RUN rm -rf ./*
# COPY --from=builder /app/ijra/dist .

# WORKDIR /usr/share/nginx/html/el_shopperino
# RUN rm -rf ./*
# COPY --from=builder /app/el_shopperino/dist .
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]