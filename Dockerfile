# ─── Builder ─────────────────────────────────────────
FROM oven/bun:alpine AS builder
WORKDIR /app

# Copy lockfile & manifest first for caching
COPY bun.lock package.json ./

# Install deps (including any “serve” if you list it as a dependency)
RUN bun install

# Copy the rest of your code and build
COPY . .
RUN bunx --bun vite build

# ─── Runtime ─────────────────────────────────────────
FROM oven/bun:alpine AS runner
WORKDIR /app

# Only bring in production artifacts
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Drop to Bun’s unprivileged user
USER bun

EXPOSE 3000
# Use Bun to serve your static build (you can also swap in nginx if you prefer)
CMD ["bun", "run", "serve", "-s", "dist"]

