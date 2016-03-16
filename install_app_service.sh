#!/bin/bash

INSTALL_DIR=~/ovase_web

# Sets extended pattern matching options in the bash shell
shopt -s extglob

echo "========== Copying to directory if it does not exist =========="
if [ ! -d $INSTALL_DIR ]
then
	echo "Directory does not exist, copying..."
	# Copy files to ovase_web (the portion of the site which is not the wiki)
	mkdir $INSTALL_DIR
	cp -rf !(wiki|deploy_code.sh|install_app_service.sh) $INSTALL_DIR
fi

echo "========== Installing web app as 'ovase_yp' =========="
cd $INSTALL_DIR
sudo forever-service install ovase_yp -e "PATH=/usr/local/bin:$PATH"

shopt -u extglob

