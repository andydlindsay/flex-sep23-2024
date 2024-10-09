# M01W03 - TDD, CommonJS, and NPM

### To Do
- [x] Manual testing
- [x] Making assertions
- [x] Bringing in outside code
- [x] Exporting our code
- [x] Intro to NPM: a Node package manager
- [x] Mocha test runner
- [x] What is TDD?

### Types of Testing
* manual testing => run the file and check the response
* automated testing => when an app runs predefined tests for us

### Assertion Library
* bunch of helper functions that test actual vs expected
* if they are equal, we get no output
* if they are not equal, the library throws an error

### Node
* an app for running JS
* Chrome's JS intrepreter (V8)
* wrapped it in a C++ app
* added a bunch of optional packages

### Test Runner
* automatically runs your tests
* Mocha
* NPM is built into Node
* Node Package Manager
* install other people's code

```bash
# adds the package as a dependency
npm install package-name

# installs the package globally on your OS
npm install --global package-name

# install the package as a development dependency
npm install --save-dev package-name
```

### package.json
* details information about our project
* and lists all dependencies

### Test-driven Development
* TDD
* we write the tests BEFORE we write the code
* red => green
