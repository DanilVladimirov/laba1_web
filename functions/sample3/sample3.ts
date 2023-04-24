function getName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
  
let name1 = getName("Іван", "Кузнецов");
console.log(name1);

let name2 = getName("Василій");
console.log(name2);
