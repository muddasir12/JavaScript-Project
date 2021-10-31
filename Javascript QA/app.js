/* Chapter - 1 (ALERT) */

// Question 1
alert("Hello Visitor");

// Question 2
 alert("Error! Please enter a valid password.")

//  Question 3
alert("Welcome to JS land... \n Happy Coding!");

// Question 4
alert("Welcome to JS Land...");
alert("Prevent this page from creating additional dialogs");

// Question 5
console.log("Hello... I can run JS through my web browser's console");


// Chapter 2

// Question 1
var username;

// Question 2
var myName = "Muddasir";

// Question 3
var message = "Hello World";
alert(message);

// Question 4
var student = "Jhon Doe ";
var age = 23;
var course = "MERN Stack Developer";
alert(student);
alert(age);
alert(course);

// Question 5
var food = "PIZZA \n PIZZ \n PIZ \n PI \n P";
alert(food);

// Question 6
var email = "muddasir.farooq786@gmail.com";
alert("My email address is " + email);

// Question 7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

//Question 8
document.write("Yah! I can write HTML content through Javascript" + "<br>");

//Question 9
var decoration = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
alert(decoration);


// Chapter 03
//Question 1
var age = 23;
alert("I am " + age + " years old");

//Question 2
var times = 12;
alert("You have visited this site " + times + " times");

//Question 3
var birthYear = 1998;
document.write("My birth year is " + birthYear + "<br>");
document.write("Data type of my declared variable is number" + "<br>")

//Question 4
name1 = "John Doe";
var product = "T-shirt(s)";
var quantity = 5;
document.write(name1 + " ordered " + quantity + " " + product + " on XYZ Clothing store" + "<br>");

//Chapter 4
//Question 1
 var one, two, three;

 //Question 2
 //Legal variable
var one;
var $125;
var _five;
var _$six;
var _$dollar;
//illegal variable
// var !illlega.;
// var ?notAllowed;
// var 1one;
// var 92five;
// var ._allow#;

// Question 3

document.write("<h1> Rules for naming JS variables </h1>  <br>");
document.write("Variable name may only contain String, Numbers, Dollor Sign, Underscore <br>");
document.write("Variable names are case sensitive <br>");
document.write("Variable names should not be JS keywords"+"<br>");

//Chapter 5


//Question 1
var one = 11;
var two = 1;
var sum = one + two;
document.write("Sum of " + one + " and " + two + " is " + sum + "<br>");

//Question 2
var one = 11;
var two = 1;
var sum = one - two;
document.write("Subtract of " + one + " and " + two + " is " + sum + "<br>");

var one = 11;
var two = 13;
var sum = one * two;
document.write("Multiplication of " + one + " and " + two + " is " + sum + "<br>");

var one = 11;
var two = 4;
var sum = one / two;
document.write("Division of " + one + " and " + two + " is " + sum + "<br>");

var one = 11;
var two = 2;
var sum = one % two;
document.write("Modulus of " + one + " and " + two + " is " + sum + "<br>");

// Question 3
var none;
document.write("Value after variable declaration is " + none + "<br>");
none = 12;
document.write("Initial value: " + none + "<br>");
++none;
document.write("Value after increment is: " + none + "<br>");
none = none + 7;
document.write("Value after addition is: " + none + "<br>");
--none;
document.write("Value after decrement is: " + none + "<br>");
none = none / 3;
document.write("The remainder is: " + none + "<br>")

// Question 4
var movieTicket = 600;
var tickets = 5;
var total = movieTicket * tickets;
document.write("Total cost to buy " + tickets + " tickets to a movie is " + total + " PKR <br>");

//Question 5
document.write("Table of 12 <br>");
document.write("12 x 1 = " + 12*1 + "<br>");
document.write("12 x 2 = " + 12*2 + "<br>");
document.write("12 x 3 = " + 12*3 + "<br>");
document.write("12 x 4 = " + 12*4 + "<br>");
document.write("12 x 5 = " + 12*5 + "<br>");
document.write("12 x 6 = " + 12*6 + "<br>");
document.write("12 x 7 = " + 12*7 + "<br>");
document.write("12 x 8 = " + 12*8 + "<br>");
document.write("12 x 9 = " + 12*9 + "<br>");
document.write("12 x 10 = " + 12*10 + "<br>");
document.write("12 x 11 = " + 12*11 + "<br>");
document.write("12 x 12 = " + 12*12 + "<br>");

//Question 6
var tempCelsius = 25;
var fahrenheit = (tempCelsius * 9/5) + 32;
var tempFahrenheit = 70;
var celsius = (tempFahrenheit - 32) * 5/9;
document.write(tempCelsius + "^C is " + fahrenheit + "^F <br>");
document.write(tempFahrenheit + "^F is " + celsius + "^C <br>");

//Question 7
var item1Price = 650;
var item2Price = 100;
var item1Quan = 3;
var item2Quan = 7;
var shippingCharges = 100;
var charges = (item1Price * item1Quan) + (item2Price * item2Quan) + shippingCharges;
document.write("Price of item 1 is " + item1Price + "<br>");
document.write("Quantity of item 1 is " + item1Quan + "<br>");
document.write("Price of item 2 is " + item2Price + "<br>");
document.write("Quantity of item 2 is " + item2Quan + "<br>");
document.write("Shipping Charges " + shippingCharges + "<br> <br>");
document.write("Total cost of your order is " + charges  + "<br>");

//Question 8
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>")
document.write("Marks Obtained: " + marksObtained + "<br>")
document.write("Percentage: " + percentage + "<br>");

//Question 9
oneDollor = 104.80;
oneSaudiRiyal = 28;
var calculations = (104.80 * 10) + (25 * 28);
document.write("Total Currency in PKR: " + calculations);

//Question 10
var number = 12;
var calculation = (((number + 5) * 10) / 2);
document.write(calculation);

//Question 11
var currentYear = 2021;
var birthYear = 1998;
var realAge = currentYear - birthYear;
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your age is: " + realAge + "<br>");

//Question 12
var r = 20;
var pi = 3.142;
var circumference = 2 * pi * r;
var area = pi * (20 * 20);
document.write("Radius of a circle: " + r + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");

//Question 13
var favouriteSnack = "Lays";
var currentAge = 23;
var maximumAge = 50;
var estimatedAmount = 100;
var total = (365 * 27) * 100;
document.write("Favourite Snack: " + favouriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
document.write("Amount of snacks per day: " + estimatedAmount + "<br>");
document.write("You will need " + total + " " + favouriteSnack + " to last you until the ripe old age of " + maximumAge + "<br>");


//Chapter 6 to 9
//Question 1
var a = 10;
document.write("The value of a is: " + a + "<br>");
document.write("<br><br>");
var preIncrement = ++a;
document.write("The value of ++a is: " + preIncrement + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br><br>");
var postIncrement = a++;
document.write("The value of a++ is: " + postIncrement + "<br>");
document.write("Now the value of is: " + a + "<br>");
document.write("<br><br>");
var preDecrement = --a;
document.write("The value of --a is: " + preDecrement + "<br>");
document.write("Now the value of a is: " + a + "<br>");
document.write("<br><br>");
var postDecrement = a--;
document.write("The value of a-- is: " + postDecrement + "<br>");
document.write("Now the value of a is: " + a + "<br>");

//Question 2
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
//           1   -  0  +  1  +  1;
document.write("Result is: " + result + "<br>");
--a // 1
--a - --b // 1 - 0 = 1
--a - --b + ++b // 1 - 0 + 1 = 2
--a - --b + ++b + b-- // 1 - 0 + 1 + 1 = 3

//Question 3
var names = prompt("What is your name", "Raza");
document.write("Hello " + names);

//Question 6
var sub1 = prompt("Enter your favourite subject");
var sub2 = prompt("Enter your boring subject");
var sub3 = prompt("Enter any subject in which you are week");
var total = 100;
var totalMarks = 300
var sub1Marks = +prompt("Enter your " + sub1 + " marks");
var sub2Marks = +prompt("Enter your " + sub2 + " marks");
var sub3Marks = +prompt("Enter your " + sub3 + " marks");
var obtainedMarks = sub1Marks + sub2Marks + sub3Marks;
var percentage = obtainedMarks / totalMarks * 100;

document.write("<table>")
    document.write("<tr>")
        document.write("<th> SUBJECT  ")
        document.write("<th> TOTAL MARKS")
        document.write("<th> OBTAINED MARKS")
        document.write("<th> PERCENTAGE")
    document.write("<tr/>")
    document.write("<tr>")
        document.write("<td>" + sub1)
        document.write("<td>" + total)
        document.write("<td>" + sub1Marks)
        document.write("<td>" + sub1Marks + "%")
    document.write("<tr/>")
    document.write("<tr>")
        document.write("<td>" + sub2)
        document.write("<td>" + total)
        document.write("<td>" + sub2Marks)
        document.write("<td>" + sub2Marks + "%")
    document.write("<tr/>")
    document.write("<tr>")
        document.write("<td>" + sub3)
        document.write("<td>" + total)
        document.write("<td>" + sub3Marks)
        document.write("<td>" + sub3Marks + "%")
    document.write("<tr/>")
    document.write("<tr>")
        document.write("<td>" )
        document.write("<td>" + totalMarks)
        document.write("<td>" + obtainedMarks)
        document.write("<td>" + percentage + "%")
    document.write("<tr/>")
document.write("<table/>")







