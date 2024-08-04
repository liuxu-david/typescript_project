var a = 10;
function forEach(str) {
    str.split('').forEach(function (item) { return item + 1; });
    console.log(111);
}
// const s1 = Symbol("k1");
// const s2 = Symbol("k2");
// console.log(s1===s2);
var str = "aaa";
console.log(str.toUpperCase());
console.log(new String(str).toUpperCase());
// 函数
function fn1(obj) {
    return obj.a + (obj.b || 0);
}
console.log(fn1({ a: 1, b: 2 }));
console.log(fn1({ a: 1 }));
// 联合类型
function fn2(id) {
    console.log(id);
}
fn2(1);
fn2("1");
function fn3(value) {
    console.log(value.x);
    console.log(value.y);
}
fn3({ x: 11, y: 22 });
function fn4(val) {
    return val;
}
console.log(fn4("jd"));
function fn5(value) {
    console.log(value.x, value.y);
}
fn5({ x: 88, y: 99 });
function fn6(value) {
    console.log(value);
}
fn6({ a: 0, x: 0, y: 0, z: 0 });
