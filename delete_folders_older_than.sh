#!/bin/bash

# This script is intended to be placed in a separate folder
# namely the BACKUP_ROOT seen in deploy_code.sh.
# It is used to delete folders older than N days
# Usage: ./delete_folders_older_than.sh 5
# to delete folders older than 5 days, that start with backup*
# The default value is 14 days

[ -z "$1" ] && NUM_DAYS_BACK=14
NUM_DAYS_BACK="$1"

find ./backup* -maxdepth 0 -type d -ctime +$NUM_DAYS_BACK -exec rm -rf {} +
