FROM node:lts-slim AS base

# Create app directory
WORKDIR /app

# Files required by npm install
COPY package*.json .

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Type check app
RUN npm run typecheck

FROM base AS runner

# Bundle app source
COPY . .

# Install only production app dependencies
RUN npm ci --only=production

USER node

# Start the app
EXPOSE 80
CMD ["npm", "run", "start"]