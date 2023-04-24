function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number{
 
    let result = operation(x, y);
    return result;
}

console.log(mathOp(10, 20, (x,y)=>x+y)); 
console.log(mathOp(10, 20, (x, y) => x * y));
