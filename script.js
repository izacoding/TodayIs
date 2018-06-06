



// ====================
// Step 1 Input
// ====================

// Store the days in a variable
// we need to create a button that shows the day of the week
function getDay() {
	var  day;

}
 



// ====================
// Step 2 Process
// ====================
// Insert your variable as your expression
// Seperate the vaule of each case
// Insert  a break to stop checking for something

switch (new Date().getDay()){

   
   case 0 :
   day = "Sunday" ;
   console.log("Today is Sunday");
   break;

  
   case 1 :
   day = "Monday" ;
   console.log("Today is Monday");
   break;

   case 2 :
   day = "Tuesday" ;
   console.log("Today is Tuesday");
   break;
   
   
   case 3 :
   day = "Wednesday" ;
   console.log("Today is Wednesday");
   break;
    
  
   case 4 :
   day = "Thursday" ;
   console.log("Today is Thursday");
    break;
   
  
   case 5 :
   day = "Friday" ;
   console.log("Today is Friday");
   break;

 
   case 6 :
   day = "Saturday" ;
   console.log("Today is Saturday");
   break;

};
document.getElementById("display").innerHTML ="Today is" + day;
console.log('Button was clicked');



// ====================
// Step 3 Output
// ====================
// put a default at the end if the case does not meet with the  stored varible




