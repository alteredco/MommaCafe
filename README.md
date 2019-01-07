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

### Auto convert sass in styles.scss to css in styles.css:

  `gulp sass`

## Version 1 tasks:

  -[] * Add landing page
  -[] * Add Cafe page that lists all cafes

  Each cafe has:

  -[] * Name
  -[] * Image
