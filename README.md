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
`npm start`


## Dev dependencies:
### Please install GULP both globally and locally (meaning in root directory). 
This may automatically install locally if you run npm install first, but you will still need a global install.

  `npm install gulp-cli --global`
  `npm install gulp --save-dev`

### Test is gulp is working by navigating to your root file and running this command in the terminal:

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
     -[] *Use cafe model inside of our routes
 
  -[] Show Page
     -[] *Add description to our cafe model
     -[] *Add a show route/template
    
