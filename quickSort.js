let SIZE = 100;


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

//recursive quick sort 
function quickSort(array, lowerBound, upperBound){
    if (lowerBound < upperBound){
        j = partition(array, lowerBound, upperBound);

        quickSort(array, lowerBound, j - 1);
        quickSort(array, j + 1, upperBound);
    }

    return array;
}

//this function finds the position of the pivot value 
//the pivot value is later used as reference to split the array and recursively perfom quickSort
function partition(array, lowerBound, upperBound) {
   
    let pivot = array[lowerBound];

    let i = lowerBound;
    let j = upperBound;

    while (i < j){
        while (array[i] <= pivot){ 
            i++;
        }

        while (array[j] > pivot){
            j--;
        }

        if (i < j){
            let temp = array [i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    let temp = array[lowerBound];
    array[lowerBound] = array[j];
    array[j] = temp;

    
    return j;
}

function doQuickSort() {
    let arr = generateArray(SIZE);
    console.log (arr);

    quickSort(arr, 0, arr.length - 1);

    console.log ("\n********* S O R T E D   A R R A Y **********\n");
    console.log(arr);
}

doQuickSort();