# Use an official Node.js runtime as a parent image
FROM node:18

# Enable Corepack (which manages Yarn versions)
RUN corepack enable

# Set the working directory in the container
WORKDIR /app

# Copy the package.json
#COPY package.json ./

# Copy the packages/nextjs directory into the container
#COPY packages/nextjs ./packages/nextjs
COPY . .
# Install the app dependencies using the correct Yarn version
RUN yarn install

# Expose the port that the app will run on (3000)
CMD ["yarn", "start", "-H", "0.0.0.0"]
