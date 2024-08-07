function fn(a, b) {
    if (b === void 0) { b = 0; }
    console.log(a, b);
}
console.log(fn("2"));
var handleName = function (value, value2) {
    console.log(value, value2);
};
console.log(handleName('a', "b"));
// 泛型
function fn1(arg) {
    return arg;
}
console.log(fn1('a'));
console.log(fn1(9));
