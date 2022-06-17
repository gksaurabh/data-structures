let SIZE = 10;


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


function generateArray(size) {
    let array = [];
    
    for(let i = 0; i < SIZE; i++) {
        array.push(randomIntFromInteraval(1,1000));
    }

    return array;
} 

function quickSort(array){
    let high = array.length - 1;
    let low = 0;
    if (low < high){
        j = partition(array);

        quickSort(low, j);
        quickSort(j + 1, high);
    }

    return array;
}

function partition(array) {
    let high = array.length - 1;
    let low = 0;
    let pivot = array[0];

    let i = low;
    let j = high;

    while (i < j){
        while (array[i] <= pivot){ 
            i++;
        }

        while (array[j] >= pivot){
            j--;
        }

        if (i < j){
            let temp = array [i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    let temp = array[low];
    array[low] = array[j];
    array[j] = temp;

    console.log("INSIDE PARTITION - J = " + j);
    // console.log(array);
    return j;
}

function doQuickSort() {
    let arr = generateArray(SIZE);
    console.log (arr);

    quickSort(arr);

    console.log ("\n********* S O R T E D   A R R A Y **********\n");
    console.log(arr);
}

doQuickSort();