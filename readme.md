# Switchless

A set of UI components that is often used by my personal projects and cashflowy.

The story book is hosted on https://switchless.cashflowy.io

## Create new component to be exported via npm

- create the component in `src` folder
- create the stories for the component
- npm install - to update the packagelock version
- update index.js to export the component
- update version - in package.json
- Perform `npm run build`
- commit code to remote repo
- npm publish
- update Change Log

in the other repo

- npm cache clean --force // sometimes npm might not get the latest
- npm install switchless@0.3.2 // what ever version you need

## Create a new example reusable pattern
- create the component in `examples` folder  
- create stories for the component
- commit code



### Component Testing
- Write Cypress component tests with `.cy.jsx` extension
- Follow the pattern shown in existing components (e.g. CustomTab.cy.jsx)
- Run component tests with `npm run test`



### Best Practices
- Test component behavior, not implementation details
- Use meaningful test descriptions
- Keep tests focused and atomic
- Mock external dependencies appropriately
- Update tests when component behavior changes




## Maturity of each component

Every component that is in switchless has one of the following maturity
- planned - we have not build this yet. planning to build it.
- minimal - poc implemented
- viable - can be used internally, might be missing features, preferably dont expose to customer facing components
- complete - might be missing polish, but can be exposed in customer facing components
- lovable - has polish

#### Recommended usage of components at different maturity levels
| Maturity Level | Core features | Support features | Polish | Use for POC | Use for Internal components | Use in customer facing components | MUI JOY color level |
|----------|---------|---------|---------|-----|-----|-----|-----|
| Planned  | missing | missing | missing | N/A | N/A | N/A | N/A |
| Minimal  | present | missing | missing | Use | Avoid | Strictly Avoid | danger |
| Viable   | present | partial | missing | Use | Use | Avoid | warning |
| Complete | present | present | missing | Use | Use | Use | primary |
| Lovable  | present | present | present | Use | Use | Use | success |
