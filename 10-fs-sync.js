const { readFileSync, writeFileSync } = require(`fs`); // fs 모듈에서 특정 함수만을 가져온다.
//  const fs = require(`fs`);
//  fs.readFileSync
console.log(`start`);
const first = readFileSync(`./content/first.txt`, `utf8`);
const second = readFileSync(`./content/second.txt`, `utf8`);

console.log(`${first}
 ${second}`);

//  writeFileSync(
//      `./content/result-sync.txt`,
//      `Here is the result : ${first}, ${second}`
//  ); // 파일이 이미 존재하면 덮어 쓰게 된다.

writeFileSync (
    `./content/result-sync.txt`,
    `I will add statement to the result text : ${first}, ${second}`,
    { flag: 'a' }
)
console.log(`done with this task`);
console.log(`starting the next one`);