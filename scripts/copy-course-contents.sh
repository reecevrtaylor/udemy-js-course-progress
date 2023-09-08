#!/bin/bash

# Define source and target directories
source_dir="$HOME/personal/learning/udemy/complete-javascript-course"
target_dir="$HOME/personal/learning/udemy-js-course-progress"

# Loop through all directories in the source directory starting from 11
# By adding 2>/dev/null, any error messages generated by the ls command will be sent to /dev/null, essentially hiding them.
# $source_dir/1[0-9]-*/ - I started manually copying files up until 10, so I'm starting from 11 for this script :)
for dir in $(ls -d $source_dir/1[0-9]-*/ $source_dir/[2-9][0-9]-*/ 2>/dev/null); do
    # Extract the prefix number (e.g., 11, 12, ...)
    prefix_number=$(basename $dir | cut -d '-' -f 1)

    # Define the source starter directory
    starter_dir="$dir/starter/"

    # Define the corresponding target directory
    target_subdir=$(ls -d $target_dir/$prefix_number-*/)

    # Check if starter directory exists in the source directory
    if [ -d "$starter_dir" ]; then
        # Check if corresponding target subdirectory exists
        if [ -d "$target_subdir" ]; then
            # Use rsync to copy the contents from starter directory to the corresponding target subdirectory
            # --ignore-existing will skip files that already exist in the target directory
            # -r is for copying files recursively
            # --itemize-changes will print a message for each file processed
            rsync -r --ignore-existing --itemize-changes $starter_dir/ $target_subdir | while read -r line; do
                # check if it's a new file
                # haven't tested this due to already running the script once and copying all files
                if [[ $line == ">f+++++++++"* ]]; then
                    filename=$(echo $line | awk '{print $2}')
                    echo "Successfully copied new file: $filename to $target_subdir"
                fi
                # check if it's an existing file
                if [[ $line == ">f.st......"* ]]; then
                    filename=$(echo $line | awk '{print $2}')
                    echo "File already exists, skipping: $filename"
                fi
            done
        else
            echo "Target subdirectory for $prefix_number not found."
        fi
    else
        echo "Starter directory for $prefix_number not found."
    fi
done
