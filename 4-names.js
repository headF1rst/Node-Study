// local
const secret = `SUPER SECRET`;

// share
const john = `john`;
const peter = `peter`;

/* 
    다른 파일에서 require(`./4-names`) 경로를 통해
    module.exports로 공유하는 변수, 함수 등을 사용할 수 있다.
    exports에는 변수와 값이 object에 담겨서 key-value 쌍으로 전달된다.
 */
module.exports = { john, peter };

