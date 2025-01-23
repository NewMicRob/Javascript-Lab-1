const studentName = "Steve";//variable sting 
const studentAge = 20; // integer/number
let isEnrolled = true;// sets boolean variable
Boolean(isEnrolled);//boolean

let math = 88;
let science = 87;
let english = 86;
let gradeTotal = (math + science + english);
let gradeAverage = (gradeTotal / 300);

Boolean(mathGrade = (math > 50));
Boolean(scienceGrade = (science < 50));

const array = ["Math","Science","English"];//Array but also object?
let classes = "array";
classes[0] = "Math";//Array output
classes[1] = "Science";
classes[2] = "English";

var msg1 = `Students name is ${studentName}.
${studentName} is ${studentAge}.
Is enrolled:${isEnrolled}.`;

var msg2 = `${studentName} is enrolled in ${array}`;

console.log(msg1);
console.log(msg2);

const person = { //Object but also an array?
    firstName: "Steve",
    middleInital: "M",
    lastName: "Akenson",
    age: 20,
    gradeAverage: 87,
};

let fullName = (person.firstName + person.middleInitial + person.lastName);


var msg3 = "Student info: Name Steve M Akerson, age 20, grade average is 87.";
console.log(msg3);

console.log(gradeAverage);
//change msg to ask if grade is over 50?
console.log(mathGrade);

console.log(scienceGrade);

console.log(studentName == "Aston" || studentName == "Steve"); // OR operation is used - is the student's name Aston or Steve, this returns true because at least one of the statements is true "Steve". 
