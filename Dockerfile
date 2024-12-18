# Use the official Node.js image.
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Expose port 3000
EXPOSE 3001

# Build the app
RUN npm run build

# Run the web service on container startup.
CMD [ "npm", "run", "dev" ]