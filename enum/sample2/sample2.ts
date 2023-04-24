enum DayTime { 
    Morning, 
    Evening
};

function welcome(dayTime: DayTime){
     
    if (dayTime === DayTime.Morning){
        console.log("Добрий ранок");
    } else {
        console.log("Добрий вечір");
    }
}

let current: DayTime = DayTime.Morning;

welcome(current);
welcome(DayTime.Evening);
