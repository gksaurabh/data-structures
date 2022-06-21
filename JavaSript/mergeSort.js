//Generate a random number between min and max
function randomIntFromInteraval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//check if two arrays are equal (mainly going to be used to test whether two arrays have been sorted)
function arraysAreEqual(arrOne, arrTwo) {

    if(arrOne.length !== arrTwo.length) return false;

    for (let i = 0; i < arrOne.length; i++){
        if(arrOne[i] !== arrTwo[i]) return false;
    }
    return true;
}

//generate an array filled with random values
function generateArray(size) {
    let array = [];
    
    for(let i = 0; i < SIZE; i++) {
        array.push(randomIntFromInteraval(1,1000));
    }

    return array;
} 

