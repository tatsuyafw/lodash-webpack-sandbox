import { map, pick, compact, property, clone } from 'lodash';

let name = 'webpack';
console.log(`hello ${name}`);

let object = { 'a': 1, 'b': '2', 'c': 3 };

console.log(compact([1, null, 0, 2]));
console.log(pick(object, ['a', 'c']));

let objects = [
  { 'a': { 'b': 2 } },
  { 'a': { 'b': 1 } }
];

console.log(map(objects, property('a.b')));
console.log(clone({ foo: 'bar' }));
