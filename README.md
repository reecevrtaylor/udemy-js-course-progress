# The Complete JavaScript Course by Jonas Schmedtmann: My Progress and Enhancements

## Introduction

This repo is dedicated to my progress in the Udemy course, ["The Complete JavaScript Course"](https://www.udemy.com/course/the-complete-javascript-course/) by Jonas Schmedtmann. The course is a comprehensive guide to JavaScript, covering everything from fundamentals to advanced topics like async programming, ES6+ features, and best practices. I am using this as a guide to build up my JavaScript skills and strengthen my existing knowledge.

## Why This Repo?

I'm creating this repository for several reasons:

1. **Accountability:** By updating this repo regularly, I hold myself accountable for consistent learning and progress.
2. **Reference:** This serves as a quick reference for the future when I need to revisit certain topics.
3. **Showcase:** It allows me to showcase my skills and the depth of my understanding of JavaScript.

## My Approach

My learning approach for this course is hands-on and focused on self-assessment. For challenges and projects, I first pause the video to try writing my own solutions. After that, I resume the course to compare my work with Jonas' techniques. This strategy allows me to test my current understanding, see alternative methods, and identify areas for improvement. Additionally, I will be incorporating custom code into projects when I see fit or think it could enhance the project. This not only deepens my understanding but also allows me to explore creative solutions. It's a balanced way to both apply what I've learned and benefit from expert insights.

## Commit Message Tags

In this repository, I use specific tags in my git commit messages to convey the nature of the changes. Below is a table outlining the tags and their respective use-cases:

| Tag       | Description                                                                                          | Example                                     |
|-----------|------------------------------------------------------------------------------------------------------|---------------------------------------------|
| **update**    | Used when updating the progress of a particular topic or section.                                       | `update: 02 - complete arrays`              |
| **complete**  | Indicates the completion of a section or challenge within the course.                                   | `complete: 05 - section complete`           |
| **refactor**  | Reserved for smaller changes that restructure code without altering its functionality.                   | `refactor: 07 - simplified conditional logic`|
| **improve**   | Used for substantial changes to existing files, including optimizations and re-writes for performance.  | `improve: 08 - overhauled logic`             |
| **custom**    | Denotes custom code or features added to the project.                                                  | `custom: 09 - added additional data structure`|
| **style**     | Commits focused on stylistic changes like formatting or aesthetic updates.                             | `style: 10 - added disabled style for buttons`|
| **fix**       | For commits that identify and correct a bug.                                                           | `fix: 11 - resolved issue with function call`|
| **docs**      | Commits focused on updating documentation, comments, or the README.                                     | `docs: updated readme`|

### Special Note on **refactor** and **improve**
It's not always straightforward to distinguish between **refactor** and **improve**. In general:
- **refactor** is used for smaller, more focused changes
- **improve** is used for larger, more substantial changes

## Beyond the Course

While the course itself provides an excellent foundation, I believe in the value of practice and exploration to reinforce learning. Therefore, you'll also find:

- Improved versions of the projects and exercises in the course, where I've used my existing knowledge to optimize the code.
- Extra comments and documentation to clarify complex JavaScript functionalities and features.

## [Scripts](scripts)

### [copy_starter_files.sh](scripts/copy_starter_files.sh)
This repository includes a script named `copy-starter-files.sh`, located in the `scripts` directory. The script automates the process of copying the initial 'starter files' from the cloned `complete-javascript-course` repository into their corresponding folders within this repository.

By running this script, I can populate the folders here with the original starter files from the course, while keeping my own work separate. This approach lets me follow along with the course, utilizing the initial files provided, without modifying or using the cloned course repository.

### [gcommitp.sh](scripts/gcommitp.sh)
`gcommitp` is a convenient script to automate and standardize git commit messages using the conventional commit format. The script provides interactive prompts to guide users in selecting the appropriate commit type, ensuring consistent commit message formatting.

#### Usage
Simply run `./scripts/gcommitp.sh` in your terminal. Follow the prompts to select a commit type and enter your message. The script will then automatically create a git commit with the chosen type and message.

#### Supported Commit Types
- `feat`: Features - A new feature.
- `fix`: Bug Fixes - A bug fix.
- `docs`: Documentation - Documentation only changes.
... [and so on for other commit types]

