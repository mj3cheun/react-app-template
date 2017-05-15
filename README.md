# react-app-template
This template is designed to quickly get you started on small React based SPA projects. It bundles everything needed to build a basic site in one package. Bootstrap is used as the front-end framework. Routing is provided by react-router version 4. A spinner library is used to spice up loading screens. An ultra-lightweight global props framework is built-in for simplified state management. Various small useful tools are also included.

## Setup and Installation

#### Setup
Required Tools:
* nodejs
* npm

#### Installation
Install the app dependencies using npm:

1. Download or clone repository from github into any directory
2. Run ```npm install``` in the directory in order to install all node dependencies
3. Build the project using one of the commands listed below.
4. Build your desired application on top of framework provided.


#### npm Commands
This project uses npm as a build tool. In all applicable cases, the website is served at address 0.0.0.0 on port 8080. The following commands are available:

* ```npm run build``` to do a production build of the application and output the result to the public folder.

* ```npm run watch``` to do a development build of the application using auto file watch and browser reloading. Note: This does not update the public folder with the development build.

* ```npm run start``` to do a production build of the application, output result to the public folder, and serve using http-server.

* ```npm run start``` to produce a stats.json file for use in bundle file size analysis tools.
