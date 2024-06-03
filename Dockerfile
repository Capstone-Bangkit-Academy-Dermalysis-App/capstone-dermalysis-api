FROM node:20
WORKDIR /app
ENV PORT 8080
ENV HOST 0.0.0.0
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "start"]