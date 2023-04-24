function printUser({name, age}: { name: string; age?: number}) {
    if (age!==undefined){
         console.log(`name: ${name}  age: ${age}`);
    } else {
        console.log(`name: ${name}`);
    }
}

let tom = {name: "Tom"};
printUser(tom);

let bob = {name: "Bob", age: 44};
printUser(bob);
