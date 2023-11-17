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
                solution : `
interface Shape {
    double getArea();
}

class Rectangle implements Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    
    public double getArea() {
        return length * width;
    }
}

class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

class Triangle implements Shape {
    private double base;
    private double height;

    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    
    public double getArea() {
        return 0.5 * base * height;
    }
}

public class interfaces1_7024 {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(7, 5);
        Circle circle = new Circle(3.5);
        Triangle triangle = new Triangle(4.5, 6);

        System.out.println("Rectangle Area: " + rectangle.getArea());
        System.out.println("Circle Area: " + circle.getArea());
        System.out.println("Triangle Area: " + triangle.getArea());
    }
}
                `,
                comeout : null
            },
            {
                problem : `2. Write a Java program to create a Animal interface with a method called bark() that takes no arguments and returns void. Create a Dog class that implements Animal and overrides speak() to print "Dog is barking".`,
                solution : `
interface Animal {
    // Declare the abstract method "bark" that classes implementing this interface must provide
    void bark();
}
// Dog.java
// Class Dog

// Declare the Dog class, which implements the Animal interface
class Dog implements Animal {
    // Implement the "bark" method required by the Animal interface
    @Override
    public void bark() {
        // Print a message indicating that the Dog is barking
        System.out.println("Dog is barking!");
    }
}
public class interface_2_7032  {
    public static void main(String[] args) {
        // Create an instance of the Dog class
        Dog dog = new Dog();
        
        // Call the "bark" method on the Dog instance
        dog.bark();
    }
}
                `,
                comeout : null
            },
            {
                problem : `3. Write a Java program to create an interface Flyable with a method called fly_obj(). Create three classes Spacecraft, Airplane, and Helicopter that implement the Flyable interface. Implement the fly_obj() method for each of the three classes.`,
                solution : `
// Flyable interface
interface Flyable {
    void fly_obj();
}

// Spacecraft class implementing Flyable interface
class Spacecraft implements Flyable {
    @Override
    public void fly_obj() {
        System.out.println("Spacecraft is flying in space.");
    }
}

// Airplane class implementing Flyable interface
class Airplane implements Flyable {
    @Override
    public void fly_obj() {
        System.out.println("Airplane is flying in the sky.");
    }
}

// Helicopter class implementing Flyable interface
class Helicopter implements Flyable {
    @Override
    public void fly_obj() {
        System.out.println("Helicopter is flying in the air.");
    }
}

class fly{
    public static void main(String[] args) {
        // Create objects of each class and call fly_obj() method
        Spacecraft sc = new Spacecraft();
        Airplane ap = new Airplane();
        Helicopter hc = new Helicopter();

        // Call fly_obj() method for each object
        sc.fly_obj();
        ap.fly_obj();
        hc.fly_obj();
    }
}
                `,
                comeout : null
            },
            {
                problem : `4. Write a Java programming to create a banking system with three classes - Bank, Account, SavingsAccount, and CurrentAccount. The bank should have a list of accounts and methods for adding them. Accounts should be an interface with methods to deposit, withdraw, calculate interest, and view balances. SavingsAccount and CurrentAccount should implement the Account interface and have their own unique methods.`,
                solution : `
                
                `,
                comeout : null
            },
            {
                problem : `5. Write a Java program to create an interface Resizable with methods resizeWidth(int width) and resizeHeight(int height) that allow an object to be resized. Create a class Rectangle that implements the Resizable interface and implements the resize methods.`,
                solution : `
// Define the Resizable interface
interface Resizable {
    void resizeWidth(int width);
    void resizeHeight(int height);
}

// Implement the Resizable interface in the Rectangle class
class Rectangle implements Resizable {
    private int width;
    private int height;

    // Constructor
    public Rectangle(int width, int height) {
        this.width = width;
        this.height = height;
    }

    // Implement the resizeWidth method
    public void resizeWidth(int width) {
        this.width = width;
    }

    // Implement the resizeHeight method
    public void resizeHeight(int height) {
        this.height = height;
    }

    // Getters for width and height
    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }
}

// Main class to test the Rectangle class
class Main {
    public static void main(String[] args) {
        // Create a Rectangle object
        Rectangle rectangle = new Rectangle(10, 20);

        // Print the initial width and height
        System.out.println("Initial Width: " + rectangle.getWidth());
        System.out.println("Initial Height: " + rectangle.getHeight());

        // Resize the width and height
        rectangle.resizeWidth(15);
        rectangle.resizeHeight(25);

        // Print the updated width and height
        System.out.println("Updated Width: " + rectangle.getWidth());
        System.out.println("Updated Height: " + rectangle.getHeight());
    }
}
                `,
                comeout : null
            },
            {
                problem : `6. Write a Java program to create an interface Drawable with a method draw() that takes no arguments and returns void. Create three classes Circle, Rectangle, and Triangle that implement the Drawable interface and override the draw() method to draw their respective shapes.`,
                solution : `
                // Drawable.java

// Declare the Drawable interface
interface Drawable {
    // Declare the abstract method "draw" that classes implementing this interface must provide
    void draw();
} 

// Circle.java

// Import necessary libraries for graphics and user interface
import java.awt.*;
import javax.swing.*;

// Declare the Circle class, which implements the Drawable interface
class Circle implements Drawable {
    // Implement the "draw" method required by the Drawable interface
    public void draw() {
        // Create a new JFrame for displaying the circle
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 400);
        frame.setVisible(true);

        // Create a JPanel for custom drawing
        JPanel panel = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                // Set the drawing color to red and fill an oval
                g.setColor(Color.RED);
                g.fillOval(100, 100, 200, 200);
            }
        };

        // Add the panel to the frame
        frame.add(panel);
    }
}
// Rectangle.java

// Import necessary libraries for graphics and user interface
import java.awt.*;
import javax.swing.*;

// Declare the Rectangle class, which implements the Drawable interface
class Rectangle implements Drawable {
    // Implement the "draw" method required by the Drawable interface
    public void draw() {
        // Create a new JFrame for displaying the rectangle
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 400);
        frame.setVisible(true);

        // Create a JPanel for custom drawing
        JPanel panel = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                // Set the drawing color to blue and fill a rectangle
                g.setColor(Color.BLUE);
                g.fillRect(100, 100, 200, 200);
            }
        };

        // Add the panel to the frame
        frame.add(panel);
    }
} 
// Triangle.java

// Import necessary libraries for graphics and user interface
import java.awt.*;
import javax.swing.*;

// Declare the Triangle class, which implements the Drawable interface
class Triangle implements Drawable {
    // Implement the "draw" method required by the Drawable interface
    public void draw() {
        // Create a new JFrame for displaying the triangle
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(400, 400);
        frame.setVisible(true);

        // Create a JPanel for custom drawing
        JPanel panel = new JPanel() {
            @Override
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                // Set the drawing color to green and fill a polygon
                g.setColor(Color.GREEN);
                int[] xPoints = {
                    200,
                    100,
                    300
                };
                int[] yPoints = {
                    100,
                    300,
                    300
                };
                g.fillPolygon(xPoints, yPoints, 3);
            }
        };

        // Add the panel to the frame
        frame.add(panel);
    }
}
// Main.java

// Import necessary libraries for graphics and user interface
import java.awt.*;
import javax.swing.*;

// Declare the Main class
class Interfaces_6 {
    public static void main(String[] args) {
        // Create instances of Drawable objects, which are Circle, Rectangle, and Triangle
        Drawable circle = new Circle();
        Drawable rectangle = new Rectangle();
        Drawable triangle = new Triangle();

        // Call the "draw" method to display each shape
        circle.draw();
        rectangle.draw();
        triangle.draw();
    }
}
                `,
                comeout : null
            },
            {
                problem : `7. Write a Java program to create an interface Sortable with a method sort() that sorts an array of integers in ascending order. Create two classes BubbleSort and SelectionSort that implement the Sortable interface and provide their own implementations of the sort() method.`,
                solution : `
interface Sortable {
    void sort(int[] arr);
}

class BubbleSort implements Sortable {
    @Override
    public void sort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            // If no two elements were swapped in inner loop, the array is already sorted
            if (!swapped) {
                break;
            }
        }
    }
}

class SelectionSort implements Sortable {
    @Override
    public void sort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            // Swap the found minimum element with the first element
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

public class SortExample {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        Sortable bubbleSort = new BubbleSort();
        bubbleSort.sort(arr);
        System.out.println("Sorted using Bubble Sort: " + java.util.Arrays.toString(arr));

        int[] arr2 = {64, 34, 25, 12, 22, 11, 90};

        Sortable selectionSort = new SelectionSort();
        selectionSort.sort(arr2);
        System.out.println("Sorted using Selection Sort: " + java.util.Arrays.toString(arr2));
    }
}
                `,
                comeout : null
            },
            {
                problem : `8. Write a Java program to create an interface Playable with a method play() that takes no arguments and returns void. Create three classes Football, Volleyball, and Basketball that implement the Playable interface and override the play() method to play the respective sports.`,
                solution : `
interface Sortable {
    void sort(int[] arr);
}

class BubbleSort implements Sortable {
    @Override
    public void sort(int[] arr) {
        int n = arr.length;
        boolean swapped;
        for (int i = 0; i < n - 1; i++) {
            swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap arr[j] and arr[j+1]
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
            // If no two elements were swapped in inner loop, the array is already sorted
            if (!swapped) {
                break;
            }
        }
    }
}

class SelectionSort implements Sortable {
    @Override
    public void sort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            // Swap the found minimum element with the first element
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

public class SortExample {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};

        Sortable bubbleSort = new BubbleSort();
        bubbleSort.sort(arr);
        System.out.println("Sorted using Bubble Sort: " + java.util.Arrays.toString(arr));

        int[] arr2 = {64, 34, 25, 12, 22, 11, 90};

        Sortable selectionSort = new SelectionSort();
        selectionSort.sort(arr2);
        System.out.println("Sorted using Selection Sort: " + java.util.Arrays.toString(arr2));
    }
}
                `,
                comeout : null
            },
            {
                problem : `9. Write a Java program to create an interface Searchable with a method search(String keyword) that searches for a given keyword in a text document. Create two classes Document and WebPage that implement the Searchable interface and provide their own implementations of the search() method.`,
                solution : `
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.Scanner;

interface Searchable
{
    public void search(String keywordss);
}
class Document implements Searchable
{
    public void search(String keywordss)
    {
        String keyword = "your_keyword_here"; // Replace with the keywordss you want to search for
        String filePath = "data.txt"; // Replace with the path to your text document

        try {
            BufferedReader reader = new BufferedReader(new FileReader(filePath));
            String line;
            int lineNumber = 0;

            while ((line = reader.readLine()) != null) {
                lineNumber++;
                if (line.contains(keywordss)) {
                    System.out.println("Found '" + keywordss + "' on line " + lineNumber + ": " + line);
                }
            }

            reader.close();
        } catch (IOException e) {
            System.err.println("An error occurred while reading the file: " + e.getMessage());
        }
    }
}
class WebPage implements Searchable
{
    public void search(String keywordss)
    {
         Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the URL of the web page: ");
        String urlString = scanner.nextLine();
        System.out.print("Enter the keyword to search for: ");
        String keyword = scanner.nextLine();

        try {
            // Create a URL object to represent the web page
            URL url = new URL(urlString);

            // Open a connection to the URL
            BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
            String line;
            int lineNumber = 0;
            int keywordCount = 0;

            while ((line = reader.readLine()) != null) {
                lineNumber++;
                if (line.contains(keyword)) {
                    keywordCount++;
                    System.out.println("Found '" + keyword + "' on line " + lineNumber + ": " + line);
                }
            }

            reader.close();

            if (keywordCount == 0) {
                System.out.println("Keyword '" + keyword + "' not found on the web page.");
            } else {
                System.out.println("Found '" + keyword + "' " + keywordCount + " times on the web page.");
            }
        } catch (IOException e) {
            System.err.println("An error occurred while accessing the web page: " + e.getMessage());
        }
    }
}
class check {
    public static void main(String[] args) {
        Document d = new Document();
        WebPage w = new WebPage();
        d.search("one");
        w.search("one");
    }
}
                `,
                comeout : null
            },
            {
                problem : `10. Write a Java program to create an interface Encryptable with methods encrypt (String data) and decrypt (String encryptedData) that define encryption and decryption operations. Create two classes AES and RSA that implement the Encryptable interface and provide their own encryption and decryption algorithms.`,
                solution : null,
                comeout : null
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
            comeout : null
            }
        ]
    // programData12 : interfaces

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end