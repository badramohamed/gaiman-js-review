console.log('Hello scrip.js');

let MyName= 'badra';
console.log('my name is', MyName);

//console.log('my name is, Badra);
// let -- a keyword, we are about to declare a variable 
//null is nothing on purpose 

let LastName= 'Mohamed';
console.log('last name is', LastName);

/**
 * Expression
 *  some code that evaluates to a single value 
 */
console.log(' My name is ' + MyName + '' +  LastName);
// vondolr.loh('my name is Badra Mohamed);

function add(n1, n2) {
return n1 + n2;
}
let result = add(5,7);
// let result = 12;

if(8>7){
    // if (false){}
}

let aNumberMaybe= '23';
aNumberMaybe + 2 
// '232'   -- concentration

Number(aNumberMaybe) + 2
// 25  --- addition

// NaN = not a number 

function subtract( n1, n2){
    console.log('m1, n2', n1, n2)
    return n1 - n2;
}
subtract(7);
//n1= 7
//n2= is going to equal undefined 


/**
 * conditionals 
 */
let isSsomethingTrue = MyName === 'Badra';
// let issomething true = myName ==== 'Badra';
// let isSomethingtue === true

if (isSsomethingTrue) {
    // do this stuff 
    // onsode of the code block 
}
let age ='21'
if (age > 24) {
    // still a youngin
    // do this inside of the block 
}

else if (age >25){
    // 21 is grown
}
else if (true) {

}


    // code block

function something() {
    // code block 
}


let dayOfTheWeek = 'monday';
if (dayOfTheWeek === 'monday'){
    console.log('JS Review');
}

else if (dayOfTheWeek === 'tuesday'){
    console.log('objects')
}

switch(dayOfTheWeek){
    case 'monday':
    console.log('JS review');
    break; 
    case 'tuesday':
    console.log('objects');
    break; 
    default: 
    console.log('shrug');
    break
}


// ternary: if/else and resolves to a value 
let height=55;
let message = height>50 ?

'you can ride this ride'        //if
:
'keep growing, lil one'         //else 
console.log(message);



// functions 

//* inputs (" arguments or "parameters):
// yourheight 
//dangerlevel 
function isTallEnoughToRide(yourHeight, dangerLevel){
let minHeight; 

if (dangerLevel === 'kiddie'){
minHeight = 28;
}

else if (dangerLevel === 'intense'){
    minHeight =55;
}
return yourHeight> minHeight;  

let canIRide =isTallEnoughToRide(50, 'kiddie');

function WelcomeVisitor(myName, height){
    console.log('hello ${name}');
    if (isTallEnoughToRide(height, 'kiddie')) {
        console.log('have fun!');
    }
else{
    console.log('do you know where your parents are?');
}
}




function stressRelease(){
    console.log(' YAAAHHHHHHHH ')
    }

let stresslevel = 20; 
while(stresslevel>5){
    stressRelease();
    stresslevel --;
}
}
// declaring a function
// function declartion 
function makeASentence(words) {
words.join(' ') + '.'
}

// annonymous function - u can assign to variable
//function expression 
let makeASentence2= function (words){
    return words.joi(' ') + '.';
}
// arrow function 
let makeASentence3 = ()=>{
    let makeASentence3= function (words){
        return words.joi(' ') + '.';

    }
}

let makeASentence4= words => {
    return words.join(' ') + '.'
}

// one liner!

let makeASentence5 = words => words.join ( ' ') + '.'


// calling a function
makeAsentence(['welcome', 'to', 'Gaiman']);

// log () is a method of the console obkect
console.log('yolo');

let numbers = [1, 2 ,3, 4, 5];
// push () is a method of the numbers array 
numbers.push(6);

/**
 * javascropt is: a loose / dynamic typed language 
 other languages are: stronhgly / statically typed
 */

 /**
  * arrays
  
  */
 let animals = [
     'cat',     // 0
      'dog',     //1
      'bunny'];    //2

 // access by index
 let FirstAnimal = animals [0]; // cat 
 // let LastAnimal = animals[2]; //bunny 

 let LastAnimal = animals [animals.length - 1 ];    //'bunny'
 // animals.length -1 =2 
 //animals[2]; //bunny

 for(let animal of animals){
     // animal = 'cat';
     console.log('animal is', animals);
     if (animals === 'bunny'){ // this is better
         console.log('bunny');
     }
    }
    for( let i =0; i<animals.length; i++); {
        console.log(animals[i]);
    }


    // while loops
let BigNumber= 2**20;
while(BigNumber>1){
BigNumber = BigNumber / 2;
console.log(BigNumber);
}