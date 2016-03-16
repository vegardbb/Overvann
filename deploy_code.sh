#!/bin/bash

OVASE_DIR=~/ovase_web
WIKI_DIR=/var/www/html/wiki
BACKUP_ROOT=~/deploy_backups
BACKUP_DIR="${BACKUP_ROOT}/backup_$(date +%Y%m%d_%H%M%S)"

DEP_WIKI=false
DEP_OVASE=false

if [ "$1" = "wiki" ]; then
	DEP_WIKI=true
fi

if [ "$1" = "ovase" ]; then
	DEP_OVASE=true
fi

if [ "$2" = "wiki" ]; then
	DEP_WIKI=true
fi

if [ "$2" = "ovase" ]; then
	DEP_OVASE=true
fi

echo "- Deploy ovase? $DEP_OVASE , Deploy wiki? $DEP_WIKI -"


# Stop apache and the node-service
echo "========== Stopping web servers =========="
if [ "$DEP_WIKI" = true ]; then
	sudo service httpd stop
fi

if [ "$DEP_OVASE" = true ]; then
	sudo service ovase_yp stop
fi

# Sets extended pattern matching options in the bash shell
shopt -s extglob

# Do backups
echo "========== Creating backups into '~/deploy_backups' =========="
mkdir $BACKUP_DIR
if [ "$DEP_WIKI" = true ]; then
	cp -rf $WIKI_DIR $BACKUP_DIR
fi

if [ "$DEP_OVASE" = true ]; then
	cp -rf $OVASE_DIR $BACKUP_DIR
fi

# Copy files to ovase_web (the portion of the site which is not the wiki)
echo "========== Copying ovase files =========="
if [ "$DEP_OVASE" = true ]; then
	cp -rf !(wiki|configuration|deploy_code.sh|install_app_service.sh) $OVASE_DIR
fi

# Copy files to /var/www/html (the wiki-portion of the site)
echo "========== Copying wiki files =========="
if [ "$DEP_WIKI" = true ]; then
	cd wiki
	cp -rf !(images|cache) $WIKI_DIR
fi

# Disable extended pattern matching
shopt -u extglob

# Start apache and the node-service again
echo "========== Restarting web servers =========="
if [ "$DEP_WIKI" = true ]; then
	sudo service httpd start
fi

if [ "$DEP_OVASE" = true ]; then
	sudo service ovase_yp start
fi

echo "========== Deployment (attempt) completed! =========="
