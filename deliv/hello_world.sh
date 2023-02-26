#! /data/data/com.termux/files/usr/bin/bash

year=$(date +"%y")
month=$(date +"%b")
time=$(date +"%H:%M")
fileName=$(date +"%d.%m.%y")".txt"
path=~/storage/delivery/$year/$month

echo "enter address"
read addr

if [[ $addr == "total" ]]; then
	cat $path/$fileName | wc -l
elif [[ $addr == "print" ]]; then
	cat $path/$fileName
else
	mkdir -p $path 
	echo $addr"> "$time >> $path/$fileName
	echo "done"
fi
