/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData17.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData17 = [
            {
                problem : `1. Program to Check if a String contains only digits?`,
                solution : `
class string1 { 

	// Function to check if a string 
	// contains only digits 
	public static boolean
	onlyDigits(String str, int n) 
	{ 
		// Traverse the string from 
		// start to end 
		for (int i = 0; i < n; i++) { 

			// Check if character is 
			// not a digit between 0-9 
			// then return false
			if (str.charAt(i) < '0'
				|| str.charAt(i) > '9') { 
				return false; 
			} 
		} 
		// If we reach here, that means 
		// all characters were digits.
		return true; 
	} 

	// Driver Code 
	public static void main(String args[]) 
	{ 
		// Given string str 
		String str = "1a234"; 
		int len = str.length(); 

		// Function Call 
		System.out.println(onlyDigits(str, len)); 
	} 
}
                `,
                comeout : `Strings/7017String1.png`
            },
            {
                problem : `2. Program to perform Deep Copy for String?`,
                solution : `
class String2 
{  
// instance variable of the class ABC  
int x = 30;  
}  
class DeepCopyExample   
{     
// main method  
public static void main(String argvs[])   
{  
// creating an object of the class ABC  


String2 obj1 = new String2();  
  
// it will copy the reference, not value  
String2 obj2 = new String2();  
  
// updating the value to 6   
// using the reference variable obj2  
obj2.x = 6;  
  
// printing the value of x using reference variable obj1   
System.out.println("The value of x is: " + obj1.x);  
}  

}
                `,
                comeout : `Strings/7017string2.png`
            },
            {
                problem : `3. Program to prove String is immutable programmatically?`,
                solution : `
class ProveStringImmutable {  
    public static void referenceCheck(Object x, Object y) {  
        if (x == y) {  
            System.out.println("Both pointing to the same reference");  
    
        } else {  
            System.out.println("Both are pointing to different reference");  
        }  
    }  
    public static void main(String[] args) {  
        String st1 = "Java";  
        String st2 = "Java";  
        System.out.println("Before Modification in st1");  
        referenceCheck(st1, st2);  
        st1 += "ava";  
        System.out.println("After Modification");  
        referenceCheck(st1, st2);  
    }  
}  
                `,
                comeout : `Stromgs/7105_Strings_3.png`
            },
            {
                problem : `4. Program to remove all occurrences of a given character from input String?`,
                solution : `
import java.util.Scanner;

class Removecharacter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();
        System.out.print("Enter the character to be removed: ");
        char charToRemove = scanner.next().charAt(0);
        String resultString = removeCharacter(inputString, charToRemove);
        System.out.println("Result after removing '" + charToRemove + "': " + resultString);
        scanner.close();
    }
    private static String removeCharacter(String inputString, char charToRemove) {
        StringBuilder result = new StringBuilder();
        for (char currentChar : inputString.toCharArray()) {
            if (currentChar != charToRemove) {
                result.append(currentChar);
            }
        }
        return result.toString();
    }
}
                `,
                comeout : `Strings/7023Strings4.png`
            },
            {
                problem : `5. Program to append the string using StringBuffer class`,
                solution : `
import java.lang.*; 
class s { 

	public static void main(String[] args) 
	{ 

		StringBuffer s1 = new StringBuffer("Yaman "); 
		System.out.println("Input: " + s1); 

		s1.append(true); 
		System.out.println("Output: " + s1); 

		System.out.println(); 

		StringBuffer s2 = new StringBuffer("Sahota"); 
		System.out.println("Input: " + s2); 

		s2.append(false); 
		System.out.println("Output: " + s2); 
	} 
} 
                `,
                comeout : `Strings/7038String5.png`
            },
            {
                problem : `6. Program to insert the string using StringBuffer class`,
                solution : `
class Insert {
    public static void main(String[] args) {
        // Create a StringBuffer
        StringBuffer stringBuffer = new StringBuffer("Hello World!");

        // Insert a string at a specific position
        stringBuffer.insert(6, "Java ");

        // Print the modified string
        System.out.println("Modified String: " + stringBuffer.toString());
    }
}
                `,
                comeout : `Strings/7073_string6.png`
            },
            {
                problem : `7. Program to Add Characters to a String`,
                solution : `
class Add{
    public static void main(String[] args) {
        // Using concat method
        String originalString = "Hello";
        String newString1 = originalString.concat(" World!");

        // Using + operator
        String newString2 = originalString + " Java!";

        // Print the modified strings
        System.out.println("Original String: " + originalString);
        System.out.println("Modified String 1: " + newString1);
        System.out.println("Modified String 2: " + newString2);
    }
}
                `,
                comeout : `Strings/7073_string7.png`
            },
            {
                problem : `8. Program to Add Characters to a String`,
                solution : `
class AddCharactersToString {
    public static void main(String[] args) {
        // Create a StringBuilder
        StringBuffer s = new StringBuffer("Hello, ");

        // Add characters to the string
        s.append("World");

        // Print the final string
        System.out.println(s.toString()); // Output: "Hello, World!"
    }
}
                `,
                comeout : `Strings/7055string8.png`
            },
            {
                problem : `9. Program to Check Anagram (Two Strings are called the anagram if they contain the same characters. However, the order or sequence of the characters can be different.)`,
                solution : `
import java.util.Arrays;  
   
class Anagram{  
    static void isAnagram(String str1, String str2) {  
        String s1 = str1.replaceAll("\\s", "");  
        String s2 = str2.replaceAll("\\s", "");  
        boolean status = true;  
        if (s1.length() != s2.length()) {  
            status = false;  
        } else {  
            char[] ArrayS1 = s1.toLowerCase().toCharArray();  
            char[] ArrayS2 = s2.toLowerCase().toCharArray();  
            Arrays.sort(ArrayS1);  
            Arrays.sort(ArrayS2);  
            status = Arrays.equals(ArrayS1, ArrayS2);  
        }  
        if (status) {  
            System.out.println(s1 + " and " + s2 + " are anagrams");  
        } else {  
            System.out.println(s1 + " and " + s2 + " are not anagrams");  
        }  
    }  
   
    public static void main(String[] args) {  
        isAnagram("aryan", "aaryan");  
        isAnagram("race", "care");  
    }  
}
                `,
                comeout : `Strings/7025string9.png`
            },
            {
                problem : `10. Program to check whether a string is a Palindrome`,
                solution : `
class PalindromeString10
{    
    public static void main(String[] args) {    
        String string = "Kayak";    
        boolean flag = true;    
            
        //Converts the given string into lowercase    
        string = string.toLowerCase();    
            
        //Iterate the string forward and backward, compare one character at a time     
        //till middle of the string is reached    
        for(int i = 0; i < string.length()/2; i++){    
            if(string.charAt(i) != string.charAt(string.length()-i-1)){    
                flag = false;    
                break;    
            }    
        }    
        if(flag)    
            System.out.println("Given string is palindrome");    
        else    
            System.out.println("Given string is not a palindrome");    
    }    
}
                `,
                comeout : `Strings/7017String10.png`
            },
            {
                problem : `11. Program to Convert Enum to String`,
                solution : `
import java.io.*; 
// Enum 

enum Fruits { 

    Orange, 

    Apple, 

    Banana, 

    Mango; 
} 

  
// Main class 

class GFG { 

  

    // Main driver method 

    public static void main(String[] args) { 

  

        // Printing all the values 

        System.out.println(Fruits.Orange.name()); 

        System.out.println(Fruits.Apple.name()); 

        System.out.println(Fruits.Banana.name()); 

        System.out.println(Fruits.Mango.name()); 

    } 
}
                `,
                comeout : `Strings/7017String11.png`
            },
            {
                problem : `12. Program to Convert String to String Array`,
                solution : `
class StringToArray {
    public static void main(String[] args) {
        String inputString = "Hello, World! This is a sample string.";
        String[] stringArray = inputString.split(" ");
        
        for (String word : stringArray) {
            System.out.println(word);
        }
    }
}
                `,
                comeout : `Strings/7055string12.png`
            },
            {
                problem : `13. Program to count number of words in a String?`,
                solution : `
class Count{
    public static void main(String[] args) {
        // Example string
        String inputString = "This is a sample string";

        // Count the number of words
        int wordCount = countWords(inputString);

        // Print the result
        System.out.println("Number of words in the string: " + wordCount);
    }

    // Function to count words in a string
    private static int countWords(String str) {
        // Check for null or empty string
        if (str == null || str.isEmpty()) {
            return 0;
        }

        // Split the string into an array of words
        String[] words = str.split("\\s+");

        // Return the number of words
        return words.length;
    }
}
                `,
                comeout : `Strings/7073_string13.png`
            },
            {
                problem : `14. Program to count the total number of characters in a string`,
                solution : `
class CountC{
    public static void main(String[] args) {
        // Example string
        String inputString = "Hello, World!";

        // Count the number of characters
        int charCount = countCharacters(inputString);

        // Print the result
        System.out.println("Number of characters in the string: " + charCount);
    }

    // Function to count characters in a string
    private static int countCharacters(String str) {
        // Check for null or empty string
        if (str == null || str.isEmpty()) {
            return 0;
        }

        // Return the length of the string
        return str.length();
    }
}
                `,
                comeout : `Strings/7105_Strings_14.png`
            },
            {
                problem : `15. Program to count the total number of punctuation characters exists in a String`,
                solution : `
class PunctuationCount {
    public static void main(String[] args) {
        // Sample string
        String inputString = "Hello, world! This is a sample string.";

        // Count the total number of punctuation characters
        int punctuationCount = countPunctuation(inputString);

        // Display the result
        System.out.println("Total number of punctuation characters: " + punctuationCount);
    }

    // Function to count the total number of punctuation characters in a string
    static int countPunctuation(String str) {
        int count = 0;

        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);

            // Check if the character is a punctuation character
            if (isPunctuation(ch)) {
                count++;
            }
        }
        return count;
    }
    // Function to check if a character is a punctuation character
    static boolean isPunctuation(char ch) {
        return !Character.isLetterOrDigit(ch) && !Character.isWhitespace(ch);
    }
}
                `,
                comeout : `Strings/7107strings15.png`
            },
            {
                problem : `16. Program to count the total number of vowels and consonants in a string`,
                solution : `
import java.util.Scanner;

class A {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine().toLowerCase();

        int vowelCount = 0;
        int consonantCount = 0;

        for (int i = 0; i < input.length(); i++) {
            char ch = input.charAt(i);
            if (Character.isLetter(ch)) {
                if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                    vowelCount++;
                } else {
                    consonantCount++;
                }
            }
        }

        System.out.println("Total number of vowels: " + vowelCount);
        System.out.println("Total number of consonants: " + consonantCount);
    }
}
                `,
                comeout : `Strings/7057_String16.png`
            },
            {
                problem : `17. Program to determine whether a given string is palindrome`,
                solution : `
class Strings_17   
{    
    public static void main(String[] args) {    
        String string = "Kayak";    
        boolean flag = true;    
            
        //Converts the given string into lowercase    
        string = string.toLowerCase();    
            
        //Iterate the string forward and backward, compare one character at a time     
        //till middle of the string is reached    
        for(int i = 0; i < string.length()/2; i++){    
            if(string.charAt(i) != string.charAt(string.length()-i-1)){    
                flag = false;    
                break;    
            }    
        }    
        if(flag)    
            System.out.println("Given string is palindrome");    
        else    
            System.out.println("Given string is not a palindrome");    
    }    
}
                `,
                comeout : `Strings/7095_21_Strings_17.png`
            },
            {
                problem : `18. Program to determine whether one string is a rotation of another`,
                solution : `
class Strings_18 {  
    public static boolean checkRotation(String st1, String st2) {  
        if (st1.length() != st2.length()) {  
            return false;  
        }  
        String st3 = st1 + st1;  
        if (st3.contains(st2))  
            return true;  
        else  
            return false;  
    }  
    
    public static void main(String[] args) {  
        String str1 = "avajava";  
        String str2 = "javaava";  
        System.out.println("Checking if a string is rotation of another");  
        if (checkRotation(str1, str2)) {  
            System.out.println("Yes " + str2 + " is rotation of " + str1);  
        } else {  
            System.out.println("No " + str2 + " is not rotation of " + str1);  
        }  
    }  
}
                `,
                comeout : `Strings/7095_21_Strings_18.png`
            },
            {
                problem : `19. Program to divide a string in 'N' equal parts.`,
                solution : `
class SubsetToString
{
  static void subString(String str, int n) 
  {
    for (int i = 0; i < n; i++) //starting index
    {
      for (int j = i + 1; j <= n; j++) //ending index
      {
        System.out.println(str.substring(i, j));
      }
    }
  }
  public static void main(String[] args) 
  {
    System.out.println("\nProgram Find all the Subset of a string.\n");
    java.util.Scanner sc = new java.util.Scanner(System.in);
    System.out.print("Enter a String :  ");
    String str = sc.nextLine();
    System.out.println("\nOrginal String is :  " + str);
    System.out.println("subsets of a given string are :  ");
    SubsetToString s = new SubsetToString();
    s.subString(str, str.length());
  }
}
                `,
                comeout : null
            },
            {
                problem : `20. Program to find all subsets of a string`,
                solution : `
class StringPermutations {
    public static void main(String[] args) {
        String inputString = "four";
        findPermutations(inputString, "");
    }

    public static void findPermutations(String input, String current) {
        int length = input.length();

        // If the input string is empty, we've formed a permutation
        if (length == 0) {
            System.out.println(current);
        } else {
            for (int i = 0; i < length; i++) {
                char currentChar = input.charAt(i);
                String remaining = input.substring(0, i) + input.substring(i + 1);
                findPermutations(remaining, current + currentChar);
            }
        }
    }
}
                `,
                comeout : `Strings/7072Strings20.png`
            },
            {
                problem : `21. Program to find all the permutations of a string`,
                solution : `
class StringPermutations {
    public static void main(String[] args) {
        String inputString = "four";
        findPermutations(inputString, "");
    }

    public static void findPermutations(String input, String current) {
        int length = input.length();

        // If the input string is empty, we've formed a permutation
        if (length == 0) {
            System.out.println(current);
        } else {
            for (int i = 0; i < length; i++) {
                char currentChar = input.charAt(i);
                String remaining = input.substring(0, i) + input.substring(i + 1);
                findPermutations(remaining, current + currentChar);
            }
        }
    }
}
                `,
                comeout : `Strings/7055string21.png`
            },
            {
                problem : `22. Program to find maximum and minimum occurring character in a string`,
                solution : `
class String122 {
    public static int wordcount(String string) {
        int count = 0;

        char ch[] = new char[string.length()];
        for (int i = 0; i < string.length(); i++) {
            ch[i] = string.charAt(i);
            if (((i > 0) && (ch[i] != ' ') && (ch[i - 1] == ' ')) || ((ch[0] != ' ') && (i == 0)))
                count++;
        }
        return count;
    }

    public static void main(String[] args) {
        String string = " Basic Programming Constructs programm 122";
        System.out.println(wordcount(string) + " words.");
    }
}
                `,
                comeout : null
            },
            {
                problem : `23. Program to find Reverse of the string`,
                solution : `
class A
{
  public static void main(String args[])
  {
     StringBuffer a = new StringBuffer("ABCDE");
     System.out.println( "The reverse string--"+a.reverse());
  }
}
                `,
                comeout : `Strings/strings23_7024.png`
            },
            {
                problem : `24. Program to find the duplicate characters in a string`,
                solution : `
class Strings_24{
    public static void main(String args[]) {
        
        String inputStr ="teeter";

        for(char i :inputStr.toCharArray()){
        if ( inputStr.indexOf(i) == inputStr.lastIndexOf(i)) {
            System.out.println("First non-repeating character is: "+i);
            break;
        }
        }
    }
}
                `,
                comeout : `Strings/7095_21_Strings_24.png`
            },
            {
                problem : `25. Program to find the duplicate words in a string`,
                solution : `
class DuplicateWord 
{    
    public static void main(String[] args) 
    {  
        System.out.println("\nProgram to find the duplicate words in a string\n");   
        String string = "Hello how are you and What are you doing";    
        int count;       
        string = string.toLowerCase();        
        String words[] = string.split(" ");    
        System.out.println("Orginal string  is : "+string);     
        System.out.println("Duplicate words in a given string : ");     
        for(int i = 0; i < words.length; i++) {    
            count = 1;    
            for(int j = i+1; j < words.length; j++) {    
                if(words[i].equals(words[j])) {    
                    count++;       
                    words[j] = "0";    
                }    
            }        
            if(count > 1 && words[i] != "0")    
                System.out.println(words[i]);    
        }    
    }    
}    
                `,
                comeout : `Strings/7055string25.png`
            },
            {
                problem : `26. Program to find the frequency of characters`,
                solution : `
import java.util.Scanner;
class spro4
{
    public static void main(String st[])
    {
    String str="hello world";
    int count=0;
    System.out.println("String is :"+str);
    System.out.print("Enter a character to find its frequency: ");
    Scanner sc= new Scanner(System.in);
    char c = sc.next().charAt(0);

    for(int i=0; i<str.length();i++)
    {
        if(c== str.charAt(i))
          {
            count++;
          }
    }
    System.out.print("Frequency of "+c+" in the string is: "+ count);
    }
}
                `,
                comeout : `Strings/7062Strings26.png`
            },
            {
                problem : `27. Program to find the largest and smallest word in a string`,
                solution : `
import java.util.Scanner;

class WordLength {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

       
        String[] words = inputString.split("\\s+");
        String smallestWord = words[0];
        String largestWord = words[0];

        for (int i = 1; i < words.length; i++) {
            if (words[i].length() < smallestWord.length()) {
                smallestWord = words[i];
            }
            if (words[i].length() > largestWord.length()) {
                largestWord = words[i];
            }
        }

        System.out.println("Smallest word: " + smallestWord);
        System.out.println("Largest word: " + largestWord);

        scanner.close();
    }
}
                `,
                comeout : `Strings/7085String27.png`
            },
            {
                problem : `28. Program to find the longest repeating sequence in a string`,
                solution : `
import java.io.*;
import java.util.*;

class Strings_28
{
	static int findLongestRepeatingSubSeq(String str)
	{
		int n = str.length();

		
		int[][] dp = new int[n+1][n+1];

		// Fill dp table (similar to LCS loops)
		for (int i=1; i<=n; i++)
		{
			for (int j=1; j<=n; j++)
			{
				
				if (str.charAt(i-1) == str.charAt(j-1) && i!=j)
					dp[i][j] = 1 + dp[i-1][j-1];		 
					
				
				else
					dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
			}
		}
		return dp[n][n];
	}
	
	
	public static void main (String[] args) 
	{
		String str = "aabb";
		System.out.println("The length of the largest subsequence that"
			+" repeats itself is : "+findLongestRepeatingSubSeq(str));
	}
}
                `,
                comeout : null
            },
            {
                problem : `29. Program to find the most repeated word in a text file`,
                solution : `
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

 class String29{
    public static void main(String[] args) {
        try {
            String filePath = "your_text_file_path.txt"; 
            BufferedReader reader = new BufferedReader(new FileReader(filePath));

            String line;
            StringBuilder content = new StringBuilder();

            
            while ((line = reader.readLine()) != null) {
                content.append(line).append(" ");
            }

            reader.close();

            
            String[] words = content.toString().toLowerCase().split("\\s+");

            Map<String, Integer> wordCount = new HashMap<>();

            for (String word : words) {
                
                word = word.replaceAll("[^a-zA-Z]", "");

                if (!word.isEmpty()) {
                    wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
                }
            }

            
            String mostRepeatedWord = "";
            int maxCount = 0;

            for (Map.Entry<String, Integer> entry : wordCount.entrySet()) {
                if (entry.getValue() > maxCount) {
                    maxCount = entry.getValue();
                    mostRepeatedWord = entry.getKey();
                }
            }

            System.out.println("Most Repeated Word: " + mostRepeatedWord);
            System.out.println("Count: " + maxCount);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
                `,
                comeout : null
            },
            {
                problem : `30. Program to find the number of the words in the given text file`,
                solution : `
class  spro3
{
    public static void main(String st[])
    {
        String str= new String( "Java is platform independent. ");
        int c=0;
        System.out.println("String is :"+str);

       int n= str.length();
       for(int i=0; i<n;i++)
       {
        char s= str.charAt(i);
        if(s==' ')
          {
            c++;
          }
       }
       System.out.print("No. of words in String :"+ (c));
    }
}
                `,
                comeout : `Strings/7062Strings30.png`
            },
            {
                problem : `31. Program to Get a Character From the Given String`,
                solution : `
class A { 
 
	public static char
	getCharFromString(String str, int index) 
	{ 
		return str.charAt(index); 
	} 

	
	public static void main(String[] args) 
	{ 
		String str = "ABCDEFGH"; 

		
		int index = 5; 
		char ch = getCharFromString(str, index); 

		System.out.println("Character from " + str 
						+ " at index " + index 
						+ " is " + ch); 
	} 
} 
                `,
                comeout : `Strings/7025String31.png`
            },
            {
                problem : `32. Program to Insert a string into another string`,
                solution : `
import java.util.Scanner;

public class String32 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the main string from the user
        System.out.print("Enter the main string: ");
        String mainString = scanner.nextLine();

        // Get the string to be inserted
        System.out.print("Enter the string to insert: ");
        String insertString = scanner.nextLine();

        // Get the index at which to insert the string
        System.out.print("Enter the index to insert the string: ");
        int index = scanner.nextInt();

        // Check if the index is within the valid range
        if (index >= 0 && index <= mainString.length()) {
            // Insert the string and display the result
            String resultString = insertStringIntoMainString(mainString, insertString, index);
            System.out.println("Result: " + resultString);
        } else {
            System.out.println("Invalid index. Please enter a valid index.");
        }

        scanner.close();
    }

    private static String insertStringIntoMainString(String mainString, String insertString, int index) {
        // Concatenate the substrings before and after the insertion point
        return mainString.substring(0, index) + insertString + mainString.substring(index);
    }
}
                `,
                comeout : `Strings/7105_Strings_32.png`
            },
            {
                problem : `33. Program to Iterate Over Characters in String`,
                solution : `
import java.io.*;
import java.util.*;
class Strings_33 {
    static void traverseString(String str)
    {
        for (int i = 0; i < str.length(); i++) {
 
            System.out.print(str.charAt(i) + " ");
        }
    }
 
    // Method 2
    // Main driver method
    public static void main(String[] args)
    {
        // Custom input string
        String str = "Hello world";
 
        // Calling the Method 1
        traverseString(str);
    }
}
                `,
                comeout : null
            },
            {
                problem : `34. Program to Print a New Line in String`,
                solution : `
public class NewLineString {

	public static void main(String[] args) 
	{
		  System.out.println("Java" + '\n' + "Programming");
	}
}
                `,
                comeout : `Strings/7075StringP34.png`
            },
            {
                problem : `35. Program to Print even length words`,
                solution : `
public class EvenLength {  
    public static void main(String str[] ) {  
        String s = "This is the java even length word program ";  
            
        String[] words = s.split(" ");  
            
        for(String word : words) {  
            if(word.length() % 2 == 0) {  
                System.out.println(word);  
            }  
        }  
    }  
}  
                `,
                comeout : `Strings/7069string35.png`
            },
            {
                problem : `36. Program to print smallest and biggest possible palindrome word in a given string`,
                solution : `
class Strings_36 { 

    // Function to check if a 
    // word is palindrome 
    public static boolean checkPalin(String word) 
    { 
    
        int n = word.length(); 
    
        // making the check case 
        // case insensitive 
        word = word.toLowerCase(); 
    
        // loop to check palindrome 
        for (int i = 0; i < n; i++, n--) 
        { 
            if (word.charAt(i) != word.charAt(n - 1)) 
                return false; 
        } 
    
        return true; 
    } 
    
    // Determine the smallest and biggest 
    // palindromes in a given string 
    public static void lengthPalindrome(int temp, String words[]) 
    { 
        
        int count = 0; 
        String smallest = "", longest = ""; 
        
        for (int i = 0; i < temp; i++) { 
            
            if (checkPalin(words[i])) { 
                count++; 
                
                // Initialize smallest and longest 
                // when first palindromic word 
                // is found 
                if (count == 1) 
                    smallest = longest = words[i]; 
    
                // Compare smallest and longest with each 
                // palindromic words 
                else { 
                    
                    // If length of smallest is greater 
                    // than next palindromic word then 
                    // Store that word in smallest 
                    if (smallest.length() 
                        > words[i].length()) 
                        smallest = words[i]; 
    
                    // If length of longest is less 
                    // than next palindromic word then 
                    // Store that word in longest 
                    if (longest.length() 
                        < words[i].length()) 
                        longest = words[i]; 
                } 
            } 
        } 
    
        if (count == 0) 
            
            System.out.println("No palindrome found"); 
        
        else { 
            
            System.out.println("Smallest palindrome: "
                                + smallest); 
            System.out.println("Biggest palindrome: "
                                + longest); 
        } 
    } 
    
    public static void main(String[] args) 
    { 
        
        String string = "Wow Madam is driving racecar"; 
        String word = ""; 
        
        String[] words = new String[100]; 
        int temp = 0; 
    
        // Add extra space after string 
        // to get the last word 
        string = string + " "; 
    
        for (int i = 0; i < string.length(); i++) { 
            
            // Split the string into words 
            if (string.charAt(i) != ' ') { 
                word = word + string.charAt(i); 
            } 
            
            else { 
                
                // Add word to array words 
                words[temp] = word; 
                temp++; 
                word = ""; 
            } 
        } 
        
        System.out.println("Inputted String : " + string); 
        lengthPalindrome(temp, words); 
    } 
}
                `,
                comeout : `Strings/7095_21_Strings_36.png`
            },
            {
                problem : `37. Program to remove all the white spaces from a string`,
                solution : `
class RemoveWhiteSpaces {
    public static void main(String[] args) {
        String inputString = "This is a string with white spaces";

        
        String stringWithoutSpaces = inputString.replaceAll("\\s", "");

        System.out.println("Original String: " + inputString);
        System.out.println("String without Spaces: " + stringWithoutSpaces);
    }
}
                `,
                comeout : `Strings/7072Strings37.png`
            },
            {
                problem : `38. Program to replace lower-case characters with upper-case and vice-versa`,
                solution : `
import java.util.Scanner;

public class stringvv {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();
        String output = "";
        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (Character.isLowerCase(c)) {
                output += Character.toUpperCase(c);
            } else if (Character.isUpperCase(c)) {
                output += Character.toLowerCase(c);
            } else {
                output += c;
            }
        }
        System.out.println("Output: " + output);
    }
}
                `,
                comeout : `Strings/7031string38.png`
            },
            {
                problem : `39. Program to replace the spaces of a string with a specific character`,
                solution : `
public class ReplaceSpace  
{  
    public static void main(String str[] ) {  
        String s = "This is replace the space program";  
        char ch = '-';  
          
        s = s.replace(' ', ch);  
          
        System.out.println("String after replacing spaces with given character: ");  
        System.out.println(s);  
    }  
}  
                `,
                comeout : `Strings/7096strings39.png`
            },
            {
                problem : `40. Program to separate the Individual Characters from a String`,
                solution : `
public class IndividualCharacters  
{  
    public static void main(String[] args) {  
        String string = "characters ";  
  
        //Displays individual characters from given string  
        System.out.println("Individual characters from given string: ");  
  
        //Iterate through the string and display individual character  
        for(int i = 0; i < string.length(); i++){  
            System.out.print(string.charAt(i) + " ");  
        }  
    }  
}  
                `,
                comeout : `Strings/7006strings40.png`
            },
            {
                problem : `41. Program to Splitting into a number of sub-strings`,
                solution : `
import java.util.Arrays;
import java.util.Scanner;

public class String41 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Get the input string from the user
        System.out.print("Enter a string: ");
        String inputString = scanner.nextLine();

        // Get the delimiter from the user
        System.out.print("Enter the delimiter: ");
        String delimiter = scanner.nextLine();

        // Split the string using the delimiter
        String[] substrings = splitString(inputString, delimiter);

        // Display the result
        System.out.println("Resulting Substrings: " + Arrays.toString(substrings));

        scanner.close();
    }

    private static String[] splitString(String inputString, String delimiter) {
        // Use the split() method to split the string into substrings
        return inputString.split(delimiter);
    }
}
                `,
                comeout : `Strings/7025string41.png`
            },
            {
                problem : `42. Program to swap two string variables without using a third or temp variable.`,
                solution : `
import java.lang.*;
class B {  
    public static void main(String[] args) {  
        String x = "hello", y = "world";
        System.out.println("Before swapping: " + x + " " + y);  
        x = x + y;   
        y = x.substring(0, (x.length() - y.length())); 
        x = x.substring(y.length());  
        System.out.println("After swapping: " + x + " " + y);  
    }  
}  
                `,
                comeout : `Strings/7105_Strings_42.png`
            },
            {
                problem : `43. Program to Swapping Pair of Characters (Enter the string from the user and enter the characters that you want to swap with one another)`,
                solution : `
import java.util.Scanner;

class CharacterSwapper {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        
        System.out.print("Enter a string: ");
        String userString = scanner.nextLine();

        System.out.print("Enter the first character to swap: ");
        char charToSwap1 = scanner.next().charAt(0);

        System.out.print("Enter the second character to swap: ");
        char charToSwap2 = scanner.next().charAt(0);

        
        if (userString.contains(String.valueOf(charToSwap1)) && userString.contains(String.valueOf(charToSwap2))) {
            
            String resultString = swapCharacters(userString, charToSwap1, charToSwap2);
            System.out.println("Original string: " + userString);
            System.out.println("String after swapping characters: " + resultString);
        } else {
            System.out.println("Error: At least one of the characters is not present in the input string.");
        }
    }

    private static String swapCharacters(String inputString, char char1, char char2) {
        StringBuilder swappedString = new StringBuilder();
        for (char ch : inputString.toCharArray()) {
            if (ch == char1) {
                swappedString.append(char2);
            } else if (ch == char2) {
                swappedString.append(char1);
            } else {
                swappedString.append(ch);
            }
        }
        return swappedString.toString();
    }
}
                `,
                comeout : `Strings/7085String43.png`
            },
            {
                problem : `44. Read two String user input and check if the first contains second?`,
                solution : `
import java.util.*;
class string {
    
 public static boolean is_str_contains(String str1, String str2) {
    if (str1 == null || str2 == null) {
      throw new IllegalArgumentException("You can't pass null strings as input.");
    }
     boolean ans = false;
     for (int i = 0; i < str2.length() - 1; i++) {
       if (str2.charAt(i) == str1.charAt(0)) {
         for (int j = 0; j < str1.length(); j++) {
           if ((i + j) < str2.length() && str1.charAt(j) == str2.charAt(i + j) && j == str1.length() - 1) {
             ans = true;
             break;
           }
        }
      }
    }
    return ans;
  }

   public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input first string: ");
		String str1 = scanner.nextLine();
		System.out.print("Input second string: ");
		String str2 = scanner.nextLine();
		System.out.println("If the second string contains the first one? "+is_str_contains(str1, str2));		
		}
}

                `,
                comeout : `Strings/7086String44.png`
            },
            {
                problem : `45. Reserve String without reverse() function`,
                solution : `
class spro2
{
    public static void main(String arr[])
    {
    String s= "hello world";
    System.out.println("String: "+s);
    int x= s.length();
  
    while(x>0)
    {
      System.out.print(s.charAt(x-1));
      x--;
    }

    }
}
                `,
                comeout : `Strings/7077string45.png`
            },
            {
                problem : `46. Reverse String Word by Word`,
                solution : `
import java.util.Scanner;  
public class ReverseString  
{  
public static void main(String str[] )   
{  
String s;  
System.out.println("Enter a string: ");  
Scanner scanner = new Scanner(System.in);  
s = scanner.nextLine();  
scanner.close();   

String reversed = reverseString(s);  
System.out.println("The reversed string is: " + reversed);  
}  
public static String reverseString(String s)  
{  
if (s.isEmpty())                             
return s;  
return reverseString(s.substring(1)) + s.charAt(0);           
}  
}  
                `,
                comeout : `Strings/strings_46_7032.png`
            },
            {
                problem : `47. Write a program to check if two Strings are created with the same characters?`,
                solution : `        
class A 
{
    static String getString(char x) {
String s = String.valueOf(x);
	return s;
}


static boolean solve(String s1, String s2) 
{	
	String a = getString(s1.charAt(0)), 
		b = getString(s2.charAt(0));

	for (int i = 1; i < s1.length(); i++)
		if (s1.charAt(i) != s1.charAt(i - 1)) 
		{
			a += getString(s1.charAt(i));
		}

	for (int i = 1; i < s2.length(); i++)
		if (s2.charAt(i) != s2.charAt(i - 1)) 
		{
			b += getString(s2.charAt(i));
		}

	if (a.equals(b))
		return true;

	return false;
}

public static void main(String[] args) 
{
	String s1 = "RADHE", s2 = "RADHE";
	if (solve(s1, s2))
		System.out.print("Thik ha, chal rha hai");
	else
		System.out.print("Thik nhi hai");
}
}
                `,
                comeout : `Strings/7105_Strings_47.png`
            },
            {
                problem : `48. Write a program to find out the first non-repeated character from the input String?`,
                solution : `
class Strings_48
{
    public static void main(String args[])
    {
        String inputStr ="prepinsta";
        boolean flag = true;

        for(char i :inputStr.toCharArray())
        {
            // if current character is the last occurrence in the string
            if (inputStr.indexOf(i) == inputStr.lastIndexOf(i))
            {
                System.out.println("First non-repeating character is: "+ i);
                flag = false;
                break;
            }
        }

        if(flag)
            System.out.println("There is no non repeating character in input string");
    }
}
                `,
                comeout : null
            },
            {
                problem : `49. Create an object StringBuffer class to reverse the string.`,
                solution : `
class StringBufferReverse {
    public static String reverseString(String input) {
     
        StringBuffer stringBuffer = new StringBuffer(input);

        
        stringBuffer.reverse();

        
        return stringBuffer.toString();
    }

    public static void main(String[] args) {
        String originalString = "Java Programming";
        String reversedString = reverseString(originalString);

        System.out.println("Original String: " + originalString);
        System.out.println("Reversed String: " + reversedString);
    }
}
                `,
                comeout : `Strings/strings7048_49.png`
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

            }
        ]
    // programData17 : strings

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end