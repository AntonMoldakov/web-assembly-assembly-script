import assert from 'assert';
import {
  add,
  factorial,
  mergeTwoLists,
  createList,
  listToArray,
} from '../build/debug.js';
import { mergeTwoListsJs, ListNode } from '../functions/merge-two-lists.js';

assert.strictEqual(add(1, 2), 3);

assert.strictEqual(factorial(3), 6);

const testMergeTwoListsJs = () => {
  const firstList = new ListNode(
    1,
    new ListNode(2, new ListNode(2, new ListNode(3)))
  );
  const secondList = new ListNode(
    2,
    new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(5))))
  );

  const resultList = new ListNode(
    1,
    new ListNode(
      2,
      new ListNode(
        2,
        new ListNode(
          2,
          new ListNode(
            3,
            new ListNode(3, new ListNode(3, new ListNode(4, new ListNode(5))))
          )
        )
      )
    )
  );
  assert.deepStrictEqual(mergeTwoListsJs(firstList, secondList), resultList);
};

testMergeTwoListsJs();

const testMergeTwoListsAs = () => {
  const firstList = createList([1, 2, 2, 3]);
  const secondList = createList([2, 3, 3, 4, 5]);
  const resultArray = [1, 2, 2, 2, 3, 3, 3, 4, 5];

  assert.deepStrictEqual(
    listToArray(mergeTwoLists(firstList, secondList)),
    resultArray
  );
};

testMergeTwoListsAs();

// // Создаем списки через массивы
// const list1 = createList([1, 3, 5]);
// const list2 = createList([2, 4, 6]);

// // Вызываем функцию слияния
// const mergedList = mergeTwoLists(list1, list2);

// // Конвертируем результат обратно в массив
// const resultArray = listToArray(mergedList);

console.log('ok');
