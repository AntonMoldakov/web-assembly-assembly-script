# web-assembly-assembly-script

### How to run benchmark

`npm run benchmark`

### Benchmark results

On the one hand, we see that lightweight operation like the "add" function is match faster in simple JS.
This is because running the wasm module requires some resources.

But on the other hand, a heavier operation like the "factorial" function works faster,
and the larger the factorial we use, the faster it is.

### How to init Assembly Script

`npm init -y`
`npm install --save @assemblyscript/loader`
`npm install --save-dev assemblyscript`
`npx asinit .`
`npm run asbuild`
