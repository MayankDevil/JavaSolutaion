/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData1.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData1 = [
            {
                problem : `1. Write a Java program to print 'Hello World!' on screen`,
                solution : `class Test \n{ \n\tpublic static void main(String args[])\n\t{ \n\t\tSystem.out.println("hello world"); \n\t}\n}`,
                comeout : null
            },
            {
                problem : `2. Write a Java program to print the sum of two numbers`,
                solution : null,
                comeout : null
            },
            {
                problem : `3. Write a Java program that takes two numbers and display the product of two numbers`,
                solution :  `
class ProductNums
{
	public static void main(String str[])throws java.io.IOException
	{	
		System.out.println("Computing the product of two number using BufferedReader Class");

		java.io.InputStreamReader obj = new java.io.InputStreamReader(System.in);
		java.io.BufferedReader input = new java.io.BufferedReader(obj);
		System.out.println("enter a number : ");
		int a=Integer.parseInt(input.readLine());
		System.out.println("enter a number : ");
		int b=Integer.parseInt(input.readLine());
		System.out.println(a*b);
		
		
		System.out.println("Now we'll compute the product using Scanner Class");

		java.util.Scanner input1 = new java.util.Scanner(System.in);
		System.out.println("enter a number : ");		
		int a1=input1.nextInt();

		System.out.println("enter a number : ");
		int b1=input1.nextInt();
		System.out.println("Product of the two number is : "+ a1*b1);
		
		
		
	}
}
                `,
                comeout : `basic/7034bpc3.png`
            },
            {
                problem : `4. Write a Java program to print the sum, multiply, subtract, divide and remainder of two numbers`,
                solution :  `
class Operation
{
	java.util.Scanner s1=new java.util.Scanner(System.in);
	double n1,n2;
	Operation()
	{
		System.out.print("\nObject is created");
	}
	void input()
	{
		System.out.print("\nEnter the first Number :- ");
			n1=s1.nextDouble();
		System.out.print("\nEnter the Second Number :- ");
			n2=s1.nextDouble();
	}
	void operation()
	{
		System.out.print("\nThe sum of "+n1+" + "+n2+" will be :- "+(n1+n2));
		System.out.print("\nThe subtraction of "+n1+" - "+n2+" will be :- "+(n1-n2));
		System.out.print("\nThe multiplication of "+n1+" * "+n2+" will be :- "+(n1*n2));
		System.out.print("\nThe division of "+n1+" / "+n2+" will be :- "+(n1/n2));
		System.out.print("\nThe remainder of "+n1+" % "+n2+" will be :- "+(n1%n2));

	}
	public static void main(String arr[])
	{
		Operation obj=new Operation();
		obj.input();
		obj.operation();
		
	}
}
                `,
                comeout : null
            },
            {
                problem : `5. Write a Java program that takes five numbers as input to calculate and print the average of the numbers`,
                solution :  `
public class 7075BasicConstructP25 {
    public static int add(int a, int b) {
        while (b != 0) {
            int carry = a & b;
            a = a ^ b;
            b = carry << 1;
        }
        return a;
    }
    public static void main(String[] args) {
        int num1 = 5;
        int num2 = 7;
        int sum = add(num1, num2);
        System.out.println("Sum: " + sum);
    }
}
                `,
                comeout : `basic/7003BPC_5.png`
            },
            {
                problem : `6. Write a Java program to swap two variables`,
                solution :  `
import java.util.Scanner;
class Bpc6{
    void swap(int f,int s){
        System.out.println("After Swapping both variables ");
        f=f+s;
        s=f-s;
        f=f-s;
        System.out.println("First Number : "+f);
        System.out.println("Second Number : "+s);
    }
}
class b{
    public static void main(String str[]){
    Bpc6 obj = new Bpc6();
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter the first Number : ");
    int f=sc.nextInt();
    System.out.println("Enter the Second Number : ");
   int s=sc.nextInt(); 
   obj.swap(f,s);

}
}
                `,
                comeout : `basic/7074bpc6.png`
            },
            {
                problem : `7. Write a Java program to convert a decimal number to binary numbers`,
                solution :  `
import java.util.Scanner;
class decimaltobinary
{
   
    public static void main(String[] args) {
     
        int rem,num;
        String binaryNumber = "";
        
        Scanner input = new Scanner(System.in);
      
        System.out.print("Enter a Decimal Number : ");
       
        num = input.nextInt();
      
        while(num > 0){
        
          rem = num % 2;
          
          binaryNumber = rem + "" + binaryNumber;
          
          num =num / 2;
        }
        
        System.out.println("Binary Number : "+binaryNumber);
    }
}
                `,
                comeout : `basic/7020BPC_7.png`
            },
            {
                problem : `8. Write a Java program to convert a binary number to decimal number`,
                solution : null,
                comeout : null
            },
            {
                problem : `9. Write a Java program to check whether Java is installed on your computer or not`,
                solution :  `
class checkjava {
    public static void main(String[] a) {
        System.out.println("Checking that java is installed in this system or not.....");
        String javaVersion = System.getProperty("java.version");
        if (javaVersion != null) {
            System.out.println("Java Version: " + javaVersion);
            System.out.println("Java is installed in this system.");
        } else {
            System.out.println("Java is not installed in this system.");
        }
    }

}
                `,
                comeout : null
            },
            {
                problem : `10. Write a Java program and compute the sum of the digits of an integer`,
                solution :  null,
                comeout : null
            },
            {
                problem : `11. Write a Java program to compare two numbers`,
                solution :  `
import java.util.Scanner;

class Comparetwonumbers
{
	void CheckEqual(){
		int num1, num2;
		System.out.println("Program to compare two numbers");
		Scanner scan = new Scanner(System.in);
		System.out.print("Enter first number : ");
		num1 = scan.nextInt();
		System.out.print("Enter second number : ");
		num2 = scan.nextInt();
		if(num1 == num2){
			System.out.println("Both numbers are equal");
		}
		else{
			System.out.println("Numbers are not equal");
		}
	}
	public static void main(String args[]){
		Comparetwonumbers obj = new  Comparetwonumbers();
		obj.CheckEqual();
	}
}
                `,
                comeout : `basic/7020BPC_11.png`
            },
            {
                problem : `12. Write a Java program to count the letters, spaces, numbers and other characters of an input string`,
                solution :  null,
                comeout : null
            },
            {
                problem : `13. Write a Java program to print the ASCII value of a given character`,
                solution :  `
import java.util.Scanner;  
class AsciiValue  
{  
public static void main(String args[])  
{  
System.out.print("Enter a character: ");  
Scanner sc = new Scanner(System.in);  
char chr = sc.next().charAt(0);  
int asciiValue = chr;  
System.out.println("ASCII value of " +chr+ " is: "+asciiValue);  
}  
}  
                `,
                comeout : `basic/7020BPC_13.png`
            },
            {
                problem : `14. Write a Java program that accepts an integer (n) and computes the value of n+nn+nnn`,
                solution :  `
import java.util.Scanner;

public class first {
    public static void main(String[] args) {
        int n;
        char s1, s2, s3;
        Scanner in = new Scanner(System.in);

        System.out.print("Input number: ");
        n = in.nextInt();
        
        System.out.printf("%d\n", n+n*n+n*n*n);
    }
}
                `,
                comeout : null
            },
            {
                problem : `15. Write a Java program to display the system time`,
                solution :  `
import java.time.LocalTime;

class SystemTime {
    public static void main(String[] args) {
        // Get the current system time
        LocalTime currentTime = LocalTime.now();

        // Display the system time
        System.out.println("System Time: " + currentTime);
    }
}
                `,
                comeout : `basic/7059bpc15.png`
            },
            {
                problem : `16. Write a Java program to print the odd numbers from 1 to 20`,
                solution :  null,
                comeout : null
            },
            {
                problem : `17. Write a Java program to print the even numbers from 1 to 20`,
                solution :  null,
                comeout : null
            },
            {
                problem : `18. Write a Java program to convert a string to an integer`,
                solution :  null,
                comeout : null
            },
            {
                problem : `19. Write a Java program to convert seconds to hours, minutes, and seconds`,
                solution :  null,
                comeout : null
            },
            {
                problem : `20. Write a Java program to compute the sum of the first 100 prime numbers`,
                solution :  null,
                comeout : null
            },
            {
                problem : `21. Write a Java program to swap the first and last elements of an array and create a new array`,
                solution :  null,
                comeout : `basic/7041bpc21.png`
            },
            {
                problem : `22. Write a Java program to count the number of even and odd elements in a given array`,
                solution :  `               
class evenodd
{
public static void main(String a[])
{
int i,ecount=0,ocount=0;
int[] arr = {5, 7, 2, 4, 9};
for(i=0;i<5;i++)
{
    if(arr[i]%2==0)
    {
        ecount++;
    }
    else{
        ocount++;
    }
}
System.out.println("Given Array: ");
for(i=0;i<5;i++)
{
    System.out.println(arr[i]);
}

System.out.println("No. of even numbers in array: "+ecount);
System.out.println("No. of odd number in  array: "+ocount);
}
}
                `,
                comeout : `basic/7062bpc22.png`
            },
            {
                problem : `23. Write a Java program to compute the square root of a given integer`,
                solution :  null,
                comeout : null
            },
            {
                problem : `24. Write a Java program to check if a positive number is a palindrome or not`,
                solution :  `
import java.io.*;
class palindrome
{
public static void main(String a[]) throws IOException
{
int num,temp,sum=0,r;
System.out.println("Enter any number:");
BufferedReader br= new BufferedReader(new InputStreamReader(System.in));
num = Integer.parseInt(br.readLine());
temp=num;
if(num>0)
{
while(num>0)
{    
r=num%10;  
sum=(sum*10)+r;    
num=num/10;    
}    
if(temp==sum)    
{
System.out.println(temp+" is palindrome number... ");    
}
else    
{  
System.out.println(temp+ " is not palindrome number...");    
}  
}
else
{
    System.out.println("Enter any positive number.");
}
    
}
}
                `,
                comeout : `basic/7062bpc24.png`
            },
            {
                problem : `25. Write a Java program to add two numbers without using any arithmetic operators`,
                solution :  `
package BCA5Practical;
//Program 25 from basic construct 
public class 7075BasicConstructP25 {
    public static int add(int a, int b) {
        while (b != 0) {
            int carry = a & b;
            a = a ^ b;
            b = carry << 1;
        }
        return a;
    }
    public static void main(String[] args) {
        int num1 = 5;
        int num2 = 7;
        int sum = add(num1, num2);
        System.out.println("Sum: " + sum);
    }
}
                `,
                comeout : null
            },
            {
                problem : `26. Write a Java program to add all the digits of a given positive integer`,
                solution :  `
class sum
{
    public static void main(String st[])
    {
        int num=12345,sum=0,temp;
        temp=num;
        while(num!=0)
            {
                sum=sum+num%10;
                num=num/10;
            }
            System.out.println("Sum of all digits  in the "+temp+" is "+sum);
    }
}
                `,
                comeout : `basic/7062bpc26.png`
            },
            {
                problem : `27. Java program to find area of circle`,
                solution :  null,
                comeout : null
            },
            {
                problem : `28. Java Program to find area of rectangle`,
                solution :  `
import java.util.Scanner;
class a
{
    public static void main (String x[])
    {
       Scanner l=new Scanner(System.in);
       Scanner b=new Scanner(System.in);
       // inpu length and breadth by user
       System.out.println("To calculate the area of rectangle:");
       System.out.print("Enter  length: ");
       float length=l.nextFloat();
       System.out.print("Enter breadth: ");
       float breadth=b.nextFloat();

       float area;
       area=2*length+2*breadth;
       System.out.println("Area of Rectangle:"+area);
    }
}
                `,
                comeout : `basic/7039bpc28.png`
            },
            {
                problem : `29. Java Program to find area of triangle`,
                solution :  null,
                comeout : null
            },
            {
                problem : `30. Java Program to find area of equilateral triangle`,
                solution :  `
import java.util.Scanner;
class area
{
    public static void main(String st[])
    {
      Scanner s=new Scanner(System.in);
      System.out.println("Enter the side of the triangle: ");
       double side =s.nextDouble();
        double ar= java.lang.Math.sqrt(3)/4*side*side;
        System.out.println("Area of the triangle is "+ ar);
    }
}
                `,
                comeout :  `basic/7062bpc30.png`
            },
            {
                problem : `31. Java Program to find area of rhombus`,
                solution :  `
class a
{
	public static void hcf(int a ,int b )
	{
		int i;
		i=a>b?a:b;
		for(;i>0;--i)
		{
			if(a%i==0&&b%i==0)
			{
				System.out.print("\nthe hcf of "+a+" and "+b+" is :- "+i);
					break;
			}
		}
		
	}
	public static void lcm(int a,int b)
	{
		int i;
		for(i=(a<b?b:a);i<=(a*b);i=i+(a<b?b:a))
		{
			if(i%a==0&&i%b==0)
			{
			 break;
			}
		}
		if(i%a==0&&i%b==0)
		{
			System.out.print("\nthe lcm of "+a+" and "+b+" is :- "+i);
		}
	}
	public static void main(String arr[])
	{
		int x,y;	
		java.util.Scanner s1=new java.util.Scanner(System.in);
		System.out.print("\nEnter 1st number :- ");
		x=s1.nextInt();
		System.out.print("\nEnter 2nd number :- ");
		y=s1.nextInt();
		hcf(x,y);
		lcm(x,y);
	}
}
                `,
                comeout : null
            },
            {
                problem : `32. Java Program to find area of parallelogram`,
                solution :  `
import java.util.*;
import java.io.*;
public class p2{

    static public void main(String arg[]){
        Scanner obj = new Scanner(System.in);
        System.out.println("Enter value of base : ");
        int b = obj.nextInt();
        System.out.println("Enter value of height : ");
        int h = obj.nextInt();
        int res = (b * h);
        System.out.println("Area of Parallelogram : "+res);
    }
}
                `,
                comeout : `basic/7092bpc32.png`
            },
            {
                problem : `33. Java Program to find area of Prism`,
                solution :  `
import java.util.Scanner;

class PrismArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the base area of the prism: ");
        double baseArea = scanner.nextDouble();
        
        System.out.print("Enter the height of the prism: ");
        double height = scanner.nextDouble();
        
        double lateralArea = 2 * baseArea;
        double basePerimeter = Math.sqrt(baseArea) * 4;
        double totalArea = lateralArea + basePerimeter * height;
        
        System.out.println("The area of the prism is: " + totalArea);
        
        scanner.close();
    }
}
                `,
                comeout : `basic/7059bpc33.png`
            },
            {
                problem : `34. Java Program to find volume of sphere`,
                solution :  null,
                comeout : null
            },
            {
                problem : `35. Java Program to find volume of cylinder`,
                solution :  null,
                comeout : null
            },
            {
                problem : `36. Java Program to find volume of cuboid`,
                solution :  `
class volume
{
	java.util.Scanner s1 =new java.util.Scanner(System.in);
	double l,b,h;
	volume()
	{
		System.out.print("Object is created");
	}
	void input()
	{
		System.out.print("\nEnter the length of cuboid :- ");
		l=s1.nextDouble();
		System.out.print("\nEnter the Breadth of cuboid :- ");
		b=s1.nextDouble();
		System.out.print("\nEnter the height of cuboid :- ");
		h=s1.nextDouble();
	}
	void volume()
	{
		System.out.print("\nVolume of cuboid of length "+l+" Breadth "+b+" height "+h +" will be :- "+(l*b*h));
	}
	public static void main(String arr[])
	{
		volume v1=new volume();
		v1.input();
		v1.volume();
	}
}
                `,
                comeout : null
            },
            {
                problem : `37. Java Program to find volume of cone`,
                solution :  null,
                comeout : null
            },
            {
                problem : `38. Java program to find surface area of cuboid`,
                solution :  `
class cuboid_Sarea   
{    
public static void main (String args[])   
 {   float  l, w, h, s_area;       
     l = 10;  
     w =20;  
     h = 30;  
    s_area  = 2*( l *w  + w* h + h*l);  
     System.out.println ("Surface Area of Cuboid is: "); 
       System.out.println(s_area);   
   
}}  
                `,
                comeout : `basic/7083bpc38.png`
            },
            {
                problem : `39. Java program to find surface area of cylinder`,
                solution :  `
class cylinder_Sarea
{  
    public static void main(String args[])  
{  
    float r, h, s_area;  
    r = 10;  
    h  = 20;  
    s_area = (22*r*(r+h))/7;  
    System.out.println("Surface Area of Cylinder is: "+s_area);  
}  
}  
                `,
                comeout : `basic/7083bpc39.png`
            },
            {
                problem : `40. Java program to find surface area of cube`,
                solution :  `
import java.util.Scanner;
class a
{
    public static void main (String x[])
    {
     Scanner s=new Scanner(System.in);
    System.out.println("To calculate surface area of cube:");
    System.out.println("Enter the side of cube: ");
    // input value
     float side=s.nextFloat();
     float area;
     area=6*side*side;
     System.out.println("Surface area of cube:"+area);
    }
}
                `,
                comeout : `basic/7039bpc40.png`
            },
            {
                problem : `41. Java program to calculate average marks`,
                solution : `
import java.util.Scanner;
class basic_programming_constructs_41
{
   public static void main(String args[])
   {
       // Declaring avriables..
        int mark[] = new int[5],i;
        float sum=0,avg; 
       // Taking values from user...
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter marks for 5 Subjects : ");
        for(i=0; i<5; i++)
        {
            mark[i] = scan.nextInt();
        // calculating sum
            sum = sum + mark[i];
        }
        // Finding avergae..
         avg= sum/5;
 
        /// Printing the result...
    System.out.print("Average Marks = " +avg);
    }
}
                `,
                comeout : `basic/7041bpc41.png`
            },
            {
                problem : `42. Java program to check vowel or consonant`,
                solution :  `
import java.io.*; 

class basic_programming_constructs_42 { 
  
    // Function to find whether an input 
    // character is vowel or not 
    static void Vowel_Or_Consonant(char y) 
    { 
        if (y == 'a' || y == 'e' || y == 'i' || y == 'o'

            || y == 'u') 
            System.out.println("It is a Vowel."); 
        else
            System.out.println("It is a Consonant."); 
    } 
    static public void main(String[] args) 
    { 

        Vowel_Or_Consonant('b'); 
        Vowel_Or_Consonant('u'); 
    } 
}
                `,
                comeout : null
            },
            {
                problem : `43. Java program to sum of N numbers`,
                solution :  null,
                comeout : null
            },
            {
                problem : `44. Java program to find factorial of any number`,
                solution :  `
import java.util.Scanner;
class Bpc44{
    int fact(int x){
        if(x==0){
            return 1;
        }
         return x*(fact(x-1));
    }
}

class b{
    public static void main(String str[]){
    Bpc44 obj=new Bpc44();
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter the Number : ");
    int a=sc.nextInt();
    System.out.println("Factorial of the Number is : "+ obj.fact(a));
}
}
                `,
                comeout : `basic/7074bpc44.png`
            },
            {
                problem : `45. Java Program to calculate electricity bill`,
                solution :  `
import java.util.Scanner;
class electricBill{
	void CalcBill(){
		System.out.println("Program to calculate Electricity Bill");
		Scanner scan = new Scanner(System.in);
		double rate, unit, total;
		System.out.print("Enter the rate per unit (in rupees) : ");
		rate = scan.nextInt();
		System.out.print("Enter the number of units consumed : ");
		unit = scan.nextInt();
		total = rate * unit;
		System.out.println("Total Electricity Bill is : " + total);
	}
	public static void main(String args[]){
		electricBill obj = new electricBill();
		obj.CalcBill();
	}
}
                `,
                comeout : `basic/7020BPC_45.png`
            },
            {
                problem : `46. Java Program To Calculate CGPA Percentage`,
                solution :  `
class basic_programming_constructs_46 {
    public static void main(String[] args) throws java.io.IOException {
        java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));

        try {
            System.out.print("Enter the total number of subjects: ");
            int totalSubjects = Integer.parseInt(input.readLine());

            if (totalSubjects <= 0) {
                System.out.println("Please enter a valid number of subjects.");
            } else {
                double totalCredits = 0;
                double totalGradePoints = 0;

                for (int i = 1; i <= totalSubjects; i++) {
                    System.out.print("Enter the credits for subject " + i + ": ");
                    double credits = Double.parseDouble(input.readLine());
                    System.out.print("Enter the grade points for subject " + i + ": ");
                    double gradePoints = Double.parseDouble(input.readLine());

                    totalCredits += credits;
                    totalGradePoints += (credits * gradePoints);
                }

                double cgpa = totalGradePoints / totalCredits;
                double percentage = cgpa * 9.5;

                System.out.println("CGPA: " + cgpa);
                System.out.println("Percentage: " + percentage + "%");
            }
        } catch (NumberFormatException e) {
            System.out.println("Invalid input. Please enter valid numeric values.");
        } catch (Exception e) {
            System.out.println("Something went wrong.");
        }
    }
}
                `,
                comeout : `basic/7041bpc46.png`
            },
            {
                problem : `47. Java Program to calculate compound interest`,
                solution :  `
                import java.io.*; 
class CI 
{ 
    public static void main(String args[]) 
    { 
        double principal = 10000, rate = 10, time = 5; 
        double CI = principal * 
                    (Math.pow((1 + rate / 100), time)); 
          
        System.out.println("Compound Interest is "+ CI); 
    } 
} 
                `,
                comeout : null
            },
            {
                problem : `48. Java Program To Calculate Batting Average`,
                solution :  `
class batting_average
{
    public static void main(String arg[]) throws java.io.IOException
    {
        java.io.BufferedReader input= new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        System.out.println("Enter the total number of hits or runs scored : ");
        int runs = Integer.parseInt(input.readLine());
        System.out.println("Enter the number of at-bats(baseball hit attempts) or outs : ");
        float outs = Integer.parseInt(input.readLine());
        float ans = runs/outs;
        System.out.println("The batting average of the player is : "+ans);
    }
}
                `,
                comeout : null
            },
            {
                problem : `49. Java Pogram to Calculate Commission Percentage`,
                solution :  null,
                comeout : null
            },
            {
                problem : `50. Java Pogram To Find Distance Between Two Points`,
                solution :  `
class DistanceFormula{
    int Formula(double x1, double x2, double y1, double y2){
        int sol = (int)Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1));
        return sol;
    }
}
class Points{
    public static void main(String a[]){
        double x1, x2, y1, y2;
        x1 = 4;
        x2 = 0;
        y1 = 3;
        y2 = 0;
        DistanceFormula obj = new DistanceFormula();
        int ans = obj.Formula(x1,x2,y1,y2);

        System.out.println("Distance Between Two Points is "+ans);
    }
}
                `,
                comeout : null
            },
            {
                problem : `51. Java Program To Calculate Power Of Number`,
                solution :  null,
                comeout : null
            },
            {
                problem : `52. Write a Java program to take three numbers from the user and print the greatest number`,
                solution :  null,
                comeout : null
            },
            {
                problem : `53. Write a Java program to find the number of days in a month`,
                solution :  `
class month_days
{
    public static void main(String arg[]) throws java.io.IOException
    {
        java.io.BufferedReader input= new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        System.out.println("Enter the month name : ");
        String month= input.readLine();
        month = month.toLowerCase();
        if(month.equals("february"))
        System.out.println(month+" has 28 days but, if it is from leap year then it will have 29 days ");
        else if(month.equals("january") || month.equals("march") || month.equals("may") || month.equals("july") || month.equals("august") || month.equals("october") || month.equals("december") )
        System.out.println(month+" has 31 days!!");    
        else if(month.equals("april") || month.equals("june") || month.equals("september") || month.equals("noverber"))
        System.out.println(month+" has 30 days!!");  
        else
        System.out.println("Kindly enter a valid month, "+month+" is not a valid month");    
    }
}
                `,
                comeout : null
            },
            {
                problem : `54. Write a Java program to test a number is positive or negative`,
                solution :  `
import java.util.Scanner;
class checknumber {
    public static void main(String[] a) {
        System.out.println("Enter a Number : ");
        Scanner s=new Scanner(System.in);
        double number=s.nextDouble();

        if(number>0){
            System.out.println("The Number is Positive.");
        }
        else if(number<0){
            System.out.println("The Number is Negative.");
        }
        else{
            System.out.println("The Number is Zero.");
        }
    }
}               
                `,
                comeout : null
            },
            {
                problem : `55. Write a Java Program to accept number of week�s day (1-7) and print name of the day`,
                solution : null,
                comeout : null
            },
            {
                problem : `56. Write a Java program that takes a year from user and print whether that year is a leap year or not`,
                solution :  `
import java.util.Scanner;
class Bpc56{
    void leap(int l){
        if(l%4==0){
             System.out.println(l+" is a Leap year.");
        }
        else{
            System.out.println(l+" is not a Leap year.");
        }
    }
}
class b{
    public static void main(String str[]){
        Bpc56 obj = new Bpc56();
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter the Year : ");
    int l =sc.nextInt();
    obj.leap(l);
    }
}
                `,
                comeout : null
            },
            {
                problem : `57. Write a Java program to input 5 numbers from keyboard and find their sum and average`,
                solution :  null,
                comeout : null
            },
            {
                problem : `58. Write a program in Java to display the first 5 natural numbers`,
                solution :  `
class natural{

public static void main(String args[]){
int a=1;
System.out.println("The first 5 natural numbers are:");
for(a=1;a<=5;a++){
System.out.println(a);
}
} 
}
                `,
                comeout : null
            },
            {
                problem : `59. Write a java program to check vowel or consonant`,
                solution :  null,
                comeout : null
            },
            {
                problem : `60. Write a Java program to display the cube of the number up to a given integer`,
                solution : `
class GetCube
{
	GetCube()
	{
		System.out.println("\nObject is created");
	}
	public static void main(String arr[])
	{
		long  number;
		System.out.print("\nEnter the number :- ");
		java.util.Scanner s1 =new java.util.Scanner(System.in);
		number =s1.nextLong();
		number=number*number*number;
		System.out.print("the cube of the given number will be "+number);
			
	}
}
                `,
                comeout : null
            },
            {
                problem : `61. Write a Java program to display the n terms of odd natural numbers and their sum`,
                solution :  null,
                comeout : null
            },
            {
                problem : `62. Write a Java program to display the multiplication table of a given integer`,
                solution :  null,
                comeout : null
            },
            {
                problem : `63. Write a Java program that reads an integer and checks whether it is negative, zero, or positive`,
                solution :  `
class basic_programming_constructs_63 {
    public static void main(String[] args) {
        java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));

        try {
            System.out.print("Enter a number: ");
            double number = Double.parseDouble(input.readLine());
            StringBuffer msg = new StringBuffer("zero");

            if (number > 0) {
                msg.replace(0, msg.length(), "positive");
            } else if (number < 0) {
                msg.replace(0, msg.length(), "negative"); 
            }

            System.out.println("The number is " + msg);
        } catch (java.util.InputMismatchException e) {
            System.out.println("Invalid input. Please enter a valid numeric value.");
        } catch (Exception e) {
            System.out.println("Something went wrong.");
        }
    }
}
                `,
                comeout : null
            },
            {
                problem : `64. Write a Java program that reads a positive integer and counts the number of digits`,
                solution :  null,
                comeout : null
            },
            {
                problem : `65. Write a Java program that accepts three numbers and checks if all numbers are equal or not`,
                solution :  `
class compare{
    public static void main(String st[]) throws java.io.IOException
    {
    int a,b,c;
    java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
    System.out.println("Enter First number: ");
    a=Integer.parseInt(input.readLine());
     System.out.println("Enter second number: ");
    b=Integer.parseInt(input.readLine());
     System.out.println("Enter Third number: ");
    c=Integer.parseInt(input.readLine());

    if(a==b && b==c)
    System.out.println("All the numbers are equal!!");
    else
    System.out.println("Given numbers are not equal");
    }
}
                `,
                comeout : null
            },
            {
                problem : `66. Write a java program that accepts three numbers from the user and checks if numbers are in "increasing" or "decreasing" order`,
                solution :  `
import java.util.Scanner;
class IncDec {
   public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        System.out.print("Input first number: ");
        double x = in.nextDouble();
        System.out.print("Input second number: ");
        double y = in.nextDouble();
       System.out.print("Input third number: ");
        double z = in.nextDouble();
        if (x < y && y < z)
        {
            System.out.println("Increasing order");
        }
        else if (x > y && y > z)
        {
            System.out.println("Decreasing order");
        }
        else
        {
            System.out.println("Neither increasing or decreasing order");
        }
    }
}
                `,
                comeout : null
            },
            {
                problem : `67. Write a Java program that determines a student�s grade`,
                solution :  `
import java.util.Scanner;

class studentgrade {
    public static void main(String[] a) {
        System.out.println("Enter Student's score between 0 to 100 :  ");
        Scanner s=new Scanner(System.in);
        int marks=s.nextInt();

        char grade;

        if(marks>=90){
            grade='A';
        }else if(marks>=80){
            grade='B';
        }else if(marks>=70){
            grade='C';
        }else if(marks>=60){
            grade='D';
        }else if(marks>=50){
            grade='E';
        }else{
            grade='F';
        }
        System.out.println("The Student's grade is : "+grade);
    }
}               
                `,
                comeout : null
            },
            {
                problem : `68. Write a Java program to create a simple calculator`,
                solution :  `
import java.util.Scanner;

class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first number: ");
        double num1 = scanner.nextDouble();

        System.out.print("Enter the second number: ");
        double num2 = scanner.nextDouble();

        System.out.println("Select an operation (+, -, *, /): ");
        char operator = scanner.next().charAt(0);

        double result;

        switch (operator) {
            case '+':
                result = num1 + num2;
                System.out.println("The sum is: " + result);
                break;
            case '-':
                result = num1 - num2;
                System.out.println("The difference is: " + result);
                break;
            case '*':
                result = num1 * num2;
                System.out.println("The product is: " + result);
                break;
            case '/':
                result = num1 / num2;
                System.out.println("The quotient is: " + result);
                break;
            default:
                System.out.println("Invalid operator!");
                break;
        }

        scanner.close();
    }
}
                `,
                comeout : null
            },
            {
                problem : `69. Write a Java program to concatenate two strings`,
                solution :  null,
                comeout : null
            },
            {
                problem : `70. Write a Java program to convert all characters in a string to lowercase`,
                solution :  null,
                comeout : null
            },
            {
                problem : `71. Write a Java program to convert all characters in a string to uppercase`,
                solution :  null,
                comeout : null
            },
            {
                problem : `72. Write a Java program to trim a string (remove whitespaces)`,
                solution :  `
class L {    
    public static void main(String[] args) {    
        String str1="Remove white spaces";       
        str1 = str1.replaceAll("\\s+", "");    
        System.out.println("String after removing all the white spaces : " + str1);    
    }    
}    
                `,
                comeout : null
            },
            {
                problem : `73. Write a Java program to get a substring of a given string between two specified positions`,
                solution :  `
import java.util.Scanner;

class SubstringExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        
        System.out.print("Enter the starting position (index starting from 0): ");
        int startPosition = scanner.nextInt();

        
        System.out.print("Enter the ending position (index starting from 0): ");
        int endPosition = scanner.nextInt();

        
        if (startPosition < 0 || endPosition >= inputString.length() || startPosition > endPosition) {
            System.out.println("Invalid positions. Please enter valid positions.");
        }

        
        String resultSubstring = getSubstring(inputString, startPosition, endPosition);

        
        System.out.println("Substring between positions " + startPosition + " and " + endPosition + ": " + resultSubstring);

        scanner.close();
    }
    private static String getSubstring(String inputString, int startPosition, int endPosition) {
        return inputString.substring(startPosition, endPosition + 1);
    }
}
                `,
                comeout : null
            },
            {
                problem : `74. Write a Java program to replace all the 'd' characters with 'f' characters`,
                solution :  `
class replacingstring{

public static void main(String args[]){
 String ar="My dog name is dooddy"; //orignal string
 
 String br=ar.replace('d','f');  //replacing 'd' with 'f'
 System.out.println("The orignal string is : ");
System.out.println(" ");
 System.out.println(ar);
System.out.println(" ");
 System.out.println("String after replacing the character d with f : ");
System.out.println(" "); 
 System.out.println(br);
}
}
                `,
                comeout : null
            },
            {
                problem : `75. Write a Java program to get the length of a given string`,
                solution :  null,
                comeout : null
            },
            {
                problem : `76. Write a Java program to print the current date and time in the specified format`,
                solution :  `
class date{
    public static void main(String st[])
    {
        java.util.Date today = new java.util.Date();
        System.out.println("Current date and time of the system: "+ today);
    }
}
                `,
                comeout : null
            },
            {
                problem : `77. Write a Java program to get the character at the given index within the String`,
                solution :  null,
                comeout : null
            },
            {
                problem : `78. Write a Java program to remove a particular character from a string`,
                solution :  null,
                comeout : null
            },
            {
                problem : `79. Write a Java program to reverse a String`,
                solution :  null,
                comeout : null
            },
            {
                problem : `80. Write a Java program to remove HTML tags from a string`,
                solution :  null,
                comeout : null
            },
            {
                problem : `81. Write a Java program to count the total number of lines in a string`,
                solution :  `
import java.util.Scanner;

class linescount {
    public static void main(String[] a) {
        Scanner s = new Scanner(System.in);

        System.out.println("Enter a string (press Ctrl+Z and hit enter to end input):");

        StringBuilder inputString = new StringBuilder();
        while (s.hasNextLine()) {
            inputString.append(s.nextLine()).append("\n");
        }
        int lineCount = countLines(inputString.toString());

        System.out.println("Total number of lines: " + lineCount);
    }

    private static int countLines(String text) {
        if (text == null || text.isEmpty()) {
            return 0;
        }

        String[] lines = text.split("\r\n|\r|\n");
        return lines.length;
    }
}
                `,
                comeout : null
            },
            {
                problem : `82. Write a Java program to sum values of an array`,
                solution : null,
                comeout : null
            },
            {
                problem : `83. Write a Java program to find the index of an array element`,
                solution :  `
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

        System.out.println("Enter the element to find: ");
        int target = s.nextInt();

        int index = findElement(arr, target);

        if (index != -1) {
            System.out.println("Element found at index: " + index);
        } else {
            System.out.println("Element not found in the array.");
        }
    }

    public static int findElement(int[] array, int target) 
    {
        for (int i = 0; i < array.length; i++) {
            if (array[i] == target) {
                return i;
            }
        }
        return -1;
    }
}
                `,
                comeout : null
            },
            {
                problem : `84. Write a Java program to calculate the average value of array elements`,
                solution :  null,
                comeout : null
            },
            {
                problem : `85. Write a Java program to test if an array contains a specific value`,
                solution :  `
 class A
 {
 
 
       public static void main(String a[])
     {
             int[] array={1,2,3,4,5,6};
         int checkvalue=4;
         boolean containvalue=false;
               
         for(int value:array)
         {
                    if(value==checkvalue)
            {
             containvalue=true;
             break;
            }  
         }
            
              if(containvalue)
          {
         System.out.println("The array contains the value "+checkvalue);
          }
          else
          {
         System.out.println("The array dose not contains the value "+checkvalue);
          }
     }
 
 }
                `,
                comeout : null
            },
            {
                problem : `86. Write a Java program to find the maximum and minimum value of an array`,
                solution :  `
import java.util.Scanner; 
class Bpc86{
    void sort(int arr1[]){
        int i,j,temp;
        for(i=0;i<arr1.length;i++){
            for(j=i+1;j<arr1.length;j++)
            if(arr1[i]>arr1[j]){
                temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;
            }
            }
              System.out.println("Smallest Value Present in Array is : "+arr1[0]);
               System.out.println("Largest Value Present in Array is : "+arr1[(arr1.length-1)]);
            
    }
}
class b{
    public static void main(String str[]){
        Bpc86 obj=new Bpc86();
        Scanner sc=new Scanner(System.in); 
        int i;
        System.out.println("Enter the Size of Array : ");
        int s=sc.nextInt();
        int arr[]=new int[s];
        System.out.println("Enter Values in Array : ");
        for(i=0;i<arr.length;i++){
            System.out.println("At Index : "+i);
            arr[i]=sc.nextInt();
        }
        obj.sort(arr);
    }       
}
                `,
                comeout : null
            },
            {
                problem : `87. Write a Java program to insert an element (at a specific position) into an array`,
                solution :  `
import java.io.*;
import java.lang.*;
import java.util.*;

class GFG {


    public static int[] insertX(int n, int arr[],

    int x, int pos)

    {
        int i;
 
        int newarr[] = new int[n + 1];

        for (i = 0; i < n + 1; i++) {

            if (i < pos - 1)
                newarr[i] = arr[i];
            else if (i == pos - 1)
                newarr[i] = x;
            else
                newarr[i] = arr[i - 1];
        }
        return newarr;
    }
    public static void main(String[] args)
    {
        int n = 10;

        int i;
 

        // initial array of size 10

        int arr[]

            = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
 

        // print the original array

        System.out.println("Initial Array:\n"

                           + Arrays.toString(arr));
 
        int x = 50;


        int pos = 5;

        arr = insertX(n, arr, x, pos);

        System.out.println("\nArray with " + x

                           + " inserted at position "

                           + pos + ":\n"

                           + Arrays.toString(arr));
    }
}
                `,
                comeout : null
            },
            {
                problem : `88. Write a Java program to reverse an array of integer values`,
                solution :  `
import java.util.Scanner;
class Bpc88{
    void rev(int arr1[]){
         int i,j,temp;
         for(i=0;i<arr1.length;i++){
            for(j=i+1;j<arr1.length;j++){
                temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;
            }
         }
          System.out.println("Your Array in Reverse -> ");
         for(i=0;i<arr1.length;i++){
            System.out.println(arr1[i]);

    }
}
}
class b{
    public static void main(String str[]){
    Bpc88 obj =new Bpc88();
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter the Size of the Array : ");
    int s=sc.nextInt();
     System.out.println("Enter Values in Array : ");
     int arr[]=new int[s];
     for(int i=0;i<s;i++){
        System.out.println("Enter at Index : "+i);
        arr[i]=sc.nextInt();
     }
      obj.rev(arr);
}
}
                `,
                comeout : null
            },
            {
                problem : `89. Write a Java program to find the common elements between two arrays`,
                solution :  `
import java.util.Arrays; 
 class commonelement{
public static void main(String[] args) 
    {
      int[] array1 = {130, 250, 530, 560, 890, 943, 987, 1000};
      int[] array2 = {125, 560,5, 6, 4, 987,1000};
 
       System.out.println("Array1 : "+Arrays.toString(array1));
       System.out.println("Array2 : "+Arrays.toString(array2));
 
      
        for (int i = 0; i < array1.length; i++)
        {
            for (int j = 0; j < array2.length; j++)
            {
                if(array1[i] == (array2[j]))
                {
                    System.out.println("Common element is : "+(array1[i]));
                }
            }
        }
    }
}
                `,
                comeout : null
            },
            {
                problem : `90. Write a Java program to find the duplicate values of an array of integer values`,
                solution :  null,
                comeout : null
            },
            {
                problem : `91. Write a Java program to convert an array to an ArrayList`,
                solution :  null,
                comeout : null
            },
            {
                problem : `92. Write a Java program to add two matrices of the same size`,
                solution :  `
class Matrix_add
{
    public static void main(String arg[])throws java.io.IOException
    {
        java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        System.out.println("Enter the Size of matrices");
        System.out.println("Enter number of rows : ");
        int rows = Integer.parseInt(input.readLine());
        System.out.println("Enter number of columns : ");
        int cols = Integer.parseInt(input.readLine());
        int[][] arr1,arr2;
        arr1= new int[rows][cols];
        arr2= new int[rows][cols];
        System.out.println("Enter the elements of first matrix :");
        for(int i=0;i<rows;i++)
        {
            for(int j=0;j<cols;j++)
            {   System.out.println("Enter for position "+i+" "+j);
                arr1[i][j]=Integer.parseInt(input.readLine());
            }
        }

        System.out.println("Enter the elements of second matrix :");
        for(int i=0;i<rows;i++)
        {
            for(int j=0;j<cols;j++)
            {   System.out.println("Enter for position "+i+" "+j);
                arr2[i][j]=Integer.parseInt(input.readLine());
            }
        }

    System.out.println("Given matrices are : ");
    System.out.println("Matrix-1");
        for(int i=0;i<rows;i++)
        {
            for(int j=0;j<cols;j++)
            System.out.print(arr1[i][j]+" ");
            System.out.println();
        }
        System.out.println("\nMatrix-2");
        for(int i=0;i<rows;i++)
        {
            for(int j=0;j<cols;j++)
            System.out.print(arr2[i][j]+" ");
            System.out.println();
        }

        System.out.println("Sum of the matrices : ");
        for(int i=0;i<rows;i++)
        {
            for(int j=0;j<cols;j++)
            {arr1[i][j] += arr2[i][j];
            System.out.print(arr1[i][j]+" ");}
            System.out.println();
        }
    }
}
                `,
                comeout : null
            },
            {
                problem : `93. Write a Java program to find the second largest number from an array`,
                solution :  `               
import java.util.Arrays;

class SecondLargestNumber
{
   public static void main(String args[])
   {
      System.out.println("\n Program to find second largest number from the array");
      int temp;
      int array[] = {10, 20, 25, 63, 96, 57};

      for(int i = 0; i<array.length; i++ )
      {
         for(int j = i+1; j<array.length; j++)
         {

            if(array[i]>array[j])
            {
               temp = array[i];
               array[i] = array[j];
               array[j] = temp;
            }
         }
      }
      System.out.println("\n Arrays : "+Arrays.toString(array));
      System.out.println(" Second largest number is : "+array[array.length-2]);
   }
}
                `,
                comeout : `basic/7072bpc93.png`
            },
            {
                problem : `94. Write a Java program to find the second lowest number from an array`,
                solution :  `
class lowest
{
	lowest()
	{
		System.out.println("\nObject is created");
	}
	public static void main(String brr[])
	{
		java.util.Scanner s1= new java.util.Scanner(System.in);
		int first,second,i,index=-1;
		int arr[]=new int[5];
		for(i=0;i<(arr.length);i++)
		{
			System.out.print("\nEnter the "+(i+1)+" integer number :- ");
			arr[i]=s1.nextInt();
		}
		first=arr[0];
		second=arr[0];
		for(i=1;i<(arr.length);i++)
		{	
			if(first>arr[i])
			{
				second=first;
				index=i;
				first=arr[i];
			}
		}
		i=index+1;
		for(;i<(arr.length);i++)
		{
			if(second>arr[i])
			{
				second=arr[i];
			}			
		}
		System.out.print("\nthe first lowest number will be :- "+first);
		System.out.print("\nthe second lowest number will be "+second);
	}
}
                `,
                comeout : `basic/7004bpc94.png`
            },
            {
                problem : `95. Write a Java program to find the number of even and odd integers in a given array of integers`,
                solution :  `
import java.util.Arrays;

public class evenodd {
    public static void main(String[] args) {
        int[] array_nums = {1, 13, 5, 19, 10};

        System.out.println("Original Array: " + Arrays.toString(array_nums));

        int ctr = 0;

        for (int i = 0; i < array_nums.length; i++) {
            if (array_nums[i] % 2 == 0)
                ctr++;
        }

        System.out.println("Number of even numbers : " + ctr);
        System.out.println("Number of odd numbers  : " + (array_nums.length - ctr));
    }
}
                `,
                comeout : `basic/7031bpc95.png`
            },
            {
                problem : `96. Write a Java program to get the difference between the largest and smallest values in an array of integers`,
                solution :  `
import java.util.Arrays;
import java.util.Scanner;
public class Main {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int n = sc.nextInt();
    int a[] = new int[n];
    for (int i = 0; i < n; i++) {
      a[i] = sc.nextInt();
    }
    int n1 = display(a);
    System.out.println(n1);
  }
  public static int display(int[] array)
  {
    Arrays.sort(array);
    int n = array[array.length - 1] - array[0];
    int b = array.length;
    if (b == 1) {
      n = array[0];
    }
    return n;
  }
}
                `,
                comeout : null
            },
            {
                problem : `97. Write a Java program to segregate all 0s on the left side and all 1s on the right side of a given array of 0s and 1s`,
                solution :  `
class ninty_seven{
    static void display(int[] arr){
        for(int i: arr)
            System.out.print(i + " ");
        System.out.println();
    }
    public static void main(String[] args){
        int  zero = 0;
        int[] arr = {0,1,1,1,0,0,1,0,0,1};
        System.out.print("Array before separation : ");
        display(arr);
        for(int i: arr){
            if(i==0) zero++;
        }
        for(int i=0; i<arr.length; i++){
            if(zero>0){
                arr[i] = 0;
                zero--;
            }
            else arr[i] = 1;
        }
        System.out.print("Array after separation : ");
        display(arr);
    }
}
                `,
                comeout : `basic/7001bpc97.png`
            },
            {
                problem : `98. Write a Java program to cyclically rotate a given array clockwise by one`,
                solution :  `
  class CyclicRotation {
      public static void main(String[] args) {
          int[] array = {1, 2, 3, 4, 5};
          
          System.out.println("Original Array:");
          printArray(array);
          
          rotateArrayClockwise(array);
          
          System.out.println("Array after cyclic rotation:");
          printArray(array);
      }
      
      public static void rotateArrayClockwise(int[] arr) {
          if (arr.length <= 1) {
              return; // No need to rotate for arrays with 0 or 1 element
          }
          
          int lastElement = arr[arr.length - 1];
          
          for (int i = arr.length - 1; i > 0; i--) {
              arr[i] = arr[i - 1];
          }
          
          arr[0] = lastElement;
      }
      
      public static void printArray(int[] arr) {
          for (int num : arr) {
              System.out.print(num + " ");
          }
          System.out.println();
      }
  }
                `,
                comeout : `basic/7101bpc98.png`
            },
            {
                problem : `99. Write a Java program to print all unique elements in an array`,
                solution :  `
class uniquearray{
public static void main(String arg[]) throws java.io.IOException{
java.io.InputStreamReader isr= new java.io.InputStreamReader(System.in);
java.io.BufferedReader br= new java.io.BufferedReader(isr);

int arr1[];
arr1= new int[5];
for(int i=0; i<5;i++){
System.out.print("Enter value of "+i+" ");
String str1= br.readLine();
int x = Integer.parseInt(str1);
arr1[i]=x;
}
System.out.println("\n unique elements in array are: ");
for(int i=0;i<5;i++){
int count=0;
int key= arr1[i];
for(int j=0; j<5;j++){
if(j!=i){
if(key==arr1[j]){count++;}}
}
if(count==0){
System.out.println(key);}
}}}
                `,
                comeout : `basic/7035bpc99.png`
            },
            {
                problem : `100. Write a Java Program to Sort the Array in an Ascending Order`,
                solution :  `
import java.util.Arrays;
public class program100_7024 {
    public static void main(String[] args) {
        int[] array = {7,4,21,3,0,3};

        System.out.println("Original array: " + Arrays.toString(array));

        sortArray(array);

        System.out.println("Sorted array in ascending order: " + Arrays.toString(array));
    }

    public static void sortArray(int[] array) {
        int n = array.length;

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    // Swap array[j] and array[j+1]
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }
}
                `,
                comeout : `basic7024bpc100.png`
            },
            {
                problem : `101. Write a Java Program to Sort the Array in a Descending Order`,
                solution :  `
import java.util.Arrays;

public class program101_7024 {
    public static void main(String[] args) {
        int[] array = {20,6,4,1,43,5};

        System.out.println("Original array: " + Arrays.toString(array));

        sortArray(array);

        System.out.println("Sorted array in descending order: " + Arrays.toString(array));
    }

    public static void sortArray(int[] array) {
        int n = array.length;

        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (array[j] < array[j + 1]) {
                    // Swap array[j] and array[j+1]
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }
}
                `,
                comeout : `basic/7024bpc101.png`
            },
            {
                problem : `102. Write a Java Program to Sort Names in Alphabetical Order`,
                solution :  `
class Program102{
    public static void main(String args[])throws ClassNotFoundException{
        String names[] = {"Sourabh", "Jatin", "Jaspreet", "Rishav", "Yaman"};
        java.util.Arrays.sort(names); 
        System.out.println("Names in alphabetical order : ");
        for (int i = 0; i < names.length; i++) {
            System.out.println(names[i]);            
        }
    }
}
                `,
                comeout : `basic/7038bpc102.png`
            },
            {
                problem : `103. Write a Java Program to Display Transpose Matrix`,
                solution :  null,
                comeout : null
            },
            {
                problem : `104. Write a Java Program to Search Key Elements in an Array`,
                solution :  null,
                comeout : null
            },
            {
                problem : `105. Write a Java Program to Accept the Marks of a Student and find Total Marks and Percentage`,
                solution :  `
import java.util.*;   
class percentages
{ 
    public static void main(String args[]) 
    {   
        Scanner sc = new Scanner(System.in); 
        int n;  
        
        System.out.println("Enter the total subjects ");
        n=sc.nextInt();
        
        int arr[] = new int[n]; 
        System.out.println("Enter the marks secured in each subject ");
        for(int i=0;i<n;i++) 
        {
            arr[i]=sc.nextInt();
        }
        
        int total=0;
        for(int i=0;i<n;i++)
        {
            total=total+arr[i];
        }
        System.out.println("The total marks obtained is "+total);
        float percentage; 
        percentage = (total / (float)n); 
        System.out.println( "Total Percentage : " + percentage + "%");                         
    }   
}               
                `,
                comeout : `basic/7031bpc105.png`
            },
            {
                problem : `106. Write a Java program to print numbers from 1 to 10 using a loop`,
                solution :  `
import java.util.Date;
class M {
    public static void main(String[] args) {
       int i;
       for (i=1;i<=10;i++)
        System.out.println(i);
    }
}
                `,
                comeout : `basic/7105BPC106.png`
            },
            {
                problem : `107. Write a Java program to calculate the sum of the first 10 natural numbers using a loop`,
                solution :  `
class N 
{  
public static void main(String[] args)   
{  
int i, num = 10, sum = 0;  
for(i = 1; i <= num; ++i)  
{  
sum = sum + i;  
}  
System.out.println("Sum of First 10 Natural Numbers is = " + sum);  
}  
}  
                `,
                comeout : `basic/7105bpc107.png`
            },
            {
                problem : `108. Write a Java program to print the multiplication table of a given number`,
                solution :  `
import java.util.Scanner;

public class basicprogram7048_108 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the number for the multiplication table: ");
        int number = scanner.nextInt();

        System.out.println("Multiplication Table for " + number + ":");

        for (int i = 1; i <= 10; i++) {
            System.out.println(number + " x " + i + " = " + number * i);
        }
    }
}
                `,
                comeout : `basic/7048bpc108.png`
            },
            {
                problem : `109. Write a Java program to find the factorial value of any number entered through the keyboard`,
                solution :  `
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class FactorialCal{
    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            System.out.print("Enter a number to find its factorial: ");
            int num = Integer.parseInt(reader.readLine());

            // Check if the input is non-negative
            if (num < 0) {
                System.out.println("Factorial is not defined for negative numbers.");
            } else {
                long result = calculateFactorial(num);
                System.out.println("The factorial of " + num + " is " + result);
            }
        } catch (IOException | NumberFormatException e) {
            e.printStackTrace();
        } finally {
            try {
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private static long calculateFactorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        } else {
            return n * calculateFactorial(n - 1);
        }
    }
}
                `,
                comeout : `basic/7107bpc109.png`
            },
            {
                problem : `110. Write a Java program that prompts the user to input an integer and then outputs the number with the digits reversed order`,
                solution :  `
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class ReverseDigits{
    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            System.out.print("Enter an integer: ");
            int number = Integer.parseInt(reader.readLine());

            int reversedNumber = reverseDigits(number);

            System.out.println("Reversed number: " + reversedNumber);
        } catch (IOException | NumberFormatException e) {
            e.printStackTrace();
        } finally {
            try {
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private static int reverseDigits(int number) {
        int reversedNumber = 0;

        while (number != 0) {
            int digit = number % 10;
            reversedNumber = reversedNumber * 10 + digit;
            number /= 10;
        }

        return reversedNumber;
    }
}
                `,
                comeout : `basic/7107bpc110.png`
            },
            {
                problem : `111. Write a Java program that reads a set of integers, and then prints the sum of the even and odd integers using a loop`,
                solution :  `
import java.util.Scanner;
class Sum {
  public static void main(String[] args) {
     Scanner input = new Scanner(System.in);

     System.out.print("Enter the number of integers: ");
     int n = input.nextInt();
     int[] numbers = new int[n];
     int sumEven = 0, sumOdd = 0;
     System.out.print("Enter " + n + " integers: ");
     for (int i = 0; i < n; i++) {
        numbers[i] = input.nextInt();
     }
     // Calculate the sum of even and odd integers
     for (int i = 0; i < n; i++) {
        if (numbers[i] % 2 == 0) {
           sumEven += numbers[i];
        } else {
           sumOdd += numbers[i];
        }
     }
     // Print the results

     System.out.println("Sum of even integers: " + sumEven);

     System.out.println("Sum of odd integers: " + sumOdd);
  }
}
                `,
                comeout : null
            },
            {
                problem : `112. Write a Java program to check whether a number is a prime number or not`,
                solution :  `
class P{    
    public static void main(String args[]){    
        int i,m=0,flag=0;      
        int n=3;    
        m=n/2;      
        if(n==0||n==1){  
        System.out.println(n+" is not prime number");      
        }else{  
        for(i=2;i<=m;i++){      
        if(n%i==0){      
        System.out.println(n+" is not prime number");      
        flag=1;      
        break;      
        }      
        }      
        if(flag==0)  { System.out.println(n+" is prime number"); }  
        }  
    }    
    }   
                `,
                comeout : `basic/7105bpc112.png`
            },
            {
                problem : `113. Write a Java program to calculate HCF of two given numbers using a loop`,
                solution :  `
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class PrimeNumberChecker{
    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            System.out.print("Enter a number to check if it's prime: ");
            int number = Integer.parseInt(reader.readLine());

            if (isPrime(number)) {
                System.out.println(number + " is a prime number.");
            } else {
                System.out.println(number + " is not a prime number.");
            }
        } catch (IOException | NumberFormatException e) {
            e.printStackTrace();
        } finally {
            try {
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private static boolean isPrime(int number) {
        if (number <= 1) {
            return false;
        }

        for (int i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                return false;
            }
        }

        return true;
    }
}
                `,
                comeout : `basic/7107bpc113.png`
            },
            {
                problem : `114. Write a Java program to enter numbers until the user wants and then display the count of positive, negative, and zeros`,
                solution :  `
class number
{
    public static void main(String arg[])throws java.io.IOException
    {
        java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        int positive=0;
        int negative=0;
        int zeros=0;

        Double num;
        String a="";
        System.out.println("Enter numbers, to quit enter q : ");
        while(true)
        {   try
           {
               a=input.readLine();
               num= Double.parseDouble(a); 
            }
            catch(java.lang.NumberFormatException e)
           {
               if(a.equals("q"))
               break;
               else continue;
           }
            if(num<0)
            negative ++;
            else if (num>0)
            positive++;
            else
            zeros++;
        }
    System.out.println("The number of positive number were "+positive);
    System.out.println("The number of negative number were "+negative);
    System.out.println("The number of zeros were "+zeros);
    }
}
                `,
                comeout : `basic/7034bpc114.png`
            },
            {
                problem : `115. Write a Java program to enter numbers until the user wants and then display the largest and smallest numbers entered`,
                solution :  `
class number
{
    public static void main(String arg[])throws java.io.IOException
    {
        java.io.BufferedReader input = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        double max = Double.MIN_VALUE;
        double min = Double.MAX_VALUE;

        // int num=1;
        // System.out.println("Enter numbers, to quit enter any non-numeric character : ");
        // while(true)
        // {   try
        //    {num= Integer.parseInt(input.readLine());}
        //    catch(java.lang.NumberFormatException a)
        //    {
        //        break;
        //    }
        //     if(num<0)
        //     negative ++;
        //     else if (num>0)
        //     positive++;
        //     else
        //     zeros++;
        // }

        Double num;
        String a="";
        System.out.println("Enter numbers, to quit enter q : ");
        while(true)
        {   try
           {
               a=input.readLine();
               num= Double.parseDouble(a); 
            }
            catch(java.lang.NumberFormatException e)
           {
               if(a.equals("q"))
               break;
               else continue;
           }
            if(num>max)
            max=num;
            if(num<min)
            min=num;
        }

    System.out.println("The maximum number was "+max);
    System.out.println("The minimum number was "+min);

    }
}
                `,
                comeout : `basic/7034bpc115.png`
            },
            {
                problem : `116. Write a Java program to print out all Armstrong numbers between 1 to 600 using a loop`,
                solution :  `
class a1
{
	a1()
	{
		System.out.println("\nObject is created");
	}
	public static void main(String brr[])
	{
		int count=0,totalsum=0,sumcube=1,demo,cube,number;
		for(int j=1;j<=600;j++)
		{
			number=j;
			demo=number;
			while(demo>0)
			{
				count++;
				demo=demo/10;
			}
			demo=number;
			while(demo>0)
			{
				cube=demo%10;
				for(int i=1;i<=count;i++)
				{
					sumcube=sumcube*cube;
				} 
				totalsum=totalsum+sumcube;
				demo=demo/10;
				sumcube=1;
			}
			if(number==totalsum)
			{
				System.out.print("\nthe "+number+" will be armstrom number ");
			}
				totalsum=0;
				count=0;
		}
	
	}
		
}
                `,
                comeout : `basic/7004bpc116.png`
            },
            {
                problem : `117. Write a Java program to count the total number of notes in the entered amount using a loop`,
                solution :  null,
                comeout : null
            },
            {
                problem : `118. Write a Java program to print the Fibonacci series of n terms where n is input by the user using a loop`,
                solution :  `
class oneHundredEighteen {
    public static void main(String[] args) throws java.io.IOException {
        int num = 0, first = 0, second = 1, next = 0;
        java.io.BufferedReader reader = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        System.out.print("Enter a number: ");
        try {
            num = java.lang.Integer.parseInt(reader.readLine());
            System.out.println("Fibonnaci series of " + num + " terms is ");
            for (int i = 1; i <= num; i++) {
                if(i==1) System.out.print(first + " ");
                else if(i==2) System.out.print(second + " ");
                else{
                    next = first + second;
                    System.out.print(next + " ");
                    first = second;
                    second = next;
                }
            }
            System.out.println();
        } catch (java.lang.NumberFormatException e) {
            System.out.println("Invalid input. Please enter a valid number.");
        }
    }
}
                `,
                comeout : `basic/7001bpc118.png`
            },
            {
                problem : `119. Write a Java program to calculate the sum of a given series where n is input by the user`,
                solution :  `
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class FibonacciSeries {
    public static void main(String[] args) {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        try {
            System.out.print("Enter the number of terms for Fibonacci series: ");
            int n = Integer.parseInt(reader.readLine());

            System.out.println("Fibonacci series up to " + n + " terms:");

            for (int i = 0; i < n; i++) {
                System.out.print(fibonacci(i) + " ");
            }
        } catch (IOException | NumberFormatException e) {
            e.printStackTrace();
        } finally {
            try {
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private static int fibonacci(int n) {
        if (n <= 1) {
            return n;
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    }
}
                `,
                comeout : `basic/7107bpc119.png`
            },
            {
                problem : `120. Write a Java method to compute the average of three numbers`,
                solution :  `
public class basicprogram7048_120 {

    public static void main(String[] args) {
        System.out.println(averageOfThree(5, 10, 15)); // 10.0
    }

    public static double averageOfThree(int num1, int num2, int num3) {
        return (num1 + num2 + num3) / 3.0;
    }
}
                `,
                comeout : `basic/7048bpc120.png`
            },
            {
                problem : `121. Write a Java method to find the smallest number among three numbers`,
                solution :  `
public class basicprogram7048_121 {

    public static void main(String[] args) {
        System.out.println(findSmallest(5, 8, 1)); // 1
        System.out.println(findSmallest(9, 4, 6)); // 4
        System.out.println(findSmallest(3, 3, 3)); // 3
    }

    public static int findSmallest(int num1, int num2, int num3) {
        return Math.min(num1, Math.min(num2, num3));
    }
}
                `,
                comeout : `basic/7048bpc121.png`
            },
            {
                problem : `122. Write a Java method to count all words in a string`,
                solution :  `
public class basicprogram7048_122 {
    public static void main(String[] args) {
        String input = "The quick brown fox jumps over the lazy dog.";
        int wordCount = countWords(input);
        System.out.println("The number of words in the string is: " + wordCount);
    }

    public static int countWords(String str) {
        int wordCount = 0;

        boolean word = false;
        int i = 0;

        while (i < str.length()) {
            if (Character.isLetter(str.charAt(i))) {
                wordCount++;
                word = true;
            } else if (word) {
                wordCount++;
                word = false;
            }
            i++;
        }
        return wordCount;
    }
}
                `,
                comeout : `basic/7048bpc122.png`
            },
            {
                problem : `123. Write a Java method to count all vowels in a string`,
                solution :  `
class String123 {
        public static void main(String[] args) {
        String inputString = "Hello, this is java programming.";
        System.out.println("Input String: " + inputString);
        
        int vowelCount = countAllVowels(inputString);
        System.out.println("Number of vowels in the string: " + vowelCount);
    }

    public static int countAllVowels(String str) {
        int count = 0;
        // Convert the input string to lowercase to make the comparison case-insensitive
        str = str.toLowerCase();

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            // Check if the character is a vowel ('a', 'e', 'i', 'o', 'u' - both lowercase and uppercase)
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count++;
            }
        }
        return count;
    }
}
                `,
                comeout : `basic/7056bpc123.png`
            },
            {
                problem : `124. Write a Java method to compute the sum of the digits in an integer`,
                solution :  `
class Method124 {
    public static void main(String[] args) {
        int number = 98824;
        System.out.println("Number: " + number);
        int sum = sumOfDigits(number);
        System.out.println("Sum of digits: " + sum);
    }

    public static int sumOfDigits(int num) {
        int sum = 0;

        // Iterate through each digit of the number until it becomes zero
        while (num != 0) {
            // Extract the last digit using modulo operator
            int digit = num % 10;
            // Add the extracted digit to the sum
            sum += digit;
            // Remove the last digit from the number
            num /= 10;
        }

        return sum;
    }
}
                `,
                comeout : `basic/7056bpc124.png`
            },
            {
                problem : `125. Write a Java method to check whether a year entered by the user is a leap year or not`,
                solution :  `
import java.util.Scanner;

class Q {
 
 public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
        System.out.print("Input a year: ");
        int year = in.nextInt();

        System.out.println(is_LeapYear(year));
    }
 
 public static boolean is_LeapYear(int y)
    {
        boolean a = (y % 4) == 0;
        boolean b = (y % 100) != 0;
        boolean c = ((y % 100 == 0) && (y % 400 == 0));

        return a && (b || c);
    }
}
                `,
                comeout : `basic/7105bpc125.png`
            },
            {
                problem : `126. Write a Java method to calculate the area of a triangle`,
                solution :  `
import java.util.Scanner;
public class basicProblems_126_7032 {
  public static void main(String[] args)
    {
        Scanner in = new Scanner(System.in);
         System.out.print("Input Side-1: ");
         double side1 = in.nextDouble();
         System.out.print("Input Side-2: ");
         double side2 = in.nextDouble();
         System.out.print("Input Side-3: ");
         double side3 = in.nextDouble();
         System.out.println( is_Valid(side1, side2,side3) ?
                "The area of the triangle is " + area_triangle(side1, side2, side3) : "Invalid triangle" );
    }

  public static boolean is_Valid(double side1, double side2, double side3) {
        if( side1 + side2 > side3 &&
                side2 + side3 > side1 &&
                side1 + side3 > side2) return true;
        else return false;
    }
   public static double area_triangle(double side1, double side2, double side3) {
        double area = 0;
        double s = (side1 + side2 + side3)/2;
        area = Math.sqrt(s*(s - side1)*(s - side2)*(s - side3));
        return area;
    }
}
                `,
                comeout : `basic/7032bpc126.png`
            },
            {
                problem : `127. Write a Java method to find the area of a pentagon`,
                solution :  `
class Method127 {
        public static void main(String[] args) {
        double sideLength = 7.5; // Length of a side of the pentagon
        double area = calculatePentagonArea(sideLength);
        System.out.println("Area of the pentagon: " + area);
    }

    public static double calculatePentagonArea(double sideLength) {
        int sides = 5; // Number of sides in a pentagon
        double numerator = 0.25 * sides * Math.pow(sideLength, 2);
        double denominator = Math.tan(Math.PI / sides);
        return numerator / denominator;
    }
}                
                `,
                comeout : `basic/7056bpc127.png`
            },
            {
                problem : `128. Write a Java method to check if a number is even or not`,
                solution :  `
import java.util.Scanner;
class kamal7019java128 {

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
                comeout : `basic/7019bpc128.png`
            },
            {
                problem : `129. Write a Java method to check if a number is a palindrome number or not`,
                solution :  `
class a1
{
	a1()
	{
		System.out.println("\nObject is created");
	}
	public static void main(String brr[])
	{
		int number;
		java.util.Scanner s1= new java.util.Scanner(System.in);
		System.out.print("\nEnter the number ");
		number=s1.nextInt();
		int demo=number,reverse=0;
		while(demo>0)
		{
			int a=demo%10;
			reverse=reverse*10+a;
			demo=demo/10;
		}
		if(reverse==number)
		{
			System.out.print("\nthe given number "+number+" is pallindrome");
		} 
		else
		{
			System.out.print("\nthe given number "+number+" is not pallindrome");
		}
	}
		
}
                `,
                comeout : `basic/7004bpc129.png`
            },
            {
                problem : `130. Write a Java method to display prime numbers between 1 to 20`,
                solution :  `
import java.util.Scanner;
class Bpc130{
    void prime(int s,int e){
        for(int i=s;i<=e;i++){
            int f=0;
            for(int j=2;j<=i/2;j++){
            if(i%j==0){
                ++f;
            }
        }
        if(i<=1){
            ++f;
        }
         else if(f==0){
            System.out.println(i);
        }
        }   
    }
}
class b{
    public static void main(String str[]){
    
    Bpc130 obj=new Bpc130();
    Scanner sc=new Scanner(System.in);
    System.out.println("Enter Start Number : ");
    int st=sc.nextInt();
    System.out.println("Enter End Number : ");
    int end=sc.nextInt();
    obj.prime(st,end);
    }
}
                `,
                comeout : `basic/7074bpc130.png`
            },
            {
                problem : `131. Write a Java method to find GCD and LCM of two numbers`,
                solution :  `
class a
{
	public static void hcf(int a ,int b )
	{
		int i;
		i=a>b?a:b;
		for(;i>0;--i)
		{
			if(a%i==0&&b%i==0)
			{
				System.out.print("\nthe hcf of "+a+" and "+b+" is :- "+i);
					break;
			}
		}
		
	}
	public static void lcm(int a,int b)
	{
		int i;
		for(i=(a<b?b:a);i<=(a*b);i=i+(a<b?b:a))
		{
			if(i%a==0&&i%b==0)
			{
			 break;
			}
		}
		if(i%a==0&&i%b==0)
		{
			System.out.print("\nthe lcm of "+a+" and "+b+" is :- "+i);
		}
	}
	public static void main(String arr[])
	{
		int x,y;	
		java.util.Scanner s1=new java.util.Scanner(System.in);
		System.out.print("\nEnter 1st number :- ");
		x=s1.nextInt();
		System.out.print("\nEnter 2nd number :- ");
		y=s1.nextInt();
		hcf(x,y);
		lcm(x,y);
	}
}
                `,
                comeout : `basic/7004bpc131.png`
            },
            {
                problem : `132. Write a Java method to find factorial using recursion in Java`,
                solution :  `
class oneHundredThirtyTwo {
    private static java.util.HashMap<Integer, Long> track = new java.util.HashMap<Integer, Long>();

    static long fact(int n){
        if(track.containsKey(n)) return track.get(n);
        long result =  n*fact(n-1);
        track.put(n, result);
        return result;
    }
    public static void main(String[] args) throws java.io.IOException {
        int num = 0;
        track.put(0, (long)1);
        track.put(1, (long)1);
        java.io.BufferedReader reader = new java.io.BufferedReader(new java.io.InputStreamReader(System.in));
        System.out.print("Enter a number: ");
        try {
            num = java.lang.Integer.parseInt(reader.readLine());
            long ans = fact(num);
            System.out.println("Factorial of " + num + " is " + ans);
        } catch (java.lang.NumberFormatException e) {
            System.out.println("Invalid input. Please enter a valid number.");
        }
    }
}
                `,
                comeout : `basic/7001bpc132.png`
            },
            {
                problem : `133. Write a Java program to reverse an integer number`,
                solution :  `
class revint {
  public static void main(String[] args) {

    int num = 6283, reverse = 0;
    
    System.out.println("Original integer is: " + num);
    while(num != 0) {
      int rim = num % 10;
      reverse = reverse * 10 + rim;

      num /= 10;
    }

    System.out.println("Reversed integer is: " + reverse);
  }
}
                `,
                comeout : `basic/7058bpc133.png`
            },
            {
                problem : `134. Write a Java program to round a float number to specified decimals`,
                solution :  `
class a 
{

    public static float roundFloat(float number, int decimalPlaces)
 {
        float factor = (float) Math.pow(10, decimalPlaces);
        number = number * factor;
        number = Math.round(number);
        number = number / factor;
        return number;
  }

    public static void main(String[] args) 
	{
        float original;
        int decimalPlaces;
	java.util.Scanner s1=new java.util.Scanner(System.in);
	System.out.print("Enter the float number :- ");
	original=s1.nextFloat();
	System.out.print("Enter the round decimal number :- ");
	decimalPlaces=s1.nextInt();
        float roundedNumber = roundFloat(original, decimalPlaces);
        System.out.println("Original number: " + original);
        System.out.println("Rounded number to " + decimalPlaces + " decimal places: " + roundedNumber);
    }
}
                `,
                comeout : `basic/7004bpc134.png`
            },
            {
                problem : `135. Write a Java program to test if a double number is an integer`,
                solution :  `
class number
{
    public static void main(String arg[])throws java.io.IOException
    {
        double a;
        int b;
        java.io.BufferedReader input = new java.io.BufferedReader (new java.io.InputStreamReader(System.in));
        System.out.println("Enter a number to check whether it is integer or not ");
        a= Double.parseDouble(input.readLine());
        b=(int)a;
        if(a-b!=0)
        System.out.println(a+" it is not an integer");
        else
        System.out.println(a+" it is a integer");
    }
}
                `,
                comeout : `basic/7034bpc135.png`
            },
            {
                problem : `136. Write a Java program to round up the result of integer division`,
                solution :  `
class number
{
    public static void main(String arg[])throws java.io.IOException
    {
        int a;
        int b;
        java.io.BufferedReader input = new java.io.BufferedReader (new java.io.InputStreamReader(System.in));
        System.out.println("Enter dividend ");
        a= Integer.parseInt(input.readLine());
        System.out.println("Enter divisor ");
        b= Integer.parseInt(input.readLine());

        System.out.println("The round-up division of the given numbers is "+((a+b-1)/b));
    }
}
                `,
                comeout : `basic/7034bpc136.png`
            },
            {
                problem : `137. Write a Java program to convert a Roman number to an integer number`,
                solution :  `
public class RomanToInteger
{
   	 public static void main(String[] args)
	 {
        	String romanNumeral;
		java.util.Scanner s1=new java.util.Scanner(System.in);
		romanNumeral=s1.nextLine(); 
        	int integerValue = convertRomanToInt(romanNumeral);
        	System.out.println(romanNumeral + " = " + integerValue);
   	 }
    private static int convertRomanToInt(String romanNumeral) 
	{
        Map<Character, Integer> romanNumeralValues = new HashMap<>();
        romanNumeralValues.put('I', 1);
        romanNumeralValues.put('V', 5);
        romanNumeralValues.put('X', 10);
        romanNumeralValues.put('L', 50);
        romanNumeralValues.put('C', 100);
        romanNumeralValues.put('D', 500);
        romanNumeralValues.put('M', 1000);
        int integerValue = 0;
        for (int i = 0; i < romanNumeral.length(); i++)
	 {
            int currentRomanNumeralValue = romanNumeralValues.get(romanNumeral.charAt(i));

            if (i + 1 < romanNumeral.length() && currentRomanNumeralValue < romanNumeralValues.get(romanNumeral.charAt(i + 1)))
	    {
                integerValue -= currentRomanNumeralValue;
            }
	  else {
                integerValue += currentRomanNumeralValue;
            }
        }
        return integerValue;
    }
}
                `,
                comeout : null
            },
            {
                problem : `138. Write a Java program to convert a float value to its absolute value`,
                solution :  `
import java.lang.Math;

class Absolute
{
    public static void main(String[] args) 
	{
	java.util.Scanner s1=new java.util.Scanner(System.in);
        float number;
	System.out.print("\nEnter the float number :- ");
	number =s1.nextFloat();
        float absoluteValue = Math.abs(number);
        System.out.println("The absolute value of " + number + " is: " + absoluteValue);
    }
}
                `,
                comeout : `basic/7004bpc138.png`
            },
            {
                problem : `139. Write a Java program to accept a float value of a number and return a rounded float value`,
                solution : null,
                comeout : `basic/7048bpc139.png`
            }
        ]
    // programData1 : basic constructs
    
    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end