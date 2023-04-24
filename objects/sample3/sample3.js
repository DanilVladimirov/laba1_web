function printUser(_a) {
    var name = _a.name, age = _a.age;
    if (age !== undefined) {
        console.log("name: ".concat(name, "  age: ").concat(age));
    }
    else {
        console.log("name: ".concat(name));
    }
}
var tom = { name: "Tom" };
printUser(tom);
var bob = { name: "Bob", age: 44 };
printUser(bob);
