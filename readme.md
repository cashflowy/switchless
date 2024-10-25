# Switchless

A set of UI components that is often used by my personal projects and cashflowy.

The story book is hosted on https://switchless.cashflowy.io

## Create new component to be exported via npm

- create the component in `src` folder
- add/update versions for the component
- create the stories for the component
- update index.js to export the component
- update version in Welcome/List of Contents.mdx files
- update version - in package.json
- npm install - to update the packagelock version
- npm run build - this is the build that is published to npm
- commit code
- npm publish
- update Change Log

in the other repo

- npm cache clean --force // sometimes npm might not get the latest
- npm install switchless@0.3.2 // what ever version you need

## Create a new example reusable pattern
- create the component in `examples` folder  
- create stories for the component
- commit code