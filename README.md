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

# To rerun for failed 
npm run test:failed

# To Run Command:
  npm run test / npm test

# To Run Command with Tags
npm test --TAGS="@test"
npm test --TAGS="@test" --BROWSER="firefox" 


  
 