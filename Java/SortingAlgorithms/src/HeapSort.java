public class HeapSort {
    public HeapSort(int[] array){
        //sort(array);
    }

    public static void sort(int[] array) {
        Heap heap = new Heap(array);
        int index = array.length - 1;
        while(heap.getLength() > 0){
            //Since the heap.extract root is returns the root from a max heap
            //We need to add it the array in reverse order to get an ascending order sorted array.
            array[index] = heap.extractRoot();
            index--;
        }
//
    }

    private static void printArray(int[] array){
        for(int i = 0; i < array.length; i++){
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int array[] = new int[]{142, 3, 495, 2234, 559, 573, 4, 33};

        int upperBound = array.length - 1;
        System.out.print("Original Array: ");
        printArray(array);
        System.out.print("Sorted Array: ");
        sort(array);
        printArray(array);
    }
}

class Heap {
    int[] array;
    int length;

    public Heap(int array[]){
        this.array = array;
        this.length = array.length;

        buildMaxHeap();
    }

    void buildMaxHeap() {
        //at n/2 - 1 any leaf node greater than this will have no children
        // hence we only care about parent nodes that have children therefore
        // we decrement by one from (n/2 - 1).
        for(int i = ((this.length/2) - 1); i >= 0; i--){
            heapify(i);
        }
    }

    void heapify(int rootNodeIndex) {
        int maxIndex = rootNodeIndex;
        int childIndex = (rootNodeIndex*2 + 1);

        if(childIndex < length) {
            if(array[childIndex] > array[maxIndex]) {
                maxIndex = childIndex;
            }
        }

        if((childIndex + 1) < length) {
            if(array[childIndex + 1] >  array[maxIndex]){
                maxIndex = childIndex + 1;
            }
        }

        swap(array, rootNodeIndex, maxIndex);
        if (rootNodeIndex != maxIndex){
            heapify(maxIndex);
        }

    }

    void swap(int[] array, int i, int j){
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    int extractRoot() {
        int maxVal = array[0];
        array[0] = array[--length];
        heapify(0);

        return maxVal;
    }

    int getLength() {
        return length;
    }

}

