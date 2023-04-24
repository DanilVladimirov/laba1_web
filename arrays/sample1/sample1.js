function printUsers(users) {
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        console.log(user);
    }
}
function usersToString(users) {
    return users.join(", ");
}
var people = ["Tom", "Bob", "Sam"];
printUsers(people);
console.log(usersToString(people));
