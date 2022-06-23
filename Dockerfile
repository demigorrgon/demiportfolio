FROM demigorrgon/demiportfolio-frontend as builder

FROM nginx:alpine
WORKDIR /usr/share/nginx/html/portfolio
RUN rm -rf ./*
COPY --from=builder /app/portfolio/dist .

WORKDIR /usr/share/nginx/html/ijra
RUN rm -rf ./*
COPY --from=builder /app/ijra/dist .

WORKDIR /usr/share/nginx/html/el_shopperino
RUN rm -rf ./*
COPY --from=builder /app/el_shopperino/dist .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
