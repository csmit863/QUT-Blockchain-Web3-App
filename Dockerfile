FROM node:20

# Enable Corepack for Yarn
RUN corepack enable

# Set the working directory in the container
WORKDIR /app

# Copy everything into the container (including all workspaces)
COPY . .

# Install dependencies across all workspaces
RUN yarn install

# Expose the port your app will run on (optional)
EXPOSE 3000

# Start the app
CMD ["yarn", "start"]
