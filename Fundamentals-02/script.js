'use strict';
/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


// ///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
};

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);
console.log(age1, age2);

// Arrow Functions
const ageCalc3 = birthYear => 2037 - birthYear;
const age3 = calcAge(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1985, 'Bob'));

// Functions calling other functions
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2,3));

// More functions
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if(retirement>0){
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1970, 'Dan'));

///////////////////////////
// Dot vs Bracket Notation

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    age: 2037 - 1991,
    job: 'Teacher',
    friends: ['Mike', 'Pete', 'Bob']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('Choose firstName, lastName, age, job, friends');
// returns answer from prompt.
// this would be returning jonas[whatever from defined jonas object.] eg jonas['job'];
if(jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.error('Wrong input')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@JonasTwitter';
console.log(jonas)

// Challenge
// print Jonas has 3 friends, best friend is Mike without hardcoding values
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, his best friend is ${jonas.friends[0]}`)

///////////////////////////////
// Object methods

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Mike', 'Pete', 'Bob'],
    hasDriversLicense: true,

    // calcAge: function() {
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // }

    // calcAge: function() {
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    handleDriversLicense: function() {
        if(!this.hasDriversLicense){
            return 'no';
        } else {
            return 'a';
        }
    },

    getSummary: function(){
        return `${jonas.firstName} is a ${jonas.calcAge()} year-old ${jonas.job}, and has ${!jonas.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// console.log(jonas['calcAge'](1991));

// Challenge
// Print Jonas is a 46-Year old teacher, and he has a driver's license
// First attempt
console.log(`${jonas.firstName} is a ${jonas.calcAge()} year-old ${jonas.job}, and has ${jonas.handleDriversLicense()} driver's license`);
// Revised attempt, more reusable (i guess?)
console.log(jonas.getSummary())

*/