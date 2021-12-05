// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require(`lodash`);  // npm으로 install한 lodash dependency를 사용

const items = [1, [2, [3, [4]]]];
const newItems = _.flatMapDeep(items);
console.log(newItems);
