import benchmark from 'benchmark';
import * as wasm from './build/debug.js';

function runSuite(suite) {
  console.log('Running benchmark suite', suite.name);

  suite
    .on('cycle', function (event) {
      console.log('cycle', String(event.target));
    })
    .on('complete', function (event) {
      console.log('complete', this.filter('fastest').map('name') + ' won');
    })
    .run();
}

function addTest() {
  function addJs(a, b) {
    return a + b;
  }

  const addAs = wasm.add;

  const suite = new benchmark.Suite();

  suite
    .add('JavaScript', function () {
      addJs(10, 20);
    })
    .add('AssemblyScript', function () {
      addAs(10, 20);
    });

  runSuite(suite);
}

function factorialTest() {
  function factorialJs(i) {
    return i === 0 ? 1 : i * factorialJs(i - 1);
  }

  const factorialAs = wasm.factorial;

  const suite = new benchmark.Suite();

  suite
    .add('JavaScript', function () {
      factorialJs(3);
    })

    .add('AssemblyScript', function () {
      factorialAs(3);
    });

  runSuite(suite);

  const suiteLarge = new benchmark.Suite();

  suiteLarge
    .add('JavaScript', function () {
      factorialJs(100);
    })
    .add('AssemblyScript', function () {
      factorialAs(100);
    });

  runSuite(suiteLarge);
}

// addTest();
factorialTest();
