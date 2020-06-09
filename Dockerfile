ARG FONTAWESOME_NPM_AUTH_TOKEN

###############
# Build Stage #
###############
FROM node:12.16-alpine as build-stage
ARG FONTAWESOME_NPM_AUTH_TOKEN

RUN npm config set "@fortawesome:registry" https://npm.fontawesome.com/ && \
    npm config set "//npm.fontawesome.com/:_authToken" ${FONTAWESOME_NPM_AUTH_TOKEN}

WORKDIR /app

# Install dependencies
ENV NODE_ENV=development
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

# Build static site
ENV NODE_ENV=production
COPY . .
RUN yarn run build

####################
# Production Stage #
####################
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80

HEALTHCHECK --retries=5 \
    --interval=2s \
    --timeout=5s \
    CMD curl -s --fail http://localhost:80 | grep 'Backstage Technical Services' || exit 1

CMD ["nginx", "-g", "daemon off;"]
