// Javascript File
var text="";
//var i=0;
/* FOR LOOP

for (i = 0; i < 5; i++) {
    text += "The number is " + i + "\n"; 
}
/*

/* FOR IN LOOP 
var students = new Array("Gabriel", "Yohani", "Tyler", "John", "Michael", "Giang");

var x;
for (x in students) {
     text += students[x] + "\n";
}
*/

//* WHILE LOOP*/
var i=0;
while (i == 0 ) {
    text += "The number is " + i + "\n";
    i++;
}
do { 
    text += "The number is " + i + "\n";
    i++;
}
while (i < 10); *//

// DO WHILE //


/*BREAK*/

var number = 1;
var sum = 0; 
while (true) 
{
    sum += number;
    if  (number == 5) {
        break; }
        number ++;
    }

console.log(text);