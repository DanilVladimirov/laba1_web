function getName(firstName: string, lastName: string="Іванов") {
     
    return firstName + " " + lastName;
}
 
let name1 = getName("Іван", "Кузнецов");
console.log(name1);

let name2 = getName("Василій");
console.log(name2);
