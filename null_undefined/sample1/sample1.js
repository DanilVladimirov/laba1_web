var userId = null;
function printId(id) {
    if (id === null) {
        console.log("користувач відсутній");
    }
    else {
        console.log("id \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430: ".concat(id));
    }
}
printId(userId);
userId = 45;
printId(userId);
