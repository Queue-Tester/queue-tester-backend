FROM node:20-alpine as builder

ENV NODE_ENV build

WORKDIR /usr/src

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build \
    && npm prune --omit=dev


FROM node:20-alpine

ENV NODE_ENV production

WORKDIR /usr/src

COPY --from=builder /usr/src/package*.json ./
COPY --from=builder /usr/src/node_modules/ ./node_modules/
COPY --from=builder /usr/src/dist/ ./dist/

CMD ["node", "dist/main.js"]