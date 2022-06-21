public class MergeSort {
    public static void sort(int[] array){
        doMergeSort(array, 0, array.length - 1);
    }
    private static void doMergeSort(int[] array, int lowerIndex, int upperIndex){
        if(upperIndex <= lowerIndex) return;

        int midIndex = (upperIndex + lowerIndex)/2;

        doMergeSort(array, lowerIndex, midIndex);
        doMergeSort(array, midIndex + 1, upperIndex);
        merge(array, lowerIndex, midIndex, upperIndex);
    }

    private static void merge(int[] array, int lowerIndex, int midIndex, int upperIndex){

        int leftArr[] = new int[midIndex - lowerIndex + 1];
        int rightArr[] = new int[upperIndex - midIndex];

        //split the main array into two separate arrays by copying from the original array.
        copyArray(array, leftArr, lowerIndex);
        copyArray(array, rightArr, midIndex + 1);

        int left = 0;
        int right = 0;

        // Once the two arrays are split, we copy them back to the original array while they are getting sorted;
        for (int i = lowerIndex; i < upperIndex + 1; i++) {

            // As long as the index is within bounds for both of the split arrays
            // then compare the two values of the same index in left Array and right Array
            // and push whichever one is smaller first. increment left or right by 1 depeneding on
            // where the smaller value came from
            if (left < leftArr.length && right < rightArr.length) {
                if (leftArr[left] < rightArr[right]) {
                    array[i] = leftArr[left];
                    left++;
                } else {
                    array[i] = rightArr[right];
                    right++;
                }
            } else if (left < leftArr.length) {
                // If all elements have been copied from the right array then copy left array
                array[i] = leftArr[left];
                left++;
            } else if (right < rightArr.length) {
                // If all elements have been copied from the left array then copy the right array.
                array[i] = rightArr[right];
                right++;
            }
        }
    }

    // Copy array 1 onto array 2 with a certain index as a reference point
    private static void copyArray(int[] array1, int[] array2, int index){
        //if(array1.length != array2.length) return;

        for(int i = 0; i < array2.length; i++){
            array2[i] = array1[i + index];
        }
    }

    private static void printArray(int[] array){
        for(int i = 0; i < array.length; i++){
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] array = new int[]{142, 3, 495, 2234, 559, 573, 4, 33};

        int upperBound = array.length - 1;
        System.out.print("Original Array: ");
        printArray(array);
        System.out.print("Sorted Array: ");
        sort(array);
        printArray(array);
    }


}
