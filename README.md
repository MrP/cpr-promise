# cpr-promise
Just a promise wrapper around the `cpr` node module.

See https://github.com/davglass/cpr and https://www.npmjs.com/package/cpr

Install with:
```
npm install --save cpr-promise
```

Use like this:

```
var cprp = require('cpr-promise');

cprp('path/from/', 'path/to/', options)
  .then(doSomething)
  .catch(doSomethingElse);
```

The first three parameters, `from`, `to` and `options` are passed straight into `cpr`'s.
See https://github.com/davglass/cpr and https://www.npmjs.com/package/cpr for the full documentation.
