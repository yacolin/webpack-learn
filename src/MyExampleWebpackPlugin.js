class MyExampleWebpackPlugin {
  apply(compiler) {
    compiler.hook.emit.tapAsync(
      "MyExampleWebpackPlugin",
      (compilation, callback) => {
        console.log('This is an example plugin');
        console.log(`Here's the 'compliation' object which reprensents a single build of assets:`, compilation);


        compilation.addModule();

        callback();
      }
    );
  }
}
