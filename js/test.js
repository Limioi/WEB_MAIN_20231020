var jb = 'hi'; // 변수 선언 후 주석 가능(한줄 주석)
var a = 1;
var b;
b = 5;
/*
여러 줄 주석 : 여러 줄에 걸쳐 주석을 처리합니다.
*/
if (true) 
{
    let c = 'let 접근';
    var c_1 = 'var 접근';
}
//console.log(c); // Error?
console.log(c_1); // 콘솔에 'var 접근' 출력

let d = 5;
//let d = '값 재할당'; // Error?
console.log(d); // 콘솔에 5 출력
    
const e = '상수1 접근';
//e = 5;
//const f // Error?
console.log(e); // 콘솔에 '상수1 접근' 출력

    
