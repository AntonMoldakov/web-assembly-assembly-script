# web-assembly-assembly-script

### Getting started

`npm install`
`npm run asbuild`

### How to write new Assembly Script code

1. Write it in the "assembly" folder
2. Run `npm run asbuild`

### How to run benchmark

`npm run benchmark`

### Benchmark results

On the one hand, we see that lightweight operation like the "add" function is match faster in simple JS.
This is because running the wasm module requires some resources.

But on the other hand, a heavier operation like the "factorial" function works faster,
and the larger the factorial we use, the faster it is.

And in the case of "merging two lists" we see that there are some problems with passing more complex structure between JS and WASM, we have to create helpers to transform structures between JS and WASM and of course this requires some resources.

Be sure to use AI to transform your JavaScript code to AssemblyScript. Works great!

### How to init Assembly Script

`npm init -y`
`npm install --save @assemblyscript/loader`
`npm install --save-dev assemblyscript`
`npx asinit .`
`npm run asbuild`
