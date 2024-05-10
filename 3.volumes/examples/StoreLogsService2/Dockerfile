# Use Node.js Alpine as the base image
FROM node:alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application files to the working directory
COPY . .

# Expose the port that the application listens on
EXPOSE 3000

# Command to run the Node.js application
CMD ["node", "app.js"]
