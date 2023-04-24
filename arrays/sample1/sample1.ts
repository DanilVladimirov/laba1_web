function printUsers(users: readonly string[]) {
    for(const user of users){
        console.log(user);
    }
}
 
function usersToString(users: ReadonlyArray<string>): String{
    
    return users.join(", ");
}
 
const people: readonly string[]= ["Tom", "Bob", "Sam"];
 
printUsers(people);
console.log(usersToString(people));
