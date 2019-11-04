# How to deploy your project into "Github" ..!
---
create a react app using ``` create-react-app ``` package
## Prerequisites :
- [```GitHub```](https://github.com) Account
- Install `Git` in your machine and setup Git.
- Install `Node.js`
- Install `Npm`

Note: You will need to have Node 8.10.0 or later versions on your machine.

## Procedure:
1- Create a project using:
    ```
    $sudo create-react-app myapp
    ```

2- Install `gh-pages` package using:
    ``` 
    $sudo npm install --save-dev gh-pages 
    ```
    
3- Open `package.json` file from the project directory and do the following changes into it:
    ~ 3.1- add ```"homepage" : "https://{userAccount}.github.io/{ProjectName}" ``` before the project name
    ~ 3.2- add following lines `script` part of `package.json`
    ` "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build" `
    
4- Create a github repository, initialize and add it as a remote in your local git repository
    ~ 4.1- use ```git init``` to initialize
    ~ 4.2- use ```git remote add https://github.com/{userAccount}/{repositoryName}.git```
    
5- Use ```npm run deploy``` to start the deployment process
6- Use ```git add . ``` to add all files for commiting
7- Use ```git commit -m "message"``` to commit changes
8- Use ```git push origin master``` to push all changes into github account
9- check [https://{userAccount}.github.io/{projectName}]() to see the deployed version of your app on github.
