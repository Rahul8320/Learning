# The base image
FROM node:20-alpine AS base
# Set the working directory
WORKDIR /usr/src/app
# copy the package json and package-lock.json
COPY package*.json ./
# Install the dependencies
RUN npm install

# for development
FROM base AS development
# Copy the rest of files
COPY . .
# Set expose port
EXPOSE 3000
# set the startup command
CMD ["npm", "run", "dev"]

#for production
FROM base AS production
COPY . .
RUN npm prune --production
# Set the startup command
CMD ["npm","run", "start"]

