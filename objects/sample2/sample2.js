var tom = { name: "Tom", age: 23 };
var bob = { name: "Bob" };
function printUser(user) {
    if ("age" in user) {
        console.log("Name: ".concat(user.name, " Age: ").concat(user.age));
    }
    else {
        console.log("Name: ".concat(user.name));
    }
}
printUser(tom);
printUser(bob);
