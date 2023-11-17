/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData7.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData7 = [
            {
                problem : `1. Write a Java program that throws an exception and catch it using a try-catch block`,
                solution : `
                class Exception_Handling{
                    public static void main(String x[] ) {
                  
                      try {
                        int divideByZero = 10 / 0;
                      }
                  
                      catch (ArithmeticException e) {
                        System.out.println("Arithmetic Exception : " + e.getMessage());
                      }
                    }
                  }
                `,
                comeout : `exception/7077ExceptionHandling1.png`
            },
            {
                problem : `2. Write a Java program to create a method that takes an integer as a parameter and throws an exception if the number is odd`,
                solution : `
class test{
    public static void main(String st[])
    {
    System.out.println("main started");
    int a=5, b=0,c;
    try{
    c=a/b;
    System.out.println(c);
    }
    catch(Exception e)
    {
    System.out.println(e);
    }
    try{
    c=a+b;
    System.out.println(c);
    }
    catch(Exception d)
    {
    System.out.println("Error");
    }
    }}
                `,
                comeout : `exception/7083Exceptionhandling2.png`
            },
            {
                problem : `3. Write a Java program to create a method that reads a file and throws an exception if the file is not found`,
                solution : `
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
 
class Read_File {
  public static void main(String x[] ) {
    try {
      r_File("test2.txt");
    } catch (FileNotFoundException e) {
      System.out.println("Exception: " + e.getMessage());
    }
  }

  public static void r_File(String fname) throws FileNotFoundException {
    File file = new File(fname);
    Scanner scanner = new Scanner(file);


    while (scanner.hasNextLine()) {
      String line = scanner.nextLine();
      System.out.println(line);
    }

    scanner.close();
  }
}
                `,
                comeout : `exception/7083Exceptionhandling3.png`
            },
            {
                problem : `4. Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive`,
                solution : `
//Write a Java program that reads a list of numbers from a file and throws an exception if any of the numbers are positive
import java.io.File;
import java.io.IOException;
import java.util.Scanner;

class PositiveNumberException extends Exception {
    public PositiveNumberException(String message) {
        super(message);
    }
}

 class ReadNumbersFromFile {
    public static void main(String[] args) {
        try {
            checkNumbersInFile("numbers.txt");
        } catch (PositiveNumberException e) {
            System.out.println("Positive number found: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("File not found or cannot be read: " + e.getMessage());
        }
    }

    public static void checkNumbersInFile(String fileName) throws IOException, PositiveNumberException {
        File file = new File(fileName);
        Scanner scanner = new Scanner(file);

        while (scanner.hasNext()) {
            int number = scanner.nextInt();
            if (number > 0) {
                scanner.close();
                throw new PositiveNumberException("Positive number detected: " + number);
            }
        }

        scanner.close();
    }
}
                `,
                comeout : `exception/7001Exception4.png`
            },
            {
                problem : `5. Write a Java program that reads a file and throws an exception if the file is empty`,
                solution : `
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class File_Check {
  public static void main(String x[] ) {
    try {
      check_Empty("test1.txt");
      System.out.println("File is not empty.");
    } catch (FileNotFoundException e) {
      System.out.println("Error: " + e.getMessage());
    } catch (EmptyFileException e) {
      System.out.println("Error: " + e.getMessage());
    }
  }

  static void check_Empty(String fname) throws FileNotFoundException, EmptyFileException {
    File file = new File(fname);
    Scanner scanner = new Scanner(file);

    if (!scanner.hasNextLine()) {
      scanner.close();
      throw new EmptyFileException("File is empty.");
    }

    scanner.close();
  }
}

class EmptyFileException extends Exception {
  EmptyFileException(String message) {
    super(message);
  }
}
                `,
                comeout : `exception/7055exceptionHandling5.png`
            },
            {
                problem : `6. Write a Java program that reads a list of integers from the user and throws an exception if any numbers are duplicates`,
                solution : `
class exception6{
    static class MyException extends Exception{
        MyException(String msg){
            super(msg);
        }
    }

    public static void main(String arg[]) throws java.io.IOException, exception6.MyException{
        java.io.BufferedReader input = new java.io.BufferedReader (new java.io.InputStreamReader(System.in));
        // declare hashmap
        java.util.HashMap<Integer, Boolean> map = new java.util.HashMap<Integer, Boolean>();

        try{
            System.out.print("Enter non repeating numbers : ");
            String[] list = input.readLine().split(" ");
            
            for(String st : list){
                int num = Integer.parseInt(st);
                if(map.containsKey(num)){
                    String err = num + " is repeated in the list";
                    throw new exception6.MyException(err);
                } else {
                    map.put(num, true);
                }
            }
            
        } catch(java.lang.NumberFormatException e){
            System.out.println("Invalid input. Please enter a valid number.");
        }
    }
}
                `,
                comeout : null
            },
            {
                problem : `7. Write a Java program to create a method that takes a string as input and throws an exception if the string does not contain vowels`,
                solution : `
class Exception_handling_7 {
    public static void main(String[] args) {
        try {
        String text = "Java handling and managing exceptions ";
        // String text = "Typy gyps fly.";
        System.out.println("Original string: " + text);
        checkVowels(text);
        System.out.println("String contains vowels.");
        } catch (NoVowelsException e) {
        System.out.println("Error: " + e.getMessage());
        }
    }
    
    public static void checkVowels(String text) throws NoVowelsException {
        boolean containsVowels = false;
        String vowels = "aeiouAEIOU";
    
        for (int i = 0; i < text.length(); i++) {
        char ch = text.charAt(i);
        if (vowels.contains(String.valueOf(ch))) {
            containsVowels = true;
            break;
        }
        }
        if (!containsVowels) {
        throw new NoVowelsException("String does not contain any vowels.");
        }
    }
    }
    class NoVowelsException extends Exception {
    public NoVowelsException(String message) {
        super(message);
    }
    }
                `,
                comeout : `exception/7072ExceptionHandling7.png`
            },
            {
                problem : `8. Write a Java program to connect the Java API to a Database, if the connection is not successful, then throw an exception`,
                solution : `
import java.sql.*;
class ExceptionHandle
{
public static void main(String st[]) 
{
try
{
        Class.forName("com.mysql.jdbc.Driver");
        Connection c=DriverManager.getConnection("jdbc:mysql://localhost:3306/bharat?useSSL=false","root","god123456");
                System.out.println("Connect to database successfully");
        c.close();

        }catch(ClassNotFoundException e){System.out.println("Unable to find class");}
        catch(SQLException e){System.out.println("Fail to connect!");}
}
}
                `,
                comeout : `exception/7101ExceptionHandling8.png`
            },
            {
                problem : `9. Write a Java program to manage the driver with a path, username, and password, if not successful, then throw an exception`,
                solution : `
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

class DatabaseManager {
    public static void main(String[] args) throws ClassNotFoundException {
//        Class.forName("com.mysql.jdbc.Driver");
        String dbUrl = "jdbc:mysql://localhost:3306/codevengers";
        String username = "root";
        String password = "";

        try {
            Connection connection = new DatabaseManager().getConnection(dbUrl, username, password);
            System.out.println("Connection successfull");
            connection.close();
        } catch (DatabaseConnectionException e) {
            System.out.println("Exception: " + e.getMessage());
        } catch (SQLException e) {
            System.out.println("SQL Exception: " + e.getMessage());
        }
    }

    Connection getConnection(String dbUrl, String username, String password) throws DatabaseConnectionException {
        try {
            return DriverManager.getConnection(dbUrl, username, password);
        } catch (SQLException e) {
            throw new DatabaseConnectionException("Failed to connect to the database: " + e.getMessage());
        }
    }
}

class DatabaseConnectionException extends Exception {
    public DatabaseConnectionException(String message) {
        super(message);
    }
}
                `,
                comeout : `exception/7001Exception9.png`
            },
            {
                problem : `10. Write a Java program to throw the SQL Query, insert, delete, update, if not successful, then throw an exception`,
                solution : `
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

class DatabaseOperationExample 
{    
    private static final String JDBC_URL = "jdbc:mysql://localhost:3306/your_database_name";
    private static final String USERNAME = "your_username";
    private static final String PASSWORD = "your_password";

    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");

            
            try (Connection connection = DriverManager.getConnection(JDBC_URL, USERNAME, PASSWORD)) {
              
                if (!insertData(connection, "John Doe", 25, "john@example.com")) {
                    throw new SQLExceptionCustom("Insert operation failed");
                }

               
                if (!updateData(connection, 1, "John Doe Updated")) {
                    throw new SQLExceptionCustom("Update operation failed");
                }

               
                if (!deleteData(connection, 1)) {
                    throw new SQLExceptionCustom("Delete operation failed");
                }
            }
        } catch (ClassNotFoundException | SQLException | SQLExceptionCustom e) {
            e.printStackTrace();
        }
    }
    
    private static boolean insertData(Connection connection, String name, int age, String email) throws SQLException {
        String insertQuery = "INSERT INTO your_table_name (name, age, email) VALUES (?, ?, ?)";
        try (PreparedStatement preparedStatement = connection.prepareStatement(insertQuery)) {
            preparedStatement.setString(1, name);
            preparedStatement.setInt(2, age);
            preparedStatement.setString(3, email);
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;
        }
    }
  
    private static boolean updateData(Connection connection, int id, String newName) throws SQLException {
        String updateQuery = "UPDATE your_table_name SET name = ? WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(updateQuery)) {
            preparedStatement.setString(1, newName);
            preparedStatement.setInt(2, id);
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;
        }
    }

    private static boolean deleteData(Connection connection, int id) throws SQLException {
        String deleteQuery = "DELETE FROM your_table_name WHERE id = ?";
        try (PreparedStatement preparedStatement = connection.prepareStatement(deleteQuery)) {
            preparedStatement.setInt(1, id);
            int rowsAffected = preparedStatement.executeUpdate();
            return rowsAffected > 0;
        }
    }
}
class SQLExceptionCustom extends SQLException {
    public SQLExceptionCustom(String message) {
        super(message);
    }
}
                `,
                comeout : null
            },
            {
                problem : `11. Write a Java program to show an example of the throws Keyword`,
                solution : `
class demo
{
public static void main(String st[]) throws InterruptedException
{
for(int i=1;i<=10;i++)
{
System.out.println(i);
Thread.sleep(1000);
}
}}
                `,
                comeout : `exception/7050exceptionhandling11.png`
            },
            {
                problem : `12. Write a Java program to show an example of multiple catch`,
                solution : `
class test{
    public static void main(String st[])
    {
    System.out.println("main started");
    int a=5, b=0,c;
    try{
    c=a/b;
    System.out.println(c);
    }
    catch(Exception e)
    {
    System.out.println(e);
    }
    try{
    c=a+b;
    System.out.println(c);
    }
    catch(Exception d)
    {
    System.out.println("Error");
    }
    }}
                `,
                comeout : `exception/7050exceptionhandling12.png`
            },
            {
                problem : `13. Write a Java program to show an example of a nested try block`,
                solution : `
class Test
{ 
	public static void main(String args[]) 
	{ 
		try { 

			int a[] = { 1, 2, 3, 4, 5 }; 

			System.out.println(a[5]); 

			try { 

				int x = a[2] / 0; 
			} 
			catch (ArithmeticException e2) { 
				System.out.println("division by zero is not possible"); 
			} 
		} 
		catch (ArrayIndexOutOfBoundsException e1) { 
			System.out.println("Element at such index does not exists"); 
		} 
	} 
} 
                `,
                comeout : null
            }
        ]
    // programData7 : exception handling

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end