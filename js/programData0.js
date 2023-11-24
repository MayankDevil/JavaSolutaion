/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData0.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData0 = [
        {
            problem : `18. Create a simple AWT application design a calculator that displays buttons, TextField with GridLayout manager.`,
            solution : `
class Calculator extends java.awt.Frame
/* implements java.awt.event.ActionListener */
{
    /*
        ---------------
        | constructor |
        ---------------
    */
    Calculator()
    {
        setSize(400,500);
        setResizable(false);
        setLayout(null);

        add(Calculator.myField());

        Calculator.myButton(this,16);
    }
    /*
        ====================================================
        | myFont | get argument size and return Font
        ====================================================
    */
    private static java.awt.Font myFont(int size)
    {
        return new java.awt.Font("Arial",0,size);
    }
    /*
        ====================================================
        | myField | private function return TextField
        ====================================================
    */
    private static java.awt.TextField myField()
    {
        java.awt.TextField fld = new java.awt.TextField();

        fld.setBounds(0,0,400,100);

        fld.setEditable(true);

        fld.setFont(Calculator.myFont(25));

        fld.setForeground(java.awt.Color.BLACK);

        fld.setBackground(java.awt.Color.WHITE);

        return fld;
    }
    /*
        ====================================================
        | myButton | function arguments size or Frame
        ====================================================
    */
    private static void myButton(java.awt.Frame frame,int size)
    {
        java.awt.Button btn[] = new java.awt.Button[size];

        int x = 0, y = 100;	// default coordinates

        char btn_label = ' ';

        for (int i = 0; i < size; i++)
        {
            btn[i] = new java.awt.Button();

            if (i > 9)
            {
                switch(i)
                {
                    case 10 : btn_label = '+'; break;

                    case 11 : btn_label = '-'; break;

                    case 12 : btn_label = '*'; break;

                    case 13 : btn_label = '/'; break;

                    case 14 : btn_label = '%'; break;

                    default : btn_label = '=';
                }
                btn[i].setLabel(""+btn_label+"");
            }
            else
            {
                btn[i].setLabel(""+i+"");
            }

            if (i != 0)
            {
                if ((i%4) == 0)
                {
                    x = 0;
                    y += 100;
                }
                else
                {
                    x += 100;
                }
            }
            btn[i].setBounds(x,y,100,100);

            Calculator.buttonStyle(btn[i],25);

            // btn[i].addActionListener(btn[i]);

            frame.add(btn[i]);
        }
    }
    /*
        ====================================================
        | buttonStyle | function get arugment size Button
        ====================================================
    */
    private static void buttonStyle(java.awt.Button btn, int size)
    {
        btn.setFont(Calculator.myFont(size));
        btn.setForeground(java.awt.Color.GRAY);
        btn.setBackground(java.awt.Color.WHITE);
    }
    /*
        ===================================================
        | buttonActionStyle | get argument size and Button
        ===================================================
    */
    private static void buttonActionStyle(java.awt.Button btn, int size)
    {
        btn.setFont(Calculator.myFont(size));
        btn.setForeground(java.awt.Color.BLACK);
        btn.setBackground(java.awt.Color.WHITE);
    }
    /*
        @Override : ActionListener
    public void actionPerformed(java.awt.event.ActionEvent element)
    {
        Calculator.buttonActionStyle(this,20);

        System.out.println(" button "+this.getLabel());
    }
    */
    /*
        [ main function ]----------------------------------
    */
    public static void main(String args[])
    {
        System.out.println(" Calculator execute ... ");

        new Calculator().setVisible(true);
    }
}
// the end ---
            `,
            comeout : `awt/7027AWT18.png`
        },
        {
            problem : `13. Write a Java method that checks whether all the characters in a given string are vowels (a, e,i,o,u) or not. Return true if each character in the string is a vowel, otherwise return false. `,
            solution : `
class Test
{
    static boolean isVowel(char character)
    {
        return (character == 'a')? true : (character == 'e')? true : (character == 'i')? true : (character == 'o')? true : (character == 'u')? true : false; 
    }
    static boolean isStringInsideVowel(String line)
    {
        for (int i = 0; i < line.length(); i++)
            if (isVowel(line.charAt(i)))
                return true; 
        return false;
    }s
    public static void main(String args[])
    {
        System.out.println(Test.isStringInsideVowel("kndq"));

        System.out.println(Test.isStringInsideVowel("hello"));
    }
}
            `,
            comeout : `Functions/7025function13.png`
        },
        {
            problem : `26. Write a Java program to create an abstract class GeometricShape with abstract methods area() and perimeter(). Create subclasses Triangle and Square that extend the GeometricShape class and implement the respective methods to calculate the area and perimeter of each shape.`,
            solution : `
abstract class GeometricShape
{
    abstract double area();
    abstract double perimeter();
}
class Triangle extends GeometricShape
{
    private double side1;
    private double side2;
    private double side3;

    public Triangle(double side1, double side2, double side3)
    {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    // Override
    double area()
    {
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }
    // Override
    double perimeter()
    {
        return side1 + side2 + side3;
    }
}
class Square extends GeometricShape
{
    private double side;

    public Square(double side)
    {
        this.side = side;
    }
    // Override
    double area()
    {
        return side * side;
    }
    // Override
    double perimeter()
    {
        return 4 * side;
    }
}
class Test
{
    public static void main(String[] args)
    {
        Triangle triangle = new Triangle(3.0, 4.0, 5.0);

        Square square = new Square(2.5);

        System.out.println("Triangle Area: " + triangle.area());
        System.out.println("Triangle Perimeter: " + triangle.perimeter());

        System.out.println("Square Area: " + square.area());
        System.out.println("Square Perimeter: " + square.perimeter());
    }
}
            `,
            comeout : `Inheritance/Inheritance26_7027.png`
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
        },
        {
            problem : `32. Write a Java program to create a class called Student with private instance variables student_id, student_name, and grades. Provide public getter and setter methods to access and modify the student_id and student_name variables. However, provide a method called addGrade() that allows adding a grade to the grades variable while performing additional validation. `,
            solution : `
class Test
{
    public static void main(String args[])
    {
        Student student = new Student();

        student.addGrade(12);
        student.addGrade(12); 
        student.addGrade(12);

        student.setStudentId("7027/21");
        student.setStudentName("Mayank");

        System.out.println(student.getStudentId());
        System.out.println(student.getStudentName());
        
        student.displayGrade();
    }
}
class Student
{
    private String student_id;
    private String student_name;
    private int index, mark[] = new int[3];

    public void setStudentId(String id)
    {
        student_id = id;
    }
    public void setStudentName(String name)
    {
        student_name = name;
    }
    public void addGrade(int m)
    {
        if (index < mark.length)
        {
            mark[index++] = m;
        }
        else
        {
            System.out.println("index out of bounds");
        }
    }
    public String getStudentId()
    {
        return student_id;
    }
    public String getStudentName()
    {
        return student_name;
    }
    public void displayGrade()
    {
        for (int n : mark)
            System.out.println(n);
    }
}
            `,
            comeout : `oops/7027oop32.png`
        },
        {
            problem : `10. Create a Java program to create a package with public class and public members to be accessed in another class. `,
            solution : `
package mayankpackage;

public class MyClass
{
    public int rollno = 7027;

    public void publicMethod()
    {
        System.out.println("if you are like follow me https://github.com/MayankDevil/");
    }
}
class Test
{
    public static void main(String[] args)
    {
        mayankpackage.MyClass my = new myPackage.MyClass();
    
        System.out.println("Mayank rollno is " + my.rollno);
    
        my.publicMethod();
    }
}
            `,
            comeout : null
        },
        {
            problem : `50. Create an object StringBuffer class to show functionality of insert, append, delete and replace functions.`,
            solution : `
class Test
{
    public static void main(String args[])
    {
        StringBuffer string_buffer = new StringBuffer("write");

        /* [ insert ] */

        // System.out.println(new StringBuffer(" if just use ").toString());

        string_buffer.insert(5,"\n inbuild function insert() ");


        /* [ append ] */ 

        string_buffer.append("\n If you are like follow me at https://github.com/MayankDevil/ ");

        // System.out.println(string_buffer.toString());
        
        /* [ replace ] */ 

        string_buffer.replace(0,5,"wrong");

        /* [ delete ] */

        string_buffer.delete(5,20);

        /* [ display ] */ 

        System.out.println(string_buffer);
    }
}
            `,
            comeout : `Strings/7027String50.png`
        },
        {
            problem : `13. Program to determine whether a given matrix is a sparse matrix `,
            solution : `
class Test
{
    // A sparse matrix is a matrix in which most of the elements are zero. 

    public static boolean matrix(int[][] matrix, double range)
    {
        int zeroElements = 0;
        int totalElements = matrix.length * matrix[0].length;
        
        if (matrix.length == 0 || matrix[0].length == 0)
            return false;

        for (int[] row : matrix)
            for (int element : row)
                if (element == 0)
                    zeroElements++;
                
        double zeroPercentage = (double) zeroElements / totalElements;

        return zeroPercentage >= range;
    }
    public static void main(String[] args)
    {
        int[][] matrix = {
            {0, 0, 0, 0},
            {0, 5, 0, 0},
            {0, 0, 0, 0}
        };
        double range = 0.9;

        if (matrix(matrix, range))
        {
            System.out.println("The matrix is sparse.");
        }
        else
        {
            System.out.println("The matrix is not sparse.");
        }
    }
}
            `,
            comeout : null
        }
    ]
    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end
