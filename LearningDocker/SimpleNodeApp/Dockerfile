# The base image
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# copy the package json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of files
COPY . .

# Clean up to reduce image size
RUN npm cache clean --force && \
    rm -rf /var/lib/apt/lists/* && \
    rm -rf /tmp/*

# Set expose port
EXPOSE 3000

# Set the startup command
CMD ["node", "server.js"]

