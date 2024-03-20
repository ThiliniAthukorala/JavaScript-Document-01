
// External 

console.log("I'm fine");

//Variables

var firstName="Thilini";
var lastName="Athukorala";
var age=24;
var isTrue=true;
var job,hight;

console.log(firstName);

console.log("My name is "+firstName+" "+lastName);
console.log("Age is "+age);
console.log("it is "+isTrue);

console.log(typeof(lastName));
console.log(typeof(age));
console.log(typeof(isTrue))
console.log(typeof(job));

job="Doctor";
firstName='Chathurika';

console.log("I am "+firstName+" my job is "+job);

//alert("My name is "+lastName+" Age is "+age);

//hight=prompt("What is your hight in cm");
//alert("Highit is "+hight);

//Operators

//.....single operators

var myAge,yourAge,year;

myAge=25;
yourAge=27;
year=2024;

result=year-myAge;
console.log("born in "+result);
console.log(myAge+yourAge);
console.log(myAge*yourAge);
console.log(year/myAge);
console.log(yourAge%myAge);
console.log(yourAge-myAge);

console.log(myAge**2);
console.log(myAge**3);
var a=myAge++;
var b=+myAge;

console.log("New age "+a)

//....Multiple operations


var ans1,ans2;

ans1=ans2=4;
console.log(ans2);

// Assignmennnt Operations

var Age=10;

Age +=2;
Age**=2;
console.log(Age);

var a,b,isLage;

//ansA=prompt("a value");
//ansB=prompt("b value");
//isLage=(a<b);
//alert(isLage);


// if else
var x=21;
var y=21;

if(x<y){
    console.log("It is true");
}else if(x==y){
    console.log("There are equal")
}else{
    console.log("It is fale")
}

// Logical Operators

var a=20;
var b=10;
var c=5;

if(a==10 && a==b){
    console.log("It is good");
}else if(a<10 || c>b){
    console.log("It is ok");
}else if(a!=c){
    console.log("It is nomal")
}else{
    console.log("The end");
}


// Switch case

var name1="Kasun";
var job="Professor";

switch(job.toLocaleLowerCase()){
    case'teacher':
        console.log(name1+" is a Teacher");
       break;
    
    case'doctor':
    case'professor':
        console.log(name1+" is a Doctor");
        break;
    default:
        console.log(name1+" does something");
        break;
            
}

console.log((10).toString(10));  //decimal no to decimal String
console.log((10).toString(2));   // decimal no to binary String
console.log((0b11110).toString(10)); // baibary no to decimal no
console.log(parseInt("0542",8));  // octal to decimals

