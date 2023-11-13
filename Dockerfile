FROM nginx:latest
COPY . /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]