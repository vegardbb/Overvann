#!/bin/bash

NUM_DAYS_BACK="$1"

find ./* -type d -ctime +$NUM_DAYS_BACK -exec rm -rf {} +