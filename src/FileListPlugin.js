
class FileListPlugin {
  apply(compiler) {
    // emit is aysnchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      // create a header string for the generated file:
      var fileList = 'In this build:\n\n';

      // loop through all compiled assets.
      // adding a new line item for each filename.
      for (var filename in compilation) {
        fileList += '- ' + filename + '\n';
      }

      // Insert this list into the webpack build as a new file assert:
      compilation.asserts['filelist.md'] = {
        source: function() {
          return fileList;
        },
        size: function() {
          return fileList.length;
        }
      };

      callback();
    })
  }
}

module.exports = FileListPlugin;
