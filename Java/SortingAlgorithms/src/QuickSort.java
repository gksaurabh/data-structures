public class QuickSort {
    public static void sort(int[] array){
        doQuickSort(array, 0, array.length - 1);
    }
    private static void doQuickSort(int[] array, int lowerBound, int upperBound){
        if(lowerBound < upperBound){
            int j = partition(array, lowerBound, upperBound);

            doQuickSort(array, lowerBound, j);
            doQuickSort(array, j + 1, upperBound);
        }
    }

    private static int partition(int[] array, int lowerBound, int upperBound){
        int pivot = array[lowerBound];
        int i = lowerBound;
        int j = upperBound;

        while (i < j) {
            i += 1;

            while (i <= upperBound && array[i] < pivot){
                i += 1;
            }
            while (j >= lowerBound && array[j] > pivot){
                j -= 1;
            }

            if(i < j && i <= upperBound){
                swap(array, i, j);
            }
        }

        swap(array, lowerBound, j);

        return j;
    }
    private static void swap(int[] array, int i, int j){
        if(i >= 0 && j >= 0 && i < array.length && j < array.length){
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
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
