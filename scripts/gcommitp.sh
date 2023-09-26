#!/bin/bash

# Reece Taylor 2023

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

# Define color codes
RED="\033[1;31m"
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
BLUE="\033[1;34m"
PURPLE="\033[1;35m"
CYAN="\033[1;36m"
RESET="\033[0m"

function show_types {
    echo -e "\n${GREEN}Commit Types:${RESET}"
    echo -e "${CYAN}+----+----------+--------------------------------------------------------------------------------+"
    echo -e "| #  |  Type   | Description                                                                    |"
    echo -e "+----+----------+--------------------------------------------------------------------------------+"
    for (( i=0; i<${#types[@]}; i+=3 ))
    do
        printf "| %-2s | ${BLUE}%-8s${RESET} | ${PURPLE}%-78s${RESET} |\n" "${types[i]}" "${types[i+1]}" "${types[i+2]}"
        echo -e "${CYAN}+----+----------+--------------------------------------------------------------------------------+"
    done
    echo
}

clear
while true; do
    show_types
    echo -ne "${BLUE}Select type (num/name)${RESET}, or ${RED}'q'${RESET} to quit: "
    read choice

    if [ "$choice" == "q" ]; then
        exit 0
    fi

    commit_type=""
    if [[ "$choice" =~ ^[0-9]+$ ]]; then
        index=$(($choice * 3 - 3))
        if [ "$index" -ge 0 ] && [ "$index" -lt "${#types[@]}" ]; then
            commit_type="${types[index+1]}"
        else
            echo -e "${RED}Invalid choice.${RESET}"
            sleep 1
            clear
            continue
        fi
    else
        for (( i=1; i<${#types[@]}; i+=3 ))
        do
            if [ "${types[i]}" == "$choice" ]; then
                commit_type="$choice"
                break
            fi
        done
    fi

    if [ -z "$commit_type" ]; then
        echo -e "${RED}Invalid type.${RESET}"
        sleep 1
        clear
        continue
    fi

    echo -e "\n${YELLOW}Enter your commit message${RESET} (or ${BLUE}'b'${RESET} to go back)"
    echo -ne "\n${BLUE}($commit_type:)${RESET}: "
    read commit_msg
    if [ "$commit_msg" == "b" ]; then
        clear
        continue
    fi

    echo
    echo -e "${GREEN}Commit Preview:${RESET}"
    echo -e "git commit -m \"${BLUE}$commit_type:${RESET} ${YELLOW}$commit_msg\"${RESET}"
    echo

    echo -ne "${GREEN}'ENTER'${RESET} to confirm, ${BLUE}'b'${RESET} to reselect, ${YELLOW}'m'${RESET} to edit message, ${RED}'q'${RESET} to quit: "
    read confirm
    if [ -z "$confirm" ]; then
        git commit -m "$commit_type: $commit_msg"
        exit 0
    elif [ "$confirm" == "m" ]; then
        clear
        continue
    elif [ "$confirm" == "b" ]; then
        clear
        continue
    elif [ "$confirm" == "q" ]; then
        exit 0
    else
        echo -e "${RED}Invalid option.${RESET}"
        sleep 1
        clear
        continue
    fi
done
