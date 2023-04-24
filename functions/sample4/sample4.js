function getName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Іванов"; }
    return firstName + " " + lastName;
}
var name1 = getName("Іван", "Кузнецов");
console.log(name1);
var name2 = getName("Василій");
console.log(name2);
