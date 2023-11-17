/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData8.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData8 = [
            {
                problem : `1. Write a Java method to find the smallest number among three numbers.`,
                solution : `
class Test
{
    static void smallNumber(int n1, int n2, int n3)
    {
        if (n1 > n2)
            if (n2 > n3)
                System.out.println(n3);
            else
                System.out.println(n2);
        else
            if (n1 > n3)
                System.out.println(n3);
            else
                System.out.println(n1);
    }
    public static void main(String args[])
    {
        Test t = new Test();
        
        t.smallNumber(6,4,9);
        t.smallNumber(24,23,4);
    }
}
                `,
                comeout : `Functions/function1_7024.png`
            },
            {
                problem : `2. Write a Java method to compute the average of three numbers.`,
                solution : `
public class function1_7024 {
    public static void main(String[] args) {
        int num1 = 3;
        int num2 = 17;
        int num3 = 5;

        int smallest = findSmallestNumber(num1, num2, num3);

        System.out.println("The smallest number is: " + smallest);
    }

    public static int findSmallestNumber(int num1, int num2, int num3) {
        int smallest = num1;

        if (num2 < smallest) {
            smallest = num2;
        }

        if (num3 < smallest) {
            smallest = num3;
        }

        return smallest;
    }
}
                `,
                comeout : `Functions/function2_7100.png`
            },
            {
                problem : `3. Write a Java method to display the middle character of a string. Note: a) If the length of the string is odd there will be two middle characters. b) If the length of the string is even there will be one middle character.`,
                solution : `
class MiddleCharacter
{
    public static void main(String arg[])
    {
        middleCharacter();
    }
    public static void middleCharacter()
    {
        String s = new String("pripnce");
        int n = s.length();
        if(n%2 == 0)
        {
            System.out.println(s.substring(n/2, (n+2)/2));
            System.out.println(s.substring((n-1)/2, n/2));
        }
        else
        {
            System.out.println(s.substring(n/2, (n+1)/2));
        }
    }
}
                `,
                comeout : `Functions/function3_7019.png`
            },
            {
                problem : `4. Write a Java method to count all the words in a string.`,
                solution : `
class a
{
static int countWord(String s)
{
int t=1;
for(int i=0; i<s.length(); i++)
{

if((s.charAt(i) == ' ') && (s.charAt(i+1) != ' '))
{
t++;
}
}
return t;
}

public static void main(String args[])
{

System.out.println(countWord("Hello How are you"));
}

}
                `,
                comeout : `Functions/functions4_7007.png`
            },
            {
                problem : `5. Write a Java method to compute the future investment value at a given interest rate for a specified number of years.`,
                solution : `
import java.util.Scanner;

class FutureInvestmentValue {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the principal amount: ");
        double principal = scanner.nextDouble();

        
        System.out.print("Enter the annual interest rate (as a percentage): ");
        double annualInterestRate = scanner.nextDouble();
 
        System.out.print("Enter the number of years: ");
        int years = scanner.nextInt();
 
        double futureValue = calculateFutureValue(principal, annualInterestRate, years);
 
        System.out.println("Future Investment Value: " + futureValue);

        scanner.close();
    }
 
    private static double calculateFutureValue(double principal, double annualInterestRate, int years) {
      
        double monthlyInterestRate = annualInterestRate / 100 / 12;
 
        double futureValue = principal * Math.pow(1 + monthlyInterestRate, years * 12);
 
        return Math.round(futureValue * 100.0) / 100.0;
    }
}
                `,
                comeout : `Functions/Function5_7057.png`
            },
            {
                problem : `6. Write a Java method to print characters between two characters (i.e. A to P).`,
                solution : `
import java.util.Scanner;
class Between
{
    public static void main(String arg[])
    {
       betweenTwoCharacters();
    }
    public static void betweenTwoCharacters()
    {
        Scanner s = new Scanner(System.in);
        System.out.print("\nEnter a first character  :- ");
        char a  = s.next().charAt(0);
        System.out.print("\nEnter a second character :- ");
        char b  = s.next().charAt(0);
       
        while(a<b-1)
        {
            a++;
            System.out.println(a);
        }
    }
}
                `,
                comeout : `Functions/Functions6_7100.png`
            },
            {
                problem : `7. Write a Java method to check whether a string is a valid password.`,
                solution : `
public class functions_09_7032 {
    public static void main(String[] args) {
        System.out.println("twin prime number less than 100: ");
        for(int i=2; i<100; i++){
            if (isPrime(i) && isPrime(i+2)){
                System.out.println(i + " and "+ (i+2));
            }
        }
        }
        // function to check whether a given number is prime or not
        public static boolean isPrime(int n){
            if(n<2){
                return false;

            }
            for(int i=2; i<=Math.sqrt(n); i++){
                if(n%i==0){
                    return false;
                }
            }
            return true;

    }
}
                `,
                comeout : `Functions/7102function7.png`
            },
            {
                problem : `8. Write a Java method to display the current date and time.`,
                solution : `
import java.util.Date;

class DateTimeExample {
    public static void main(String[] args) {
        displayCurrentDateTime();
    }

    public static void displayCurrentDateTime() {
        Date currentDate = new Date();

       
        System.out.println("Current Date and Time: " + currentDate);
    }
}
                `,
                comeout : `Functions/7077Function8.png`
            },
            {
                problem : `9. Write a Java method to find all twin prime numbers less than 100.`,
                solution : `
import java.lang.*;
class G{
 public static void main(String[] args) {
        for (int i = 2; i < 100; i++) {
            if (check(i) && check(i + 2)) {
                System.out.printf("(%d, %d)\n", i, i + 2);
            }
        }
    }
    public static boolean check(long n) {
        if (n < 2) return false;
        for (int i = 2; i <= n / 2; i++) {
            if (n % i == 0) return false;
        }
        return true;
    }
}
                `,
                comeout : `Functions/7025function9.png`
            },
            {
                problem : `10. Write a Java method to count the number of digits in an integer with the value 2. The integer may be assumed to be non-negative.`,
                solution : `
public class DigitCounter {
    public static int countTwos(int number) {
        String numberStr = String.valueOf(number);
        int count = 0;

        for (int i = 0; i < numberStr.length(); i++) {
            if (numberStr.charAt(i) == '2') {
                count++;
            }
        }

        return count;
    }

    public static void main(String[] args) {
        int number = 22253;
        int numberOfTwos = countTwos(number);

        System.out.println("The number of 2s in " + number + " is: " + numberOfTwos);
    }
}
                `,
                comeout : `Functions/7006functions10.png`
            },
            {
                problem : `11. Write a Java method that accepts three integers and checks whether they are consecutive or not. Returns true or false.`,
                solution : `
import java.util.Scanner;
class check_consecutive { 
public static void main(String s[] )
{
    Scanner in = new Scanner(System.in);
    System.out.print("Input the first number: ");
    int x = in.nextInt();
    System.out.print("Input the second number: ");
    int y = in.nextInt();
    System.out.print("Input the third number: ");
    int z = in.nextInt();
    System.out.print("The three given numbers are consecutive(true or false) : ") ;
    System.out.println(test(x,y,z));
    }

public static boolean test(int x, int y, int z){
int max_num = Math.max(x, Math.max(y, z));
int min_num = Math.min(x, Math.min(y, z));
int middle_num = x+y+z - max_num - min_num;
return (max_num - middle_num) == 1 && (middle_num - min_num == 1);
}
} 
                `,
                comeout : `Functions/7083Functions11.png`
            },
            {
                problem : `12. Write a Java method that accepts three integers and returns true if one is the middle point between the other two integers, otherwise false`,
                solution : null,
                comeout : ``
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
        ]
    // programData8 : functions

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end