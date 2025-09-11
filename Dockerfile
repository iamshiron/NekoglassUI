############################
# Stage 1: Build static site
############################
FROM oven/bun:1 AS builder

WORKDIR /app

# Install system deps if any (none required for Next export typically)

# Copy dependency manifests first to leverage Docker layer caching
COPY package.json bun.lock* ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Build the Next.js project (static export configured via next.config.ts -> output: 'export')
RUN bun run build

# The exported static site will be at /app/out

############################
# Stage 2: NGINX static host
############################
FROM nginx:1.27-alpine AS runner

# Copy exported site
COPY --from=builder /app/out /var/www/out

# Copy entrypoint which generates nginx.conf from env
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Ensure correct permissions (optional, nginx runs as non-root user in some images)
RUN chown -R nginx:nginx /var/www/out || true

EXPOSE 80

ENTRYPOINT ["/docker-entrypoint.sh"]


