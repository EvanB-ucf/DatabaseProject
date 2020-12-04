# DatabaseProject
ucf project

## Requires
- Node.js
- React
- Express

## How to run Front End Locally (REACT)
1. Open Linux Terminal or PowerShell at /web
2. If running this for the first time, then Run 'npm install'
3. Run 'npm start'

### NOTE** 
This is just how I have it set up for now. It is very bare bones and is not at all final.
If you feel it can be done in a better way or you just dont want to use react then feel free to change it.
Just make sure that it all goes in the /web folder and document how to get it running locally here. 

## How to run Back End Locally (EXPRESS)
1. Open Linux Terminal or PowerShell at /api
2. If running this for the first time, then Run 'npm install', and Run 'npm install mysql'
3. Run 'node server.js'

### NOTE**
This is not needed since server.js merely only provides a connection to the AWS backend.
All functions handling sql queries are stored in services.js in the services folder. Current documentation for this code can be found at /api/docs/global.html

## To Do
- Add functionality to web pages
- Create functions that handle sql queries in the api
- Get Front End to use the Express API
