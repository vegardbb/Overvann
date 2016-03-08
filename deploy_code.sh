#!/bin/bash

OVASE_DIR=~/ovase_web
WIKI_DIR=/var/www/html/wiki
BACKUP_ROOT=~/deploy_backups
BACKUP_DIR="${BACKUP_ROOT}/backup_$(date +%Y%m%d_%H%M%S)"


# Stop apache and the node-service
echo "========== Stopping web servers =========="
sudo service httpd stop
sudo service ovase_yp stop

# Sets extended pattern matching options in the bash shell
shopt -s extglob

# Do backups
echo "========== Creating backups into '~/deploy_backups' =========="
mkdir $BACKUP_DIR
cp -rf $OVASE_DIR $BACKUP_DIR
cp -rf $WIKI_DIR $BACKUP_DIR

# Copy files to ovase_web (the portion of the site which is not the wiki)
echo "========== Copying ovase files =========="
cp -rf !(wiki|deploy_code.sh|install_app_service.sh) $OVASE_DIR

# Copy files to /var/www/html (the wiki-portion of the site)
echo "========== Copying wiki files =========="
cd wiki
cp -rf !(images|cache) $WIKI_DIR

# Disable extended pattern matching
shopt -u extglob

# Start apache and the node-service again
echo "========== Restarting web servers =========="
sudo service httpd start
sudo service ovase_yp start

echo "========== Deployment (attempt) completed! =========="
