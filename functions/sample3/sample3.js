function getName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var name1 = getName("Іван", "Кузнецов");
console.log(name1);
var name2 = getName("Василій");
console.log(name2);
