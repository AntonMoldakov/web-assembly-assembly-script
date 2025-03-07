import benchmark from 'benchmark';
import {
  add as addAs,
  factorial as factorialAs,
  mergeTwoLists as mergeTwoListsAs,
  createList,
} from './build/debug.js';
import { factorialJs } from './functions/factorial.js';
import { addJs } from './functions/add.js';
import { ListNode, mergeTwoListsJs } from './functions/merge-two-lists.js';

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
  const suite = new benchmark.Suite('add');

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
  const suite = new benchmark.Suite('factorial');

  suite
    .add('JavaScript', function () {
      factorialJs(3);
    })

    .add('AssemblyScript', function () {
      factorialAs(3);
    });

  runSuite(suite);

  const suiteLarge = new benchmark.Suite('factorialLarge');

  suiteLarge
    .add('JavaScript', function () {
      factorialJs(100);
    })
    .add('AssemblyScript', function () {
      factorialAs(100);
    });

  runSuite(suiteLarge);
}

function mergeTwoListsTest() {
  const suite = new benchmark.Suite('mergeTwoLists');

  suite
    .add('JavaScript', function () {
      const firstList = new ListNode(
        1,
        new ListNode(2, new ListNode(2, new ListNode(3)))
      );
      const secondList = new ListNode(
        2,
        new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(5))))
      );

      mergeTwoListsJs(firstList, secondList);
    })
    .add('AssemblyScript', function () {
      const firstListAs = createList([1, 2, 2, 3]);
      const secondListAs = createList([2, 3, 3, 4, 5]);

      mergeTwoListsAs(firstListAs, secondListAs);
    });

  runSuite(suite);
}

// addTest();
// factorialTest();

mergeTwoListsTest();
