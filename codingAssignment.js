let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //Set ages array

function subtractAges (ages){
    return ages[ages.length -1] - ages[0];
} // function for subtrating last and first age. 

ages.push(30); //adding new age to array

// console.log(subtractAges(ages));

function averageAge(ages){ //finding average age.
    let averageAgeValue = 0;
    for (i = 0; i <= ages.length -1; i++){
        averageAgeValue = averageAgeValue + ages[i];
       }
    averageAgeValue = averageAgeValue / ages.length;
    console.log(averageAgeValue);
    return averageAgeValue;
} 

(averageAge(ages));


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //set names array

function findAverageNameLength (names){ //finding average name length.
    let averageNameLength = 0;
    for (i = 0; i <= names.length -1; i++){
        averageNameLength = averageNameLength + names[i].length;
    }
    averageNameLength = averageNameLength / names.length;
    console.log(averageNameLength);
    return averageNameLength;
}

function addNamesTogether(names) {//adding names together. with spaces. 
    let currentName = '';
    for (i = 0; i <= names.length-1; i++){
    currentName = currentName + ' ' + names[i];
    }
    console.log(currentName);
    return currentName;
}

(findAverageNameLength(names));
(addNamesTogether(names));

function getNameLengths (names) { //function will get the length of each name. 
    let nameLengths = [];
    for (i = 0; i <= names.length-1; i++){
        nameLengths[i] = names[i].length; 
    }
    console.log(nameLengths);
    return nameLengths;
}

(getNameLengths(names));

function sumOfNames (names){ //function will add the sum of the characters in the names. 
    let nameSum = 0;
    let namesLengths = getNameLengths(names);
    for (i = 0; i <= namesLengths.length-1; i++){
        nameSum = nameSum + namesLengths[i];
    }
    console.log(nameSum);
    return nameSum;
}

sumOfNames(names);

function multiplyWords (word, n){//function for multiplying input word.
    let statement = '';
    for (i = 1; i <= n; i++){
        statement = statement + word;
    }
    console.log(statement);
    return statement;
}

multiplyWords('Howdy' , 5);//test on function

function makeFullName(firstName, lastName){//Function for making a full name.
    return firstName + ' ' + lastName;
}
console.log(makeFullName('Jacob', 'Hornsby'));//test on making a full name.

let numbers = [2, 4, 6, 8, 10, 90, 15];

function addNumbers(numbers){ // function that will return true because the sum is over 100. 
    let counter = 0;
    for (i = 0; i <= numbers.length-1; i++){
        counter = counter + numbers[i];
    }
    if (counter > 100){
        console.log(true);
        return true;
    }
}
addNumbers(numbers);

function findAverageArrayValue(numbers){//function that will find the average of a set of numbers. 
    let counter = 0;
    for (i = 0; i <= numbers.length-1; i++){
        counter = counter + numbers[i];
    }
    counter = counter / numbers.length;
    console.log(counter);
    return counter;
}
findAverageArrayValue(numbers); 

function addArrays(array1, array2){//function for adding 2 arrays and comparing the average. 
    let averageArray1 = findAverageArrayValue(array1);
    let averageArray2 = findAverageArrayValue(array2);
    if(averageArray1 > averageArray2){
        return true;
    }else{
        return false;
    }
}
console.log(addArrays(numbers, ages));//test with existing arrays.

function willBuyDrink (isHotOutside, moneyInPocket){//function to check if we can buy a drink. 
    if(isHotOutside === true && moneyInPocket > 10.50){
        return true;
    }
    else{
        return false;
    }
}
console.log(willBuyDrink(true, 10));//test to see if we can buy the drink. 

function willBuyHouse (creditScore, haveDownPayment){//function for testing if we are able to buy a home. I created this because I am a Realtor and its what I know. 
    if(creditScore > 620 && haveDownPayment === true){
        return 'We are buying it.'
    }
    else{
        return "We are not buying it."
    }
}
console.log(willBuyHouse(700, true));