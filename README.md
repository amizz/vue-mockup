# Mockup for VueJS Training

> My kickass Nuxt.js project

## Create app
```
npx create-nuxt-app <project-name>
```

## Dynamic Page
"""
Add _ underscore to page/folder. Refer to pages structure.
"""


## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

# Deployment

1. Install Nginx, Nodejs, PM2

## CentOS

Nginx
```
vi /etc/yum.repos.d/nginx.repo
```
Code:
```
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/mainline/centos/7/$basearch/
gpgcheck=0
enabled=1
```
```
sudo yum update
sudo yum install nginx
sudo systemctl enable nginx
sudo systemctl start nginx
```

Firewall
```
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```

Nodejs
```
curl -sL https://rpm.nodesource.com/setup_10.x | bash -
sudo yum clean all && sudo yum makecache fast
sudo yum install -y gcc-c++ make
sudo yum install -y nodejs
```

SELinux
* If you have error in permission of nginx
```
setsebool -P httpd_can_network_connect 1
```

## Ubuntu
"""
Refer to online
"""

2. Go to directory and run
```
npm i
npm run build
```

3. Start PM2
```
pm2 start server/index.js --name "air"
```

4. Configure domain for nginx. Go to /etc/nginx/conf.d and create new file <domain>.conf
```
server {
    listen       80;
    server_name  <DOMAIN_HERE>;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

5. Reload nginx
```
sudo nginx -s reload
systemctl reload nginx
```