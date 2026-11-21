# syntax=docker/dockerfile:1

# ---------- Base ----------
FROM node:24-slim AS base
ENV PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH \
    NEXT_TELEMETRY_DISABLED=1 \
    HUSKY=0
RUN npm install -g pnpm@12.11.2
WORKDIR /app

# ---------- Dependencies ----------
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# ---------- Build ----------
FROM base AS builder
# Values read at build time (pages are prerendered, NEXT_PUBLIC_* is inlined).
ARG BASE_URL=https://sparshit.com
ARG NEXT_PUBLIC_SITE_URL=https://sparshit.com
ENV BASE_URL=$BASE_URL \
    NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# ---------- Runtime ----------
FROM node:24-slim AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN groupadd --system --gid 1001 nodejs \
 && useradd --system --uid 1001 --gid nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

# Mail settings (MAIL_HOST, MAIL_PORT, MAIL_USERNAME, MAIL_PASSWORD,
# MAIL_FROM_ADDRESS, MAIL_FROM_NAME, MAIL_TO_ADDRESS, MAIL_FROM_CAREER)
# are read at runtime: pass them with `docker run --env-file .env`.
CMD ["node", "server.js"]
