const sayHello = function(name) {
  if (!name) { // undefined, null, "", 0
    return null;
  }

  return `hello there ${name}`;
};


// const myFaveNumber = 42;

// default export of any file (module) is an empty object
module.exports = sayHello;
