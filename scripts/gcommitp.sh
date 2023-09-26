#!/bin/bash

# https://kapeli.com/cheat_sheets/Conventional_Commits.docset/Contents/Resources/Documents/index
types=(
    "1" "feat"          "Features - A new feature"
    "2" "fix"           "Bug Fixes - A bug fix"
    "3" "docs"          "Documentation - Documentation only changes"
    "4" "style"         "Styles - Changes that do not affect the meaning of the code"
    "5" "refactor"      "Code Refactoring - A code change that neither fixes a bug nor adds a feature"
    "6" "perf"          "Performance Improvements - A code change that improves performance"
    "7" "test"          "Tests - Adding missing tests or correcting existing tests"
    "8" "build"         "Builds - Changes that affect the build system or external dependencies"
    "9" "ci"            "Continuous Integrations - Changes to our CI configuration files and scripts"
    "10" "chore"        "Chores - Other changes that don't modify src or test files"
    "11" "revert"       "Reverts - Reverts a previous commit"
)

function show_types {
    echo "Available commit types:"
    for (( i=0; i<${#types[@]}; i+=3 ))
    do
        echo "${types[i]}: ${types[i+1]} - ${types[i+2]}"
    done
}

# Display the commit types and ask for user's choice
show_types
read -p "Choose a commit type (number or name): " choice

# Determine the commit type
commit_type=""
if [[ "$choice" =~ ^[0-9]+$ ]]; then
    # The choice is a number. Translate it to a commit type.
    index=$(($choice * 3 - 3))
    if [ "$index" -ge 0 ] && [ "$index" -lt "${#types[@]}" ]; then
        commit_type="${types[index+1]}"
    else
        echo "Invalid type number."
        exit 1
    fi
else
    # Check if the choice is a valid commit type
    for (( i=1; i<${#types[@]}; i+=3 ))
    do
        if [ "${types[i]}" == "$choice" ]; then
            commit_type="$choice"
            break
        fi
    done
fi

if [ -z "$commit_type" ]; then
    echo "Invalid commit type."
    exit 1
fi

# Prompt for the commit message
read -p "Enter your commit message: " commit_msg

# Generate the git commit command
git commit -m "$commit_type: $commit_msg"
