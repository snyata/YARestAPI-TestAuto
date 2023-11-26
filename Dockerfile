#TBC Node Version
FROM node:14

WORKDIR /usr/src/app

# Copy package.json - TBC from Nexus
COPY package*.json ./

RUN npm install

# If building for production, use npm ci --only=production
# RUN npm ci --only=production

COPY . .

#TS -> JS
RUN npm run build

# The application's default port
EXPOSE 8080

# Command to run the application
CMD ["node", "dist/index.js"]
