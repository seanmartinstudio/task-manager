# Task Manager

## Overview
Allows a team of developers to each sign up with their own account and monitor their individual tasks across work and personal time. 

## Dependencies
* ruby 2.7.4p191
* react-router-dom 6.4.2
* gem 'bcrypt', '~> 3.1.7'

## Installation
* Fork and clone `https://github.com/seanmartinstudio/task-manager`.
* Navigate to and open the `task-manager` project.
* Add `gem 'bcrypt', '~> 3.1.7'` to the Gemfile for `Active Model has_secure_password`.
* In the terminal, run `bundle install` to install dependencies.  
* In the terminal type `rails s` to spin up the API on local port 3000.
* Finally, open up another terminal window and type `npm start --prefix client` to fire up the font end on local local port 4000.

## How To Use
* A user can sign up with an account, log in and stayed logged in via auth.
* Each individual user has access to their tasks only.
* A logged in user can create, read, modify that status of, or delete a task.

## Future Updates
* A user can search through their tasks by category. 

## License
[MIT License](https://opensource.org/licenses/MIT)


