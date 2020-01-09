let val;

const today = new Date();
let birthday = new Date("03.03.1995 12:18:00");
birthday = new Date("March 03 1995");

//Get Month
val = today.getMonth();
//Get Date
val = today.getDate();
//Get Day
val = today.getDay();
//Get Year
val = today.getFullYear();
//Get Hour
val = today.getHours();
//Get Minute
val = today.getMinutes();
//Get Seconds
val = today.getSeconds();
//Get Millisendonds
val = today.getMilliseconds();
//Get Time
val = today.getTime();

//Set Month
birthday.setMonth(2);
//Set Date
birthday.setDate(12);
//Set Year
birthday.setFullYear(1995);
//Set Hour
birthday.setHours(3);
//Set Minute
birthday.setMinutes(24);
//Set Seconds
birthday.setSeconds(2);

console.log(birthday);