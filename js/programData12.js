/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData12.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData12 = [
            {
                problem : `1. Write a Java program to create an interface Shape with the getArea() method. Create three classes Rectangle, Circle, and Triangle that implement the Shape interface. Implement the getArea() method for each of the three classes.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `2. Write a Java program to create a Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides speak() to print "Dog is barking".`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `3. Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `4. Write a Java programming to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `5. Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `6. Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `7. Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `8. Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `9. Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `10. Write a Java program to create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `11. Write a Java program to create an interface Sortable with a method sort (int[] array) that sorts an array of integers in descending order. Create two classes QuickSort and MergeSort that implement the Sortable interface and provide their own implementations of the sort() method.`,
            solution : `
interface Sortable
{
    void sort(int[] array);
}

class QuickSort implements Sortable
{
    // @Override
    public void sort(int[] array)
    {
        quickSort(array, 0, array.length - 1);
    }
    private void quickSort(int[] array, int low, int high)
    {
        if (low < high)
        {
            int pivotIndex = partition(array, low, high);
            quickSort(array, low, pivotIndex - 1);
            quickSort(array, pivotIndex + 1, high);
        }
    }
    private int partition(int[] array, int low, int high)
    {
        int pivot = array[high];
        int i = low - 1;
        for (int j = low; j < high; j++)
            if (array[j] >= pivot) {
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }

        int temp = array[i + 1];
        array[i + 1] = array[high];
        array[high] = temp;
        return i + 1;
    }
}

class MergeSort implements Sortable
{
    // @Override
    public void sort(int[] array)
    {
        mergeSort(array, 0, array.length - 1);
    }
    private void mergeSort(int[] array, int left, int right)
    {
        if (left < right)
        {
            int mid = left + (right - left) / 2;
            mergeSort(array, left, mid);
            mergeSort(array, mid + 1, right);
            merge(array, left, mid, right);
        }
    }
    private void merge(int[] array, int left, int mid, int right)
    {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] leftArray = new int[n1];
        int[] rightArray = new int[n2];

        for (int i = 0; i < n1; i++)
        {
            leftArray[i] = array[left + i];
        }
        for (int j = 0; j < n2; j++)
        {
            rightArray[j] = array[mid + 1 + j];
        }
        int i = 0, j = 0, k = left;
        
        while (i < n1 && j < n2)
        {
            if (leftArray[i] >= rightArray[j]) {
                array[k] = leftArray[i];
                i++;
            } else {
                array[k] = rightArray[j];
                j++;
            }
            k++;
        }
        while (i < n1)
        {
            array[k] = leftArray[i];
            i++;
            k++;
        }
        while (j < n2)
        {
            array[k] = rightArray[j];
            j++;
            k++;
        }
    }
}

class Test
{
    public static void main(String[] args)
    {
        int[] arr = {5, 1, 9, 3, 7, 6};
        
        Sortable quickSort = new QuickSort();
        quickSort.sort(arr);
        System.out.print("QuickSort: ");
        printArray(arr);

        int[] arr2 = {5, 1, 9, 3, 7, 6};

        Sortable mergeSort = new MergeSort();
        mergeSort.sort(arr2);
        System.out.print("MergeSort: ");
        printArray(arr2);
    }
    private static void printArray(int[] array)
    {
        for (int num : array) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
            `,
            comeout : ``
            }
        ]
    // programData12 : interfaces
}
catch (error)
{
    console.log(`${error}`)    
}
// the end