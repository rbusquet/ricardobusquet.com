FROM node:lts
# ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
EXPOSE 3000
RUN chown -R node /app
USER node
CMD ["npm", "run", "dev"]
