# MommaCafe
Repository for MommaCafe app

## Install latest version of node:
`nvm install 10.11.0`
`nvm use 10.11.0`
`nvm alias default 10.11.0`
`node -v`
should return: V10.11.0

## Clone the Repo to start:
###* Git clone https://github.com/alteredco/MommaCafe.git
###* Install the dependencies and Start the App!
`npm install`
`npm i --global mongodb-download`
`mongod` : Run in background shell
`mongo` : Run in background shell (NOTE: You may need to run `sudo mongo`)
`npm start`


## Dev dependencies:
### Please install GULP both globally and locally (meaning in root directory). 
This may automatically install locally if you run npm install first, but you will still need a global install.

  `npm install gulp-cli --global`
  `npm install gulp --save-dev`

### Test if gulp is working by navigating to your root file and running this command in the terminal:

  `gulp default`

## Version 1 tasks:

  -[x] * Add landing page
  -[x] * Add Cafe page that lists all cafes

  Each cafe has:

  -[x] * Name
  -[x] * Image

## Version 2 tasks:
  
  -[x]Style the cafes page
    -[x] *Add a better header/title
    -[x] *Make cafes display in a grid
  
  -[x]Style the Navbar and Add New Cafe Form
    -[x] *Add a navbar to all templates
    -[x] *Style the new campground form
  
  -[x] Add Mongoose
     -[x] *Install and configure mongoose
     -[x] *Setup cafe model schema
     -[x] *Use cafe model inside of our routes
 
  -[x] Show Page
     -[x] *Add description to our cafe model
     -[x] *Add a show route/template

## Version 3 tasks:
  
  -[x]Refactor Mongoose
    -[x] *Create models dir
    -[x] *Use module.exports
    -[x] *Require exports
  
  -[x] Add Seeds File
    -[x] *Run seeds file every time the server starts

