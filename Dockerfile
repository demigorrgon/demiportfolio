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

RUN mkdir /usr/share/nginx/html/twitter
RUN chown root:root -R /usr/share/nginx/html/twitter/

RUN mkdir /usr/share/nginx/html/images
RUN chown root:root -R /usr/share/nginx/html/images/
CMD ["nginx", "-g", "daemon off;"]
