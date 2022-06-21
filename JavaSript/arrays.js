//The following file will contain an implementation of an Array class, operations, and 
//certain algorthims common with arrays. 


//Array class
class myArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    //get operation
    get(index){
        return this.data.index;
    }

    //push operation - add to the last index (length) and incriment length by 1. return array
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    //pop operation - assign last item to a variable, delete the last item, decrease length return last item.
    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    

    //delete at index
    deleteAtIndex(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    //shift items from a particular index.
    shiftItems(index){
        for(let i = index; i < this.length - 1; i++){
            this.data[i] = this.data[i + 1];
        }

        console.log(this.data[this.length - 1]);
        delete this.data[this.length - 1];
        this.length--;
    }
}


//reverse a string function
function reverse(str){
    let buffer = "";

    //This For loop here makes this method have a O(n) time complexity.
    for(let i = (str.length -1); i >= 0; i--){
        buffer += str[i];
    }
    console.log("Original string: " + str);
    console.log("Reversed string: " + buffer);  
}


let sentence = "Hi my name is Saurabh";
reverse(sentence);


function mergeSortedArrays(array1, array2){
    console.log("\n\nMerging Sorted Arrays\n\n");
    const mergedArray = [];
    let i = 0;  //This represents the index of array 1
    let j = 0;  //This represents the index of array 2


    // This is our baseline check, incase one of the arrays passed is blank
    // return the other array as the final product.
    if(array1.length === 0){
        return array2;
    }

    if(array2.length === 0){
        return array1;
    }

    //While there is an element in both arrays
    while(array1[i] || array2[j]){
        console.log('Comparing the follwoing: ', array1[i], ' ', array2[j]);

        //check if array2 at index j is undefined (final case solution) or check if arr1 < arr2
            //if true, then push array1 to mergedArray
            //else, push array2 element to mergedArray
        if(array2[j] === undefined || array1[i] < array2[j]){
            mergedArray.push(array1[i]);
            i++;
        }
        else{
            mergedArray.push(array2[j]);
            j++;
        }
    }
    
    console.log('\nHere is the final array: \n',mergedArray);
    return mergedArray;
}


mergeSortedArrays([0,3,4,31], [3,4,6]);