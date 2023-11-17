/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData5.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData5 = [

            {
                problem : `1. How to convert String to int`,
                solution : `
package BCA5Practical;

public class StringToInt 
{
	public static void main(String[] args) 
	{
		String str = "123";
		int i=Integer.parseInt(str);
		System.out.println("String is "+str);
		System.out.println("String Converted to an integer "+ i);
		System.out.println("Showing the String was converted to Integer above "+(1+i));
		
		
	}

}
                `,
                comeout : null
            },
            {
                problem : `2. How to convert int to String`,
                solution : `
                
                `,
                comeout : null
            },
            {
                problem : `3. How to convert String to long`,
                solution : null,
                comeout : null
            },
            {
                problem : `4. How to convert long to String`,
                solution : `
class LongToStringConversion { 
	public static void main(String args[]) 
	{ 
		long a = 999999999999L; 
		// convert into String 
		String str = String.valueOf(a);
		System.out.println(str); 
	} 
}
                `,
                comeout : null
            },
            {
                problem : `5. How to convert String to float`,
                solution : `
class StringToFloatExample {
    public static void main(String[] args) {
        // Example String containing a floating-point number
        String floatString = "3.14";

        // Convert String to float using Float.parseFloat()
        try {
            float floatValue = Float.parseFloat(floatString);
            System.out.println("Converted float value: " + floatValue);
        } catch (NumberFormatException e) {
            System.out.println("Error: Invalid float format in the input string");
            e.printStackTrace();
        }
    }
}
                `,
                comeout : null
            },
            {
                problem : `6. How to convert float to String`,
                solution : `
// Data conversion:- 6. How to convert string to float.    By(7058/21)
import java.io.*;

// Main class
class FTS {

	
	public static void main(String[] args)
	{
		
		float fl = 100.9f;

		
		String str = Float.toString(fl);

		
		System.out.println("float is converted to String "
						+ str);
	}
}
                `,
                comeout : null
            },
            {
                problem : `7. How to convert String to double`,
                solution : null,
                comeout : null
            },
            {
                problem : `8. How to convert double to String`,
                solution : `
import java.util.Scanner;
class DoubleToString{
public static void main(String[] args){
Scanner sc = new Scanner(System.in);
System.out.print("Enter a double number: "); 
double num = sc.nextDouble();
String str = Double.toString(num);
System.out.println("Converted String: " + str);   
    }
}
                `,
                comeout : null
            },
            {
                problem : `9. How to convert String to Date`,
                solution : `
// Data conversion:- 9. How to convert string to Date.     By(7058/21)
import java.text.SimpleDateFormat;
import java.util.Date;
// Main class
class STD {

	
	public static void main(String[] args)throws Exception
	{
		
		String str = "30/11/2003";

		
		Date date = new SimpleDateFormat("dd/MM/yyyy").parse(str);

		
		System.out.println("String is converted to Date:");
		System.out.println(date);				
	}
}
                `,
                comeout : null
            },
            {
                problem : `10. How to convert Date to String`,
                solution : `
import java.util.Date;
import java.text.SimpleDateFormat;
class DateToString{
public static void main(String a[])
{
Date date=new Date();
System.out.println(date);
SimpleDateFormat s=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
String str=s.format(date);
System.out.println(str);
}
}
                `,
                comeout : null
            },
            {
                problem : `11. How to convert String to char`,
                solution : `
// Data conversion:- 11. How to convert string to Char.     By(7058/21)

import java.util.*;

class STC{
 public static void main(String args[]){
   
    String str="Aryan";
  
    char [] chr= new char[str.length()];
     
    for(int i=0;i<str.length();i++){
   
   chr[i]=str.charAt(i);
   
}
for (char c : chr){
 System.out.println(c);
}
}
}
                `,
                comeout : null
            },
            {
                problem : `12. How to convert char to String`,
                solution : `
// Data conversion:- 12. How to convert Char to String.     By(7058/21)

import java.io.*;
import java.util.*;

class CTS{
 public static void main(String args[]){
   
    char d='A';
  
    String str=Character.toString(d);
System.out.println("Char is converted to string:- "+str);
}
}
                `,
                comeout : null
            },
            {
                problem : `13. How to convert String to Object`,
                solution : `
class prog13{
    public static void main(String[] args) {
        // Convert String to Integer
        String intStr = "123";
        int intValue = Integer.parseInt(intStr);
        System.out.println("Converted Integer: " + intValue);

        // Convert String to Double
        String doubleStr = "3.14";
        double doubleValue = Double.parseDouble(doubleStr);
        System.out.println("Converted Double: " + doubleValue);

        // Convert String to Boolean
        String boolStr = "true";
        boolean boolValue = Boolean.parseBoolean(boolStr);
        System.out.println("Converted Boolean: " + boolValue);

        // Convert String to Custom Object (using Constructor)
        String customStr = "Hello, World!";
        CustomObject customObject = new CustomObject(customStr);
        System.out.println("Converted Custom Object: " + customObject.getData());
    }

    // Example Custom Object
    static class CustomObject {
        private String data;

        public CustomObject(String data) {
            this.data = data;
        }

        public String getData() {
            return data;
        }
    }
}
                `,
                comeout : null
            },
            {
                problem : `14. How to convert Object to String`,
                solution : `
// Data conversion:- 14. How to convert object to String.     By(7058/21)

class Chugh{}

class OTS {

    public static void main(String[] args){

    Chugh ar=new Chugh();

String str2 = String.valueOf(ar);
    
String str1 = ar.toString();
    
System.out.println("object value:-"+str2);
System.out.println("converted to string :-"+str1);
}
}                
                `,
                comeout : null
            },
            {
                problem : `15. How to convert int to long`,
                solution : null,
                comeout : null
            },
            {
                problem : `16. How to convert long to int`,
                solution : null,
                comeout : null
            },
            {
                problem : `17. How to convert int to double`,
                solution : `
class prog17 {
    public static void main(String[] args) {
        // Convert int to double
        int intValue = 42;
        double doubleValue = (double) intValue; // Casting int to double
        // Alternatively, you can use: double doubleValue = intValue;

        // Display the results
        System.out.println("Original int value: " + intValue);
        System.out.println("Converted double value: " + doubleValue);
    }
}                
                `,
                comeout : null
            },
            {
                problem : `18. How to convert double to int`,
                solution : `
class a 
{
    public static void main(String[] x) 
    {
        double d = 3.14;
        int i = (int) d;
        System.out.println("The value of d(double) is: " + d);
        System.out.println("The value of i(integer) is: " + i);
    }
}
                `,
                comeout : null
            },
            {
                problem : `19. How to convert char to int`,
                solution : `
class chartoint
{
        public static void main(String a[])
        {             
                 char myChar = 'A'; 
                 int myInt = myChar;

           System.out.println("Character value: "+ myChar);
           System.out.println();
           System.out.println("Value after convert to Int: "+ myInt);
        }
}
                `,
                comeout : null
            },
            {
                problem : `20. How to convert int to char`,
                solution : `
import java.util.*; 

class A { 

	public static void main(String[] args) 
	{ 

		
		int i = 97; 

		// Type casting character to integer 
		char ch = (char)i; 

		System.out.println(ch); 
	} 
}
                `,
                comeout : null
            },
            {
                problem : `21. How to convert String to boolean`,
                solution : `
import java.util.Scanner;

class convertStringToBoolean
{
    public static void main(String args[])
    {
        System.out.println("\n How to convert String To Boolean.");
        Scanner sc= new Scanner(System.in);
        System.out.println(" ");
        System.out.print(" Enter the String1 = ");
        String str1 = sc.nextLine();
        System.out.print(" Enter the String2 = ");
        String str2 = sc.nextLine();
        System.out.print(" Enter the String3 = ");
        String str3 = sc.nextLine();
        
        boolean b1 = Boolean.valueOf(str1); 
        boolean b2 = Boolean.valueOf(str2);
        boolean b3 = Boolean.valueOf(str3);

        System.out.println("");
        System.out.println(" The convert String To Boolean Value is : "+b1);
        System.out.println(" The convert String To Boolean Value is : "+b2);
        System.out.println(" The convert String To Boolean Value is : "+b3);
        
        
    }
}
                `,
                comeout : null
            },
            {
                problem : `22. How to convert boolean to String`,
                solution : `
import java.util.Scanner;

class booleantostring {
    public static void main(String[] a) {
        Scanner s = new Scanner(System.in);

        System.out.print("Enter a boolean value (true or false): ");
        String booleanInput = s.nextLine();

        boolean booleanValue = Boolean.parseBoolean(booleanInput);
        String stringResult = booleanToString(booleanValue);

        System.out.println("String equivalent: " + stringResult);
    }

    private static String booleanToString(boolean booleanValue) {
        return String.valueOf(booleanValue);
    }
}

                `,
                comeout : null
            },
            {
                problem : `23. How to convert Date to Timestamp`,
                solution : `
import java.sql.Timestamp;
import java.util.Date;

class DateToTimestampExample {
    public static void main(String[] args) {
        // Create a Date object
        Date date = new Date();

        // Convert the Date to a Timestamp
        Timestamp timestamp = new Timestamp(date.getTime());

        System.out.println("Date: " + date);
        System.out.println("Timestamp: " + timestamp);
    }
}
                `,
                comeout : null
            },
            {
                problem : `24. How to convert Timestamp to Date`,
                solution : `
                
                `,
                comeout : null
            },
            {
                problem : `25. How to convert Binary to Decimal`,
                solution : `
class BinarytoDecimal{  
    public static void main(String args[]){  
    String binaryString="1010";  
    int decimal=Integer.parseInt(binaryString,2);  
    System.out.println(decimal);  
    }}
                `,
                comeout : null
            },
            {
                problem : `26. How to convert Decimal to Binary`,
                solution : `
class DecimalToBinary {
   public static void main(String[] args) {
       int decimalNumber =9;
       
      
       StringBuilder binary = new StringBuilder();
       
       if (decimalNumber == 0) {
           binary.append(0);
       } else {
           
           while (decimalNumber > 0) {
               int remainder = decimalNumber % 2;
               binary.insert(0, remainder);
               decimalNumber = decimalNumber / 2;
           }
       }
       
       System.out.println("Binary representation: "+ binary.toString());
   }
}
                `,
                comeout : null
            },
            {
                problem : `27. How to convert Hex to Decimal`,
                solution : `               
import java.util.Scanner;

class HexToDecimal 
{
   public static void main(String args[]) 
   { 

      System.out.println("\n How to convert Hex to Decimal.\n");
      Scanner sc=new Scanner(System.in);
      System.out.print(" Enter a Hex Value one  : ");
      String Hex1 = sc.nextLine();

      System.out.print(" Enter a Hex Value two  : ");
      String Hex2 = sc.nextLine();

      int dec1 = Integer.parseInt(Hex1, 16);
      int dec2 = Integer.parseInt(Hex2, 16);

      System.out.println("\n Convert Hex To Decimal value  is : " + dec1);
      System.out.println(" Convert Hex To Decimal value is : " + dec2);
   }
}
                `,
                comeout : null
            },
            {
                problem : `28. How to convert Decimal to Hex`,
                solution : `
                
                `,
                comeout : null
            },
            {
                problem : `29. How to convert Octal to Decimal`,
                solution : `
class GFG {

    public static void main(String args[])
    {
        
        String onum = "157";
    
        
        int num = Integer.parseInt(onum, 8);
    
        System.out.println(
            "Decimal equivalent of Octal value 157 is: "
            + num);
    }
}
                `,
                comeout : null
            },
            {
                problem : `30. How to convert Decimal to Octa`,
                solution : `
import java.util.Scanner;
class DecimalToOctal
{
  public static void main(String args[])
  {
    Scanner input = new Scanner( System.in );
    System.out.print("Enter a decimal number : ");
    int num =input.nextInt();
 
    String octalString = Integer.toOctalString(num);
    System.out.println("Method 1: Decimal to octal: " + octalString);

  }
}
                `,
                comeout : null
            }
        ]
    // programData5 : data conversion

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end