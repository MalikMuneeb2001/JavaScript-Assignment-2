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

// var date=new Date();
// var string=date.toString();
// var month=string.slice(4,7);
// document.write(month);

// Q # 3

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date=new Date();
// var theDay=date.getDay();
// var today=dayNames[theDay];
// document.write("Today is " + today);

// Q # 4

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];
//   if (nameOfToday=="Sat"|| nameOfToday=="Sun")
//   {
//       document.write("It's Fun day");
//   }
//   else{
//       document.write("Working Day")
//   }

// Q # 5

// var now = new Date();
//  var theDay = now.getDate();
//  if (theDay<=15 ){
//  document.write("First 15 days")
//  }
//  else{
//     document.write("Last 15 days")
//  }

// Q # 6

// var currentDate=new Date();
// document.write("Current Date: " + currentDate + "<br>");
// var miliSeconds=currentDate.getTime();
// document.write("Elpsed miliseconds since January 1, 1970: " + miliSeconds + "<br>");
// var minutes=miliSeconds/(1000*60*60);
// document.write("Elpsed minutes since January 1, 1970: " + minutes);


// Q # 7

// var d= new Date()
// var c= d.getHours()
// if (c<12 ){
//     document.write("It's AM")
//     }
//     else{
//        document.write("It's PM")
//     }

// Q # 8

  
// var d = new Date("May 31 , 2020");
// document.write("Later Date: " + d);

// Q # 9

// var g= new Date("June 18 , 2015");
// var o=g.getTime();
// var t=new Date();
// var u=t.getTime();
// var f=u-o;
// var b=f/(1000*60*60*24);
// document.write(b+"  days are passed since 1st ramadan 2015");

// Q # 10

// var e= new Date("Dec 05 , 2015");
// document.write("Reference Date: " + e);
// var t=e.getTime();
// var o=new Date("Jan 01, 2015");
// var p=o.getTime();
// var w=t-p;
// var diff=w/1000;
// document.write("<br>"+ diff + " seconds had passed since beginning  of 2015");


// Q # 11

// var e = new Date();;;
// document.write("Current Date: " + e);
// e.setHours(e.getHours() - 1);
// document.write("<br>" +  "1 hour ago, it was "+e);

// Q # 12

// var e = new Date();;;
//  document.write("Current Date: " + e);
//  e.setFullYear(e.getFullYear() - 100);
//  document.write("<br>" +  "100 years back, it was "+e);

// Q # 13

// var yourAge=prompt("Enter your Age","19");
// var newDate=new Date();
// var year=newDate.getFullYear()-yourAge;
// document.write("Your age is " + yourAge);
// document.write("<br>" + "Your birth year is " + year);



// Q # 14


// document.write("<h1>" + "K-Electric Bill" + "</h1>");
// document.write("Customer Name: " +  "<b>" + " ABC Customer " + "</b>" + "<br>");
// var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
// var now=new Date();
// var nowMonth=now.getMonth();
// var monthName=months[nowMonth];
// document.write("Month : " +  "<b>" + monthName + "</b>" + "<br>");
// var units=410;
// var charges=16;
// var latPayment=350;
// var bill=units*charges;
// var afterdueDate=bill+latPayment;
// document.write("Number of units: " +  "<b>" + units + "</b>" + "<br>");
// document.write("Charges per unit : " +  "<b>" +  charges + "</b>" + "<br><br>");
// document.write("Net Amount payable (within Due Date): " +  "<b>" + bill + "</b>" + "<br>");
// document.write("Late Payment surcharge: " +  "<b>" + latPayment + "</b>" + "<br>");
// document.write("Gross Amount payable (after Due Date): " +  "<b>" + afterdueDate + "</b>" + "<br>");

// Chapter 35 to 438

// Q # 1


// function telltime(){
//     var a= new Date()
//     document.write(a)
// }
// telltime();

// Q # 2

// function greet(){
//     var a=window.prompt("enter your first name: ")
//     var b= window.prompt("enter your second name: ")
//     var c = a.toUpperCase()
//     var d= b.toUpperCase()
//     document.write("Welcome " +c + " "  +d + " to JS Land")

// }
// greet();

// Q # 3

// function add(num1,num2){
//     return num1+num2;
// }
// var num1=+prompt("Enter Fisr Number");
// var num2=+prompt("Enter Second Number");
// var g=add(num1,num2);
// alert(g);

// Q # 4

//  function calc(num1,opr,num2){
//      if(opr=="+"){
//          return num1 + num2;
//      }
//      else if(opr=="-"){
//          return num1-num2;
//      }
//      else if(opr=="*"){
//          return num1*num2;
//      }
//      else if(opr=="/"){
//          return num1/num2;
//      }
//      else if(opr=="%"){
//          return num1%num2;
//      }
//      else{
//          alert("Invalid Choice")
//      }
//  }
//  var num1=+prompt("Enter Fisr Number");
//  var opr=prompt("Enter Operator");
//  var num2=+prompt("Enter Second Number");
//  var g=calc(num1,opr,num2);
//  alert(g);

// Q # 5

// function sqr(a){
//     return a*a;
// }
// var t=prompt("Enter Number");
// var square=sqr(t);
// alert(square);

// Q # 6


// function factorialize(num) {
//     if (num === 0 || num === 1)
//       return 1;
//     for (var i = num - 1; i >= 1; i--) {
//       num *= i;
//     }
//     return num;
//   }
//   var t=prompt("Please Enter Number");
//  var g= factorialize(t);
// alert(g);

// Q # 7

// function counting(){
//     var first=+prompt("Please Enter First Number");
//     var end=+prompt("Please Enter Last Number");
//     for(i=first; i<=end; i++){
//         document.write(i + "<br>")
//     }
// }
// counting();


// Q # 8

// function hyp(a,b){
//     return a*a+b*b;
//     } 
// var base=+prompt("Enter Base");
// var per=+prompt("Enter perpindicular");
// var r=hyp(base,per);
// alert(r);

// Q # 9

// function area(width,height){
//      return width*height;
//      } 
//  var width=+prompt("Enter Width");
//  var height=+prompt("Enter Height");
//  var r=area(width,height);
//  alert(r);

// Q # 10
// function pal(){
//     var word=prompt("Enter Word");
//     var check="";
//      for(var i=word.length-1; i>=0; i--){
//         check +=word[i]
        
//      }
//      if(word==check){
//          alert("Palindrome Word")
//      }else{
//          alert("Word is not Palindrome word")
//      }
// }
// pal();

// Q # 11

// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }
// var string=prompt("Enter String");
// var g=toTitleCase(string);
// alert(g);

// Q # 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// var e=prompt("Enter String");
// alert(find_longest_word(e));

// Q # 13

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// var t=prompt("Enter String");
// var w=prompt("Enter word");;
// alert(char_count(t,w));


