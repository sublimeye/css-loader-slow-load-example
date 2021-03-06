## CSS-loader performance issue profiling

In this project there is only one JS file which includes semantic-ui.css file which in turn
includes some pictures and fonts.

Webpack configured to use babel and then css-loader to load and parse included CSS.

### To run and see how long does it take

```
npm install
npm start
```

### To compare speed, switch to "faster-css-loader" branch

```
git checkout faster-css-loader
npm install ; To re-install css-loader version 0.14.5
npm start
```

### Example of Faster version 0.14.5 of CSS-loader (2.3 seconds)
![Faster Version 0.14.5](./css-loader-0.14.5-performance.png
"Version 0.14.5")

### Example of Slower version 0.23 of CSS-loader (80seconds; 35x times slower)
![Much slower 0.23](./css-loader-0.23-performance.png
"Version 0.23")
