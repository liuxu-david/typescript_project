function fn(a: string, b: number = 0): void {
  console.log(a,b);
  
}
console.log(fn("2"));

type GetName = (a:string,b:string)=>void;

const handleName:GetName = function(value:string,value2:string):void{
  console.log(value,value2);
}
console.log(handleName('a',"b"));

// 泛型
function fn1<T>(arg: T): T {  
  return arg;  
}  
console.log(fn1<string>('a'));
console.log(fn1<number>(9));



