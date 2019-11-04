# How to deploy your project into "Github" ..!

create a react app using ``` create-react-app ``` package
## Prerequisites :
- [```GitHub```](https://github.com) Account
- Install `Git` in your machine and setup Git.
- Install `Node.js`
- Install `Npm`

Note: You will need to have Node 8.10.0 or later versions on your machine.

## Procedure:
1. Create a project using:
    ```sh
    $sudo create-react-app myapp
    ```

1. Install `gh-pages` package using:
    ```sh 
    $sudo npm install --save-dev gh-pages 
    ```
    
1. Open `package.json` file from the project directory and do the following changes into it:
    1. add 
    ```sh
    "homepage" : "https://{userAccount}.github.io/{ProjectName}" 
    ``` 
    before the project name
    1. add following lines into `script` part of `package.json`
    ```sh
    "predeploy" : "npm run build",
    "deploy" : "gh-pages -d build" 
    ```
    
1. Create a github repository, initialize and add it as a remote in your local git repository
    1. use following command to initialize the local repository
    ```sh 
    $git init
    ``` 
    to initialize
    1. use following command to add origin to local repository
     ```
    $git remote add https://github.com/{userAccount}/{repositoryName}.git
    ```
    
1. Use ```$npm run deploy``` to start the deployment process
1. Use ```$git add . ``` to add all files for commiting
1. Use ```$git commit -m "message"``` to commit changes
1. Use ```$git push origin master``` to push all changes into github account
1. check [https://{userAccount}.github.io/{projectName}]() to see the deployed version of your app on github.
