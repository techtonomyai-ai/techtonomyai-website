FROM node:18-alpine
WORKDIR /app
COPY index.html .
COPY server.js .
CMD ["node", "server.js"]
