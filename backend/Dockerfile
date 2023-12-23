# Use the official Node.js image with a specified version
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install --production

# Copy the application code to the working directory
COPY . .

# Define environment variables, if needed
# ENV NODE_ENV=production

# Start the Node.js application
CMD ["npm", "run", "prod"]
