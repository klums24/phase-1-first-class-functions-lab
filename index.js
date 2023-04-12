// Code your solution in this file!

const returnFirstTwoDrivers = function(arrayOfDrivers){
    const firstTwo = [...arrayOfDrivers.slice(0,2)];
    return firstTwo;
}

//test output for returnFirstTwoDrivers
//console.log(returnFirstTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));


const returnLastTwoDrivers = function(arrayOfDrivers){
    const lastTwo = [...arrayOfDrivers.slice(arrayOfDrivers.length -2)]
    return lastTwo;
}





//test output for returnLastTwoDrivers
//console.log(returnLastTwoDrivers(["Antonia", "Nuru", "Amari", "Mo"]));

//selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//createFareMultiplier
function createFareMultiplier(multiplier){
    const finalFare = function(initialFare){
        return multiplier * initialFare;
    }
    return finalFare;
}
//console.log(createFareMultiplier(4)(10));

//fareDoubler()
const fareDoubler = function(initialFare){
    return createFareMultiplier(2)(initialFare);
};

//console.log(fareDoubler(10));

//fareTriple()
const fareTripler = function(initialFare){
    return createFareMultiplier(3)(initialFare);
}

//console.log(fareTripler(10));

//selectDifferentDrivers()
function selectDifferentDrivers(drivers, functionName){
    
        return functionName(drivers);
    }
     





















 