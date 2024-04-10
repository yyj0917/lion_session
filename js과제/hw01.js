var studentScore = 72;
var letterGrade = "";


if (studentScore >= 90) {
    letterGrade = "A";
    
} else if (studentScore >= 80 && studentScore < 90) {
    letterGrade = "B";
} else if (studentScore >= 60 && studentScore < 80) {
    letterGrade = "C";
} else if (studentScore >= 40 && studentScore < 60) {
    letterGrade = "D";
} else if (studentScore < 40) {
    letterGrade = "F";
} 
console.log("학생의 점수는 ", studentScore, 
    "점이고, 레터 그레이드는 ", letterGrade, "입니다.");