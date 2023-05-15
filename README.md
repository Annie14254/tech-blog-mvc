
# MVC Tech Blog
[![License Badge](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Contribution](#Contribution)
- [Contact](#Contact)

## Description
This application creates a site similar to a tech blog with example posts and comments. Users can create an account and use login/logout functionality to access their dashboard, as well as making posts and comments of their own. The buttons to edit and delete posts from the dashboard are currently non-functional.

## Installation
To install the dependencies required for the application, run the following line in the terminal.

```
npm install
```

## Usage
Access the deployed site at (heroku link).

To run locally:
- Clone the repository to your local computer.
- Run "npm install" in the integrated terminal in the root of the file to install all dependencies.
- Run the contents of the schema.sql file in the MySQL Workbench.
- Create a .env file and insert values for DB_NAME, DB_PASSWORD, and DB_USER.
- Run "node seeds/index.js" in the integrated terminal to seed the database.
- Run "node server.js" in the integrated terminal to start the server.
- Use Insomnia Core to get data from the server, or navigate to the locally hosted site at http://localhost:(HOST) (default 3001).

## Testing
To test the application, run the following line in the terminal.

```
npm test
```

## Contribution
N/A

## Contact
If you have questions, contact the author of the repository, Annie14254, at annieyashley@gmail.com.

