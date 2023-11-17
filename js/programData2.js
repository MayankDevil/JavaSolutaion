/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData2.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData2 = [
            {
                problem : `1. Program to copy all elements of one array into another array`,
                solution : `
public class OnearrTOAnotherArray 
{
	public static void main(String[] args) 
	{
		int arr1[] = new int[] {1,2,3 ,4 ,5};
		int arr2[] = new int[arr1.length];
		System.out.println("Elements of First array: ");
	    for (int i = 0; i < arr1.length; i++) 
	    {
	      System.out.print(arr1[i] + " ");
	    }
	    //copying the first array to the second array
	    for (int i = 0; i < arr1.length; i++)
	    {
	        arr2[i] = arr1[i];
	    }
	    System.out.println();
	    System.out.println("Elements of Second array: ");
	    for (int i = 0; i < arr2.length; i++) 
	    {
	      System.out.print(arr2[i] + " ");
	    }
	}

}
                `,
                comeout : `1darray/7011onedarray1.png`
            },
            {
                problem : `2. Program to find the frequency of each element in the array`,
                solution : `
import java.util.HashMap;
import java.util.Map;

public class FrequencyCounter {
    public static void main(String[] args) {
        
        int[] array = {1, 2, 3, 4, 1, 2, 2, 3, 5, 4, 6, 7, 6, 8, 9, 9};

        
        Map<Integer, Integer> frequencyMap = new HashMap<>();

        
        for (int element : array) {
            
            if (frequencyMap.containsKey(element)) {
                frequencyMap.put(element, frequencyMap.get(element) + 1);
            } else {
                
                frequencyMap.put(element, 1);
            }
        }

        System.out.println("Element frequencies:");
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
                `,
                comeout : `1darray/70711Darray2.png`
            },
            {
                problem : `3. Program to left rotate the elements of an array`,
                solution : `
/*Program to left rotate the elements of an array*/

class RotateLeft {  
    public static void main(String[] args) {  
        
        int [] arr = new int [] {1, 2, 3, 4, 5}; 
            //n determine the number of times an array should be rotated 
        int n = 3;  
        //Displays original array  
        System.out.println("Original array: ");  
        for (int i = 0; i < arr.length; i++) {  
            System.out.print(arr[i] + " ");  
        }  
            
        for(int i = 0; i < n; i++){  
            int j, first;  
            //Stores the first element of the array  
            first = arr[0];  
            for(j = 0; j < arr.length-1; j++){  
                //Shift element of array by one  
                arr[j] = arr[j+1];  
            }  
            //First element of array will be added to the end  
            arr[j] = first;  
        }  
        System.out.println();  
        //Displays resulting array after rotation  
        System.out.println("Array after left rotation: ");  
        for(int i = 0; i< arr.length; i++){  
            System.out.print(arr[i] + " ");  
        }  
    }  
}  
                `,
                comeout : `1darray/7007_1dArray3.png`
            },
            {
                problem : `4. Program to print the duplicate elements of an array`,
                solution : `
import java.util.Scanner;

public class ary {

    public static void main(String[] args) {

        Scanner reader = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = reader.nextInt();

        if(num % 2 == 0)
            System.out.println(num + " is even");
        else
            System.out.println(num + " is odd");
    }
}
                `,
                comeout : `1darray/7055oneDimensionArrays4.png`
            },
            {
                problem : `5. Program to print the elements of an array`,
                solution : `
public class PrintArrayElements {
    public static void main(String[] args) {
        // Create an array of integers
        int[] numbers = {1, 2, 3, 4, 5};

        // Print the elements of the array
        System.out.println("Elements of the array:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}
                `,
                comeout : `1darray/7073_1Darray5.png`
            },
            {
                problem : `6. Program to print the elements of an array in reverse order`,
                solution : `
/*Program to print the elements of an array in reverse order*/

class ReverseArray
{
public static void main(String args[])

{

int arr[]={1,2,3,4,5,6,7,8};

System.out.println("Orignal array");
for(int i=0;i<arr.length;i++)
{

System.out.println(i);
}

System.out.println("Reverse of array");
for(int i=arr.length;i>=0;i--)
{

System.out.println(i);

}}}
                `,
                comeout : `1darray/7059onedarray6.png`
            },
            {
                problem : `7. Program to print the elements of an array present on even position`,
                solution : `
import java.util.Scanner;
class a {
    public static void main(String[] x) 
    {
        Scanner s= new Scanner(System.in);
        System.out.println("Enter the number of elements of array: ");
        int n = s.nextInt();

        int[] arr = new int[n];

        for (int i = 0; i < n; i++) 
        {
            System.out.println("Enter the element at index : "+i);
            arr[i] = s.nextInt();
        }
        // Printing the entered array
        System.out.println("Elements of an array present on even position : ");

      for(int i=0;i<arr.length;i++)
      {
        if(i%2==0)
        {
            System.out.println(arr[i]);
        }

    }
    }
}
                `,
                comeout : `1darray/7011onedarray7.png`
            },
            {
                problem : `8. Program to print the elements of an array present on odd position`,
                solution : `
class OddPosition {  
    public static void main(String[] args) {  
        //Initialize array  
        int [] arr = new int [] {1, 2, 3, 4, 5};  
        System.out.println("Elements of given array present on odd position: ");  
        //Loop through the array by incrementing value of i by 2  
        for (int i = 0; i < arr.length; i = i+2) {  
            System.out.println(arr[i]);  
        }  
    }  
}                 
                `,
                comeout : `1darray/7017Singlearry8.png`
            },
            {
                problem : `9. Program to print the largest element in an array`,
                solution : `
class LargestElement {  
    public static void main(String[] args) {  
    
        int [] arr = new int [] {25, 11, 7, 75, 56};  
        int max = arr[0];  
        for (int i = 0; i < arr.length; i++) {    
            if(arr[i] > max)  
                max = arr[i];  
        }  
        System.out.println("Largest element present in given array: " + max);  
    }  
}  
                `,
                comeout : `1darray/7003singledimensionarrays9.png`
            },
            {
                problem : `10. Program to print the smallest element in an array`,
                solution : `
class smallestelement{
    public static void main(String[] args) {
        // Create an array of integers
        int[] numbers = {5, 3, 8, 1, 7};

        // Find the smallest element in the array
        int smallest = numbers[0]; // Assume the first element is the smallest

        for (int i = 1; i < numbers.length; i++) {
            if (numbers[i] < smallest) {
                smallest = numbers[i];
            }
        }

        // Print the smallest element
        System.out.println("Smallest element in the array: " + smallest);
    }
}
                `,
                comeout : `1darray/7003singledimensionarrays10.png`
            },
            {
                problem : `11. Program to print the number of elements present in an array`,
                solution : `
public class ArrayLength{
    public static void main(String[] args) {
        // Declare and initialize an array
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        // Get the length of the array
        int arrayLength = numbers.length;
        // Print the number of elements in the array
        System.out.println("The number of elements in the array is: " + arrayLength);
    }
}
                `,
                comeout : `1darray/70661DArray11.png`
            },
            {
                problem : `12. Program to print the sum of all the items of the array`,
                solution : `
import java.util.Scanner;

public class array_12_7032{
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        System.out.println("enter the number of rows: ");
        int rows=s.nextInt();
        System.out.println("Enter the number of columns");
        int cols=s.nextInt();
        double matrix[][] = new double[rows][cols];
        System.out.println("enter the elements of matrix: ");
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                matrix[i][j] = s.nextDouble();
                }
                }
                //transposing a matrix using nested loops
                System.out.println("transpose of matrix is: ");
                for (int i = 0; i < cols; i++) {
                    for (int j = 0; j < rows; j++) {
                        System.out.print(matrix[j][i]+"   ");
                    }
                    System.out.println("\n");
                }
    }
}
                `,
                comeout : `1darray/7057_1DArray12.png`
            },
            {
                problem : `13. Program to right rotate the elements of an array`,
                solution : `
class RightRotateArray {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};

        int positionsToRotate = 2;
        rightRotate(array, positionsToRotate);

        System.out.print("Rotated Array: ");
        for (int num : array) {
            System.out.print(num + " ");
        }
    }
    private static void rightRotate(int[] arr, int positions) {
        int length = arr.length;

        positions = positions % length;

        int[] temp = new int[positions];

        for (int i = 0; i < positions; i++) {
            temp[i] = arr[length - positions + i];
        }

        for (int i = length - 1; i >= positions; i--) {
            arr[i] = arr[i - positions];
        }

        for (int i = 0; i < positions; i++) {
            arr[i] = temp[i];
        }
    }
}
                `,
                comeout : `1darray/7111SingleDimensionArrays13.png`
            },
            {
                problem : `14. Program to sort the elements of an array in ascending order`,
                solution : `
class SortAsc {    
    public static void main(String[] args) {        
            
        //Initialize array     
        int [] arr = new int [] {5, 2, 8, 7, 1};     
        int temp = 0;    
            
        //Displaying elements of original array    
        System.out.println("Elements of original array: ");    
        for (int i = 0; i < arr.length; i++) {     
            System.out.print(arr[i] + " ");    
        }    
            
        //Sort the array in ascending order    
        for (int i = 0; i < arr.length; i++) {     
            for (int j = i+1; j < arr.length; j++) {     
                if(arr[i] > arr[j]) {    
                    temp = arr[i];    
                    arr[i] = arr[j];    
                    arr[j] = temp;    
                }     
            }     
        }    
            
        System.out.println();    
            
        //Displaying elements of array after sorting    
        System.out.println("Elements of array sorted in ascending order: ");    
        for (int i = 0; i < arr.length; i++) {     
            System.out.print(arr[i] + " ");    
        }    
    }    
}    
                `,
                comeout : `1darray/7102singlearray14.png`
            },
            {
                problem : `15. Program to sort the elements of an array in descending order`,
                solution : `
import java.lang.*;
class K{    
    public static void main(String[] args) {         
        int [] arr = new int [] {5, 2, 8, 7, 1};     
        int temp = 0;      
        for (int i = 0; i < arr.length; i++) {     
            for (int j = i+1; j < arr.length; j++) {     
                if(arr[i] < arr[j]) {    
                    temp = arr[i];    
                    arr[i] = arr[j];    
                    arr[j] = temp;    
                }     
            }     
        }       
        for (int i = 0; i < arr.length; i++) {     
            System.out.print(arr[i] + " ");    
        }    
    }    
}    
                `,
                comeout : `1darray/7105_1DArray_15.png`
            },
            {
                problem : `16. Program to Find 3rd Largest Number in an array`,
                solution : `
import java.util.Arrays;
class kamal7019java1d16 {
    public static int getThirdLargest(int[] a, int total) {
        Arrays.sort(a);
        return a[total - 3];
    }

    public static void main(String args[]) {
        int a[] = {1, 2, 5, 6, 3, 2};
        int b[] = {44, 66, 99, 77, 33, 22, 55};
        System.out.println("Third Largest: " + getThirdLargest(a, 6));
        System.out.println("Third Largest: " + getThirdLargest(b, 7));
    }
}
                `,
                comeout : `1darray/kamal7019java1d16.png`
            },
            {
                problem : `17. Program to Find 2nd Largest Number in an array`,
                solution : `
import java.util.Arrays;

class SecondLargest{
    public static void main(String[] args) {
        int[] arr = {10, 2, 9, 1, 5, 6};
        
        // Sort the array in ascending order
        Arrays.sort(arr);
        
        // Print the sorted array
        System.out.println("Second largest no. in Array: " + arr[arr.length-2]);
    }
}
                `,
                comeout : `1darray/7003singledimensionarrays17.png`
            },
            {
                problem : `18. Program to Find Largest Number in an array`,
                solution : `
public class LargestInArrayExample{  
    public static int getLargest(int[] a, int total)
    {  
    int temp;  
    for (int i = 0; i < total; i++)   
            {  
                for (int j = i + 1; j < total; j++)   
                {  
                    if (a[i] > a[j])   
                    {  
                        temp = a[i];  
                        a[i] = a[j];  
                        a[j] = temp;  
                    }  
                }  
            }  
            return a[total-1];  
    }  
    public static void main(String args[]){  
    int a[]={1,2,5,6,3,2};  
    int b[]={44,66,99,77,33,22,55};  
    System.out.println("Largest: "+getLargest(a,6));  
    System.out.println("Largest: "+getLargest(b,7));  
        }
        }
                `,
                comeout : `1darray/7017Singlearray18.png`
            },
            {
                problem : `19. Program to Find 2nd Smallest Number in an array`,
                solution : `
public class SmallestNumberInAnArray {
    public static void main(String args[]){
        int temp, size;
        int array[] = {10, 20, 25, 63, 96, 57};
        size = array.length;
    
        for(int i = 0; i<size; i++ ){
            for(int j = i+1; j<size; j++){
                if(array[i]>array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                }
            }
        }
        System.out.println("2nd Smallest element of the array is:: "+array[0]);
    }
    }
                `,
                comeout : null
            },
            {
                problem : `20. Program to Find Smallest Number in an array`,
                solution : `
class Smallest
{  
public static int getSmallest(int[] a, int total){  
int temp;  
for (int i = 0; i < total; i++)   
        {  
            for (int j = i + 1; j < total; j++)   
            {  
                if (a[i] > a[j])   
                {  
                    temp = a[i];  
                    a[i] = a[j];  
                    a[j] = temp;  
                }  
            }  
        }  
        return a[0];  
}  
public static void main(String args[]){  
int a[]={1,2,5,6,3,2};  
int b[]={44,66,99,77,33,22,55};  
System.out.println("Smallest: "+getSmallest(a,6));  
System.out.println("Smallest: "+getSmallest(b,7));  
}}  
                `,
                comeout : `1darray/7003singledimensionarrays20.png`
            },
            {
                problem : `21. Program to Remove Duplicate Element in an array`,
                solution : `
public class Main {

    public static int removeduplicates(int a[], int n)
    {
        if (n == 0 || n == 1) {
            return n;
        }
    
        // creating another array for only storing
        // the unique elements
        int[] temp = new int[n];
        int j = 0;
    
        for (int i = 0; i < n - 1; i++) {
            if (a[i] != a[i + 1]) {
                temp[j++] = a[i];
            }
        }
    
        temp[j++] = a[n - 1];
    
        // Changing the original array
        for (int i = 0; i < j; i++) {
            a[i] = temp[i];
        }
    
        return j;
    }
    public static void main(String[] args)
    {
        int a[] = { 1, 1, 2, 2, 2 };
        int n = a.length;
    
        n = removeduplicates(a, n);
    
        // Printing The array elements
        for (int i = 0; i < n; i++)
            System.out.print(a[i] + " ");
    }
}
                `,
                comeout : `1darray/7011onedarray21.png`
            },
            {
                problem : `22. Program to Print Odd and Even Numbers from an array`,
                solution : `
                
//Program to Print Odd and Even Numbers from an array


class C
{
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

        System.out.println("Even numbers:");
        for (int number : numbers) {
            if (number % 2 == 0) {
                System.out.print(number + " ");
            }
        }
        System.out.println();

        System.out.println("Odd numbers:");
        for (int number : numbers) {
            if (number % 2 != 0) {
                System.out.print(number + " ");
            }
        }
        System.out.println();   
}
}
                `,
                comeout : `1darray/7101SingleDimensionArray22.png`
            },
            {
                problem : `23. How to Sort an Array in Jav`,
                solution : `
import java.util.Arrays;   
public class SortArrayExample1  
{   
public static void main(String[] args)   
{   
//defining an array of integer type   
int [] array = new int [] {90, 23, 5, 109, 12, 22, 67, 34};  
//invoking sort() method of the Arrays class  
Arrays.sort(array);   
System.out.println("Elements of array sorted in ascending order: ");  
//prints array using the for loop  
for (int i = 0; i < array.length; i++)   
{       
System.out.println(array[i]);   
}   
}  
}  
                `,
                comeout : `1darray/7070SingleDimensionArray23.png`
            }
        ]
    // programData2 : 1d array

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end