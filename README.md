# The Tech Blog [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This technology-oriented blog will allow developers from all over share their thoughts and knowledge with the world. Users can publish articles, blog posts, as well as thoughts and opininions using this website.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

In order to use this application, users will need to install npm packaging system using 'npm init' in the command line. If you refer to the package.json you will see the dependencies needed for this application. These can all be downloaded by running 'npm i' on the command line. Users will then need to access the mysql command by typing 'mysql -u root -p' into the command line. Once in the mysql command line, users will need to enter password and enter 'source db/schema.sql' to create the database. Next they will need to tell mysql to use the database by typing 'USE the_tech_blog_db'. Users will type 'quit' to exit back to the command line and seed the tables using 'npm run seed'. Lastly, to initiate the server, users will run 'node server'. Once the server is connected, users can see the website functioning.

## Usage

Once 'node server' has been ran in the command line, the user can access the homepage which will display posts that are already created. Once logged in, users can view their dashboard where they can create, edit, or delete their own posts. Users can also leave comments on other posts if they are logged in. Once users are ready to leave the site, they can log off using the button in the navigation.

Repository Link: [the-tech-blog repository](https://github.com/allygarcia152/the-tech-blog)


## Liscense

This project is licensed under the MIT license. To abtain a copy of the license, visit: [https://choosealicense.com/licenses/mit](https://choosealicense.com/licenses/mit)
 