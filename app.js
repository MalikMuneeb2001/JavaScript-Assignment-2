// Chapter 21 to 25

// Q # 1

//var firstName=prompt("Enter Your First Name");
//var lastName=prompt("Enter Your Last Name");
//var fullName=firstName+ " " + lastName;
//alert("Welcome " + fullName );


// Q # 2

//var mobilePhone=prompt("Enter Your Favourite Mobile Name");
//var length=mobilePhone.length;
//document.write("My favorite phone is: " + mobilePhone + "<br>");
//for(i=length; i<=length; i++){
//    document.write("Length of string: " + i)
//}

// Q # 3


//var string="Pakistani";
//var index=string.indexOf("n");
//document.write("String: " + string + "<br>");
//document.write("Index of 'n': " + index);

// Q # 4

//var string="Hello World";
//var index=string.lastIndexOf("l");
//document.write("String: " + string + "<br>");
//document.write("Last index of 'l': " + index);

// Q # 5

//var string="Pakistani";
//var index=string.charAt(3);
//document.write("String: " + string + "<br>");
//document.write("Charachter at index '3': " + index);


// Q # 6


//var firstName=prompt("Enter Your First Name");
//var lastName=prompt("Enter Your Last Name");
//var fullName=firstName + " ".concat(lastName);
//alert("Welcome " + fullName );

// Q # 7

//var city ="Hyderabad";
//var replace=city.replace("Hyderabad","Islamabad");
//document.write("City: " + city + "<br>");
//document.write("After replacement: " + replace);

// Q # 8

//var message = "Ali and Sami are best friends. They play cricket and football together";
//var replace=message.replace(/and/g,"&");
//alert(replace);


// Q # 9

//var string="472";
//var number=parseInt(string);
//document.write("Value: " + string + "<br>" + "Type: " + "String" + "<br>");
//document.write("Value: " + number + "<br>" + "Type: " + "Number" + "<br>");


// Q # 10;

//var lowerCase=prompt("Enter any word");
//var upperCase=lowerCase.toLocaleUpperCase();
//alert(upperCase);

// Q # 11


//var input=prompt("Input");
//var g=input.charAt(0).toUpperCase();
//var o=input.slice(1).toLowerCase();
//var p=g.concat(o);
//document.write("User input: " + input + "<br>");
//document.write("Title case: " + p);

// Q # 12

// var a=35.36;
// var t=a.toString().split(".").join("");
// document.write("Number: " + a + "<br>");
// document.write("Result: " + t);

// Q # 13

// var string=prompt("Enter Username");
// var specialChars = "!@.,";
//     for(i = 0; i < specialChars.length;i++){
//         if(string.indexOf(specialChars[i]) !=-1){
//             alert("Please enter a valid username")
//         } 
//     }
  

// Q # 14

// var input=prompt("Welcome to ABC bakery.What do you want to order sir/mam?");
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var B=input.toLowerCase();
// if(A.indexOf(B)!=-1){
//     document.write("<h1>" + input + " " + "is availible at index " + A.indexOf(B) + " " + "in our bakery" +"</h1>")
// }
// else{
//     document.write("<h1>" + "We are sorry " + input + " " +   "is not availible " + "in our bakery" +"</h1>")
// }

// Q # 15

  
// var input=prompt("Please Enterd password equal to and greater than 6 charachters and not begin start with any symbol,special charachter or number.");
// var patt1 = /^[a-zA-Z].*[0-9 a-z]{6}/g
// var result = input.match(patt1);
// if(input==result){
//     alert("Excellent!");
// }
// else{
//     document.write("Invalid, Please enter valid password that follow these three requirements." + "<br>" + "1: " + "Password should contain alphabets and numbers" + 
//     "<br>" + "2: " + " Password should not start with a number" + "<br>" + "3: " + 
//     "Password must at least 6 characters long")
// }

// Q # 16

// var university ="University of Karachi";
// var arr=university.split();
// for(i=0; i<=university.length-1; i++){
//        document.write(university[i] + "<br>")
//    }

// Q # 17

// var input=prompt("Input");
// var t=input.charAt(input.length-1);
// document.write("User input: " + input + "<br>" + "Last charachter of input: " + t);


// Q # 18

// var s = "The quick brown fox jumps over the lazy dog";
// var h=s.toLowerCase(); 
// var f = "the"; 
// var r = h.split(f).length - 1; 
// document.write("Text: " + s + "<br>" + "There are " + r + " occurrences of the word 'the'");


//  Chapter 26 to 30

// Q # 1

// var a= 3.45214
// var b= Math.round(a);
// document.write("<h1>" + "number: "+a)
// document.write("<br>"+"round off value: "+b)
// var c=Math.ceil(a)
// document.write("<br>"+"ceil value: "+c)
// var d=Math.floor(a)
// document.write("<br>"+"floor value: "+d + "</h1>")

// Q # 2

// var a=window.prompt("enter -ve float number")
// var b= Math.round(a);
// document.write("number: "+a)
// document.write("<br>"+"round off value: "+b)
// var c=Math.ceil(a)
// document.write("<br>"+"ceil value: "+c)
// var d=Math.floor(a)
// document.write("<br>"+"floor value: "+d)

// Q # 3


// var input=prompt("Enter number");
// var abs= Math.abs(input);
// document.write("The absolute value of " + input + " is " + abs)

// Q # 4


// var rand=(Math.floor(Math.random()*4)+1);
// document.write("Random dice value: " + rand);

// Q # 5

// var a=Math.floor( Math.random()*2)+1;
// document.write(+a+"<br>")
// if(a===1){
//     document.write("Random coin value: Heads")
// }
// if(a===2){
//     document.write("Random coin value: Tails")
// }

// Q # 6

// var randomNum ;
// randomNum = Math.ceil(Math.random() * 100);
// document.write("Random number between 1 and 100: " + randomNum)


// Q # 7

  
// var a =prompt("Enter your weight in killograms");
// var c= parseFloat(a);
// document.write("The weight of user is " + c + " killograms")

// Q # 8

// var a=["1","2","5","7"];
// var b=prompt("Enter a number between 1 to 10");
// for(i=0; i<=a.length-1; i++){
//     if(a[i]==b){
//         var g=a[i];
//     }
// }
// if(g==b){
//     alert("Congratulations! You win");
// }
// else{
//     alert("Try again")
// }


// Chapter 31 to 34

// Q # 1

// var date=new Date();
// document.write(date);

// Q # 2

