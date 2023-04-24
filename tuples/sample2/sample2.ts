function printMarks(marks: [string, ...number[]]){
     
    for(const mark of marks){
        console.log(mark);
    }
}

let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
let physics: [string, ...number[]] = ["Physics", 5, 5, 5];
 
printMarks(math);
printMarks(physics);
