#!/bin/sh
set -e

# Environment defaults
: "${SERVER_NAME:=_}"
: "${BASE_PATH:=/}"

# Sanitize BASE_PATH to start with '/'
case "$BASE_PATH" in
  "") BASE_PATH="/" ;;
  /*) : ;; # ok
  *) BASE_PATH="/$BASE_PATH" ;;
esac

# Generate nginx config based on env
NGINX_CONF=/etc/nginx/conf.d/default.conf
mkdir -p /etc/nginx/conf.d

if [ "$BASE_PATH" = "/" ]; then
    cat >"$NGINX_CONF" <<EOF
server {
    listen 80;
    server_name ${SERVER_NAME};

    root /var/www/out;

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1024;

    location /_next/ {
        access_log off;
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files \$uri =404;
    }

    location / {
        try_files \$uri \$uri.html \$uri/ =404;
    }

    # Optional example when trailingSlash: false and folder structure under /blog
    location /blog/ {
        rewrite ^/blog/(.*)$ /blog/\$1.html break;
    }

    error_page 404 /404.html;
    location = /404.html { internal; }
}
EOF
else
  # When BASE_PATH is not '/', add a redirect from '/' to BASE_PATH
    cat >"$NGINX_CONF" <<EOF
server {
    listen 80;
    server_name ${SERVER_NAME};

    # Redirect domain root to configured base path
    location = / { return 302 \$scheme://\$host${BASE_PATH}; }

    root /var/www/out;

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;
    gzip_min_length 1024;

    # Serve Next assets (absolute paths may still reference /_next)
    location /_next/ {
        access_log off;
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files \$uri =404;
    }

    # Serve static export under the base path
    location ${BASE_PATH} {
        alias /var/www/out/;  # note: trailing slash important with alias
        try_files \$uri \$uri.html \$uri/ =404;
    }

    # Example subpath rewrite under the base path
    location ${BASE_PATH}blog/ {
        rewrite ^${BASE_PATH}blog/(.*)$ ${BASE_PATH}blog/\$1.html break;
    }

    error_page 404 /404.html;
    location = /404.html { internal; }
}
EOF
fi

exec nginx -g 'daemon off;'
