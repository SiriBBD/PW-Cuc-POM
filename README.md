Add Extensions in VS:

1. PlayWright Test for VS code - Control + Shift + P --enter "Install Playwright" - Check browsers and click OK - Delete Test Examples, and Test Folder
2. Cucumber

# Run in Command Line
npm init -y
npm install

// if playright-test is not installed
npm install playwright@latest
npm playwright install

//if node version is below 16
npm install -g npm@latest

# Install Cucumber Dependencies in Terminal:
npm install @cucumber/cucumber -D 
npm install ts-node -D

# For Cucumber HTML report: in reports folder
npm install multiple-cucumber-html-reporter --save-dev

# To rerun for failed 
npm run test:failed

# To create folder
npm i fs-extra -D

# To create dotenv
npm i dotenv -D
npm i cross-env -D

# To add winston logger
npm i winston -D

# To Run Command:

  npm run test / npm test
 