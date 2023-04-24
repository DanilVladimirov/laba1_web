function mathOp(x, y, operation) {
    var result = operation(x, y);
    return result;
}
console.log(mathOp(10, 20, function (x, y) { return x + y; }));
console.log(mathOp(10, 20, function (x, y) { return x * y; }));
