const { resolve } = require("path");

// tapAsync version
class HelloAsyncPlugin {
  apply(compiler) {
    compiler.hooks.tapAsync('HelloAsyncPlugin', (compilation, callback) => {
      setTimeout(() => {
        console.log('Done with async work...');
        callback();
      }, 1000);
    })
  }
}


// tapPromise version
class HelloAsyncPlugin1 {
  apply(compiler) {
    compiler.hooks.emit.tapPromise('HelloAsyncPlugin', compilation => {
      // return a Promise that resolves when are done
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('Done with async work...');
          resolve();
        }, 1000)
      })
    })
  }
}

module.exports = HelloAsyncPlugin;
