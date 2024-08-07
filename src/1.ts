let a = 10;

function forEach(str:string):void{
  str.split('').forEach(item => item +1);
  console.log(111);
  
}
// const s1 = Symbol("k1");
// const s2 = Symbol("k2");
// console.log(s1===s2);

let str: string = "aaa";
console.log(str.toUpperCase());
console.log(new String(str).toUpperCase());

// 函数
function fn1(obj: { a: number, b?: number }):number {
  return obj.a + (obj.b || 0);
}
console.log(fn1({a:1,b:2}));
console.log(fn1({a:1}));

// 联合类型
function fn2(id:number| string) {
  console.log(id);
  
}
fn2(1);
fn2("1");

type person = {
  x:number,
  y:number,
}
function fn3(value:person){
  console.log(value.x);
  console.log(value.y);
}
fn3({x:11,y:22})

type myString = string;
function fn4(val:myString):myString{
  return val;
  
}
console.log(fn4("jd"));

interface person2 {
  x:number,
  y:number
}
function fn5(value:person2){
  console.log(value.x,value.y);
  
}
fn5({x:88,y:99})

// 通过继承拓展属性
interface person3 extends person2{
  z:number
}
function fn6(value:person3){
  console.log(value);
}
// 已存在的接口添加属性
interface person3 {
  a:number;
}
fn6({a:0,x:0,y:0,z:0})

function fn7(location:'top'|'botom'|'left'|'right'):void{
  console.log(location);
}
fn7("top");

function fn8(value?:string|null){
  console.log(value!.toUpperCase());
  
}
fn8("null")
