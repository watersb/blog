find . -path ./.git -prune -o -type f -print0 | xargs -0 chmod 400
find . -path ./.git -prune -o -type d -print0 | xargs -0 chmod 500

chown -R root meta/_nginx
chown -R root css/_scrapbook

chown -R nginx *.html *.ico *.png *.txt .htaccess
chown -R nginx 2018 css img js meta
