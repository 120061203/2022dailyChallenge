// 題目一：hello world！
function hello() {
    // console.log("Hello world");
    return ('Hello world');
}
// 題目二：參數+字串練習
function sayHi(name) {
    return `${name},Hello World!`;
}
// 題目三：參數加法產生器
function add(num) {
    return (num * 2)
}

// 題目四：兩個參數相加器
function addTwo(num1, num2) {
    return (num1 + num2)
}

// 題目五：參數+字串相加
function addNumberAndString(num1, num2, str) {
    return (`第一加第二個參數加總為 ${num1+num2}，第三個參數為 ${str.toString()}`);
}