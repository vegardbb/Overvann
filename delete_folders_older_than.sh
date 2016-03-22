#!/bin/bash

NUM_DAYS_BACK="$1"

find ./backup* -maxdepth 0 -type d -ctime +$NUM_DAYS_BACK -exec rm -rf {} +