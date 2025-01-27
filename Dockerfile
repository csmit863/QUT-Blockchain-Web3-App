# Use an official Node.js runtime as a parent image
FROM node:20

# Enable Corepack (which manages Yarn versions)
RUN corepack enable

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock first (to leverage Docker cache)
COPY package.json yarn.lock ./

# Install the app dependencies using the correct Yarn version
RUN yarn install

# Copy the rest of the application
COPY . .

# Expose the port that the app will run on (3000)
EXPOSE 3000
