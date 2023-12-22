# Use the official Node.js image as a base image
FROM node:14

# Create a directory to hold the application code inside the image
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the app directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Expose the port on which the app runs
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
