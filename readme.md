# Switchless

A set of UI components that is often used by my personal projects and cashflowy.

The story book is hosted on https://switchless.cashflowy.io

## Create new component to be exported via npm

- create the component in `src` folder
- create the stories for the component
- update index.js to export the component
- update List of Contents.mdx files
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


## Maturity of each component

Every component that is in switchless has one of the following maturity
- planned
- minimal - poc implemented
- viable - can be used internally, might be missing features, preferably dont expose to customer facing components
- complete - might be missing polish, but can be exposed in customer facing components
- lovable - has polish

#### Recommended usage of components at different maturity levels
| Maturity Level | Core features | Support features | Polish | Use for POC | Use for Internal components | Use in customer facing components |
|----------|---------|---------|---------|-----|-----|-----|
| Planned  | missing | missing | missing | N/A | N/A | N/A |
| Minimal  | present | missing | missing | Use | Avoid | Strictly Avoid |
| Viable   | present | partial | missing | Use | Use | Avoid |
| Complete | present | present | missing | Use | Use | Use |
| Lovable  | present | present | present | Use | Use | Use |
