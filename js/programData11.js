/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData11.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData11 = [
            {
                problem : `1. Enter the character from the user using InputStreamReader`,
                solution : `
import java.io.*;

 class prog1 {
    public static void main(String[] args) throws IOException {
        InputStreamReader reader = new InputStreamReader(System.in);

        System.out.print("Enter a character: ");
        char inputChar = (char) reader.read();

        System.out.println("You entered: " + inputChar);
    }
}
                `,
                comeout : `io/7011inputoutput1.png`
            },
            {
                problem : `2. Enter the string from the user using BufferedReader`,
                solution : `
import java.io.*;

class Buffered
{
  public static void main ( String s[] ) throws IOException  //handle the i/o exceptions 
  {
    System.out.print ( "Enter the string: " );

    BufferedReader input = new BufferedReader ( new InputStreamReader ( System.in ) ); // taking the input

    String inputString = input.readLine();

  

    System.out.println ( "Entered string is: " + inputString );
  }
}
                `,
                comeout : `io/7083Inputoutput2.png`
            },
            {
                problem : `3. Enter the integer from the user using Scanner class`,
                solution : `
//Enter the integer from the user using Scanner class
import java.util.Scanner;
class A{
    public static void main(String arg[])
    {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter an integer :-");
        int a = s.nextInt();
        System.out.println(a);
    }
}
                `,
                comeout : `io/7077InputOutput3.png`
            },
            {
                problem : `4. Enter the float from the user using Scanner class`,
                solution : `
import java.util.Scanner;

public class Input {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.print("Enter a float number: ");
    float number = scanner.nextFloat();

    System.out.println("The number you entered is: " + number);
  }
}
                `,
                comeout : `io/7006inputoutput4.png`
            },
            {
                problem : `5. Enter the double from the user using Scanner class`,
                solution : `               
import java.util.Scanner;

class Double5
{
    public static void main(String args[])
    {
        System.out.println("\nEnter the double from user using Scanner class.\n");
        Scanner sc= new Scanner(System.in);
        System.out.println("Enter a Double Value : ");
        Double d= sc.nextDouble();
        System.out.println("your entered double value is : "+d);

    }
}
                `,
                comeout : `io/7021inputoutput5.png`
            },
            {
                problem : `6. Enter the boolean from the user using Scanner class`,
                solution : `
import java.util.Scanner;

public class BooleanInputExample {
    public static void main(String[] args) {
        // Create a Scanner object to read input
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter a boolean value
        System.out.print("Enter a boolean (true or false): ");

        // Read the boolean input
        boolean userInput = scanner.nextBoolean();

        // Close the scanner when you're done
        scanner.close();

        // Print the entered boolean value
        System.out.println("You entered: " + userInput);
    }
}
                `,
                comeout : `io/7050Inputoutput6.png`
            },
            {
                problem : `7. Enter the short integer from the user using Scanner class`,
                solution : `
import java.util.Scanner;  
class a  
{  
public static void main(String[] x)   
{  
       //object of the Scanner class  
       Scanner s=new Scanner(System.in);  
       System.out.print("Enter a short integer value: ");  
       //invoking nextShort() method that reads an integer input by keyboard  
       //storing the input number in a variable num  
       int num = s.nextShort();  
       System.out.println("The Short integer entered by the user is: "+num);  
}  
}  
                `,
                comeout : `io/7039input_output7.png`
            },
            {
                problem : `8. Enter the long integer from the user using Scanner class`,
                solution : ` 
class Long8
{

    public static void main(String[] args) 
    {
        System.out.println("\nEnter the long integer from user using Scanner class.\n");
        java.util.Scanner sc = new java.util.Scanner(System.in);
        System.out.print("Enter a Long Interger value : ");
        long num = sc.nextLong();
        System.out.println("your entered long integer value is  : "+num);
    }
}
                `,
                comeout : `io/7011inputoutput8.png`
            },
            {
                problem : `9. Get all characters from the file and display them on the screen`,
                solution : `
import java.io.*;

class filerd{
public static void main(String[] args) throws Exception
{File file = new File("read.txt");
BufferedReader br= new BufferedReader(new FileReader(file));
String st;
while ((st = br.readLine()) != null)
System.out.println(st);
}
}
                `,
                comeout : null
            },
            {
                problem : `10. Get all characters from the file, count the number of lines, words, and characters, and display them on the screen`,
                solution : `
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

class FileStats {
    public static void main(String[] args) {
        String fileName = "gurjeet.txt"; // Replace with the path to your file

        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            int lines = 0;
            int words = 0;
            int characters = 0;

            String line;
            while ((line = reader.readLine()) != null) {
                lines++;
                characters += line.length();

                String[] wordsArray = line.split("\\s+");
                words += wordsArray.length;
            }

            System.out.println("Number of lines: " + lines);
            System.out.println("Number of words: " + words);
            System.out.println("Number of characters: " + characters);

        } catch (IOException e) {
            System.err.println("Error reading the file: " + e.getMessage());
        }
    }
}
                `,
                comeout : null
            }
        ]
    // programData11 :  input output

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end