let userId: number|null = null;
 
function printId(id: number|null){
    if (id === null) {
        console.log("користувач відсутній");
    } else {
        console.log(`id користувача: ${id}`);
    }
}

printId(userId)
userId = 45;
printId(userId);
