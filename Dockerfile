# Use a smaller, Alpine-based Node.js image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Expose the DNS port (53) to be accessible from outside the container
EXPOSE 53/udp

# Define the command to run your application
CMD ["node", "index.js"]
