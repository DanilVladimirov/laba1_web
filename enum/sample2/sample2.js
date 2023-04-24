var DayTime;
(function (DayTime) {
    DayTime[DayTime["Morning"] = 0] = "Morning";
    DayTime[DayTime["Evening"] = 1] = "Evening";
})(DayTime || (DayTime = {}));
;
function welcome(dayTime) {
    if (dayTime === DayTime.Morning) {
        console.log("Добрий ранок");
    }
    else {
        console.log("Добрий вечір");
    }
}
var current = DayTime.Morning;
welcome(current);
welcome(DayTime.Evening);
