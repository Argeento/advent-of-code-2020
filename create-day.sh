#!/bin/bash

DAY_NUMBER="$1"

mkdir "day-$1"
touch "day-$1/part-1.ts"
touch "day-$1/part-2.ts"
touch "day-$1/input.txt"

echo "$DAY_NUMBER"
