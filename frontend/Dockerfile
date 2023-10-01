# Create image based off of the official Node 10 image
FROM node:latest as builder

# Copy dependency definitions
COPY package.json package-lock.json ./

## installing and Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm ci && mkdir /app && mv ./node_modules ./app
RUN npm install -g @angular/cli
RUN npm install
# RUN mkdir /app && mv ./node_modules ./app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Get all the code needed to run the app
COPY . /app/

# Build server side bundles
# RUN npm run build:ssr

FROM node:latest
## From 'builder' copy published folder
COPY --from=builder /app /app

WORKDIR /app
# Expose the port the app runs in
EXPOSE 4200

# USER node

# CMD ["node", "dist/frontend/server/main.js"]
CMD ["tail", "-f", "/dev/null"]
# CMD ["ng","serve","--host","0.0.0.0"]