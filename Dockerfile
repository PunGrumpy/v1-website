ARG BUN_VERSION=latest

# Stage 1: Dependencies
FROM oven/bun:$BUN_VERSION AS dependencies

LABEL maintainer="pungrumpy"

WORKDIR /home/pungrumpy/app

COPY ./package.json ./bun.lockb ./

RUN bun install --ignore-scripts

# Stage 2: Builder
FROM oven/bun:$BUN_VERSION AS builder

LABEL maintainer="pungrumpy"

WORKDIR /home/pungrumpy/app

COPY --from=dependencies /home/pungrumpy/app/node_modules ./node_modules

COPY . .

RUN bun run build

# Stage 3: Production
FROM oven/bun:$BUN_VERSION AS production

LABEL maintainer="pungrumpy"

ENV NODE_ENV=production

WORKDIR /home/pungrumpy/app

COPY --from=builder /home/pungrumpy/app/node_modules ./node_modules

COPY --from=builder /home/pungrumpy/app/dist ./dist
COPY ./bun.lockb ./

EXPOSE 3000

CMD ["bun", "run", "start"]
