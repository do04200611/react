//대입 연산자가 있다.
// 대입 연산자는 항상 오른쪽 왼쪽으로 흘러감

let a = 10;
let b = 20;
console.log('=============대입 연산자=============');
console.log("a= " + a );
// 출력 결과: 10

console.log("b= " + b);
// 출력 결과: 20
console.log('=============사칙 연산=============');

//사칙 연산(+,-,*,/,%,**)
let c = 2;
let d = 4;


console.log("c + d = " + c + d);
// 출력 결과 : 6

console.log("c - d = " + c - d);
//출력 결과: -2

console.log("c * d = " + c * d);
//출력 결과:8

console.log("c / d = " + c / d);
//출력 결과: 0.5

console.log("c % d = " + c % d);
//출력 결과: 2

console.log("c ** d = " +c ** d);
// 출력 결과 : 16

console.log('=====대입 연산자와 사칙 연산자를 같이 쓴 코드=============');

//대입 연산자와 사칙 연산자를 같이 쓴 코드

let e = 2;
let f = 4;

e += f;//a2 = a2 + b2
console.log("e += f:"+e);
//출력 결과 :6

e -= f; // a2 = a2 - b2
console.log("e -= f:"+e);
// 출력 결과: 2

e *= f; // a2 = a2 * b2
console.log("e *= f:"+e);
// 출력 결과: 8 

e /= f; // a2 = a2 / b2
console.log("e /= f:"+e);
// 출력 결과 : 2
console.log('=====Postfix 방식의 연산자=============');


//postfix(a++), prefix 방식(++a)
let g = 1;
let h = a++;

console.log("g= "+ g, "h= " + h);
console.log('=====Prefix 방식의 연산자=============');

// 출력 결과 2, 1

let i = 1;
let j = ++i;

console.log("i= "+i, "j= " + j);
// 출력 결과 2, 2

//관계 연산자 or 비교 연산자
console.log('=====관계 연산자=============');
let k = -1;
let l = 32;

console.log('k < l:',k < l);
//출력 결과 : true

console.log('k > l:', k > l);
// 출력 결과 : false

console.log('k <= l:', k <= l);
//출력 결과 : true

console.log('k >= l:', k >= l);
//출력 결과 : false


console.log('===== 비교 연산자=============');

let m = 1;
let n = '1';

console.log('m == n:', m == n);
//출력 결과 : true

console.log('m != n:', m != n);
// 출력 결과 : false

console.log('m === n:', m === n);
//출력 결과 : false

console.log('m !== n:', m !== n);
//출력 결과 : true

console.log('===== 이진 논 연산자=============');


let o = true;
let p = false;

console.log("o && p:",o && p);
// 출력 결과: false

console.log("o || p:",o || p);
//출력 결과: true

let Q = true;
let R = false;

console.log("Q? 1 : 2는 ",Q? 1: 2);
// 출력 결과 1
console.log("Q? 2: 1는 ",Q? 2: 1);
//출력 결과 2
console.log("R? 1: 2는 ",R? 1: 2);
// 출력 결과 2