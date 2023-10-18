FROM node:18-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
EXPOSE 5000

# for development
FROM base AS development
COPY . .
CMD ["npm", "run", "dev"]


# for production
FROM base AS production
COPY . .
RUN npm purne --production
CMD ["npm", "run", "start"]


