# lazy-load-es2015-webpack2
Challenge for the talk at http://tiagorg.com/talk-lazy-loading-es2015-modules

Lazy-loading ES2015 modules in the browser with Webpack 2, Babel and System.js

Since webpack 2 is not officially released, we will install the version 2.1.0-beta.27 locally on `node_modules`.

# Usage

- Needs Node 4+.

```
npm install
npm run build
http-server
open http://127.0.0.1:8080/
```

# Instructions
- Fork from [github.com/tiagorg/lazy-load-es2015-webpack2-challenge](https://github.com/tiagorg/lazy-load-es2015-webpack2-challenge)
- Take a moment to understand this implementation.
- Completely lazy-load *`MerryXmas`* and its dependencies upon click of the "Merry Xmas" button.
- Completely lazy-load *`Alert`* after 5s the page has been loaded.
- Verify your lazy-loadable bundles have been generated and are loading properly.
