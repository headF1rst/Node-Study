console.log(`first task`);

setTimeout(() => {
    console.log(`second task`);
}, 0); // 기다리는 시간이 0초여서 바로 실행되는것을 기대하지만 맨 마지막에 수행됨
// 콜백 함수는 항상 마지막에 수행이 된다

console.log(`next task`);
console.log(`Hey second task wait a moment`);
console.log(`wait..`);
console.log(`Ok. Now execute the second task`);