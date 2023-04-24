let tom: { name: string; age?: number } = { name: "Tom", age: 23 };
let bob: { name: string; age?: number } = { name: "Bob"};
 
 
function printUser(user: { name: string; age?: number }){
 
    if("age" in user){
        console.log(`Name: ${user.name} Age: ${user.age}`);
    } else {
        console.log(`Name: ${user.name}`);
    }
}

printUser(tom);
printUser(bob);
