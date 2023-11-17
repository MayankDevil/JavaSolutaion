/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData16.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData16 = [
            {
                problem : `1. Create a Java program to access the java.util.Date class through import keyword and print the current date of the system.`,
                solution : `
import java.util.Date;

public class packages1_7024 {
    public static void main(String[] args) {
        
        Date currentDate = new Date();
        
        System.out.println("Current Date: " + currentDate);
    }
}
                `,
                comeout : `Packages/7023_Packages_1.png`
            },
            {
                problem : `2. Create a Java program to access the java.util.Date class through qualified way and print the current date of the system.`,
                solution : `
public class package2_7093{
    public static void main(String[] args) {
        java.util.Date currentDate = new java.util.Date();//access the date class using qualified way
        System.out.println("Current Date: " + currentDate);
    }
}
                `,
                comeout : `Packages/packages2_7024.png`
            },
            {
                problem : `3. Create a Java program to access the java.util.Date class through import keyword and print the current date of the system but inherit the Date class.`,
                solution : `
import java.util.Date;

class A extends Date {
    public static void main(String[] args) {
        CurrentDate currentDate = new CurrentDate();
        System.out.println("Current Date: " + currentDate);
    }
}
                `,
                comeout : null
            },
            {
                problem : `4. Create a Java program to access the java.util.Date class through the qualified way and print the current date of the system but inherit the Date class.`,
                solution : `
class Date {
    public static void main(String args[]){
    java.util.Date date=new java.util.Date();  
    System.out.println(date); 
    }
}            
                `,
                comeout : `Packages/7086Packages4.png`
            },
            {
                problem : `5. Create a Java program to create a package with multiple default classes.`,
                solution : `
package mypackage;

class Class1 {
    void printMessage() {
        System.out.println("This is Class1");
    }

   public static void main(String[] args) {
        Class1 c1 = new Class1();
       

        c1.printMessage();
}
}
  class Class2 {
    void printMessage() {
        System.out.println("This is Class2");
    }

    public static void main(String[] args) {
        
        Class2 c2 = new Class2();
        
        c2.printMessage();
}
}
                `,
                comeout : null
            },
            {
                problem : `6. Create a Java program to create a package with 4 public classes, create the object in another file and call the function created in those classes.`,
                solution : `
MyPackage/Class1.java
package MyPackage;

public class Class1 {
    public void function1() {
        System.out.println("Function 1 from Class1");
    }
}

    MyPackage/Class2.java
package MyPackage;

public class Class2 {
    public void function2() {
        System.out.println("Function 2 from Class2");
    }
}

    MyPackage/Class3.java
package MyPackage;

public class Class3 {
    public void function3() {
        System.out.println("Function 3 from Class3");
    }
}

MyPackage/Class4.java
package MyPackage;

public class Class4 {
    public void function4() {
        System.out.println("Function 4 from Class4");
    }
}
/MainApp.java
import MyPackage.Class1;
import MyPackage.Class2;
import MyPackage.Class3;
import MyPackage.Class4;

class Packages_6 {
    public static void main(String[] args) {
        Class1 obj1 = new Class1();
        Class2 obj2 = new Class2();
        Class3 obj3 = new Class3();
        Class4 obj4 = new Class4();

        obj1.function1();
        obj2.function2();
        obj3.function3();
        obj4.function4();
    }
}
                `,
                comeout : null
            },
            {
                problem : `7. Write a Java program to perform employee payroll processing using packages. In the java file, Emp.java creates a package employee and creates a class Emp. Declare the variables name, empid, category, bpay, hra, da, npay, pf, grosspay, incometax, and allowance. Calculate the values in methods. Create another java file Emppay.java. Create an object e to call the methods to perform and print values.`,
                solution : `
package employee;

class Emp {
    String name;
    double empid;
    String category;

    double bpay, hra, da, npay, pf, grossPay, incomeTax, allowance;

    public void getSal(int id, String n, double salary, String cate) {
        empid = id;
        name = n;
        bpay = salary;
        category = cate;
    }

    public void calulateSal() {
        // hra and da calculate
        if (bpay <= 10000) {
            hra = bpay * 0.2f;
            da = bpay * 0.8f;
        } else if (bpay <= 20000) {
            hra = bpay * 0.25f;
            da = bpay * 0.9f;
        } else {
            hra = bpay * 0.3f;
            da = bpay * 0.95f;
        }
        // gross pay cal
        grossPay = bpay + hra + da;

        // pf
        pf = (bpay + da) * 12 / 100;
        // income tax and allowance calculate
        if (bpay > 50000) {
            incomeTax = bpay * 0.1;
            allowance = bpay * 0.15;
        } else if (bpay > 30000) {
            incomeTax = bpay * 0.05;
            allowance = bpay * 0.1;
        } else if (bpay > 15000) {
            incomeTax = 0;
            allowance = bpay * 0.5;
        } else {
            incomeTax = 0;
            allowance = 0;
        }

        // net pay calculate
        npay = grossPay - pf - incomeTax;
    }

    public void printSalary() {
        System.out.println("Salary Printing");
        System.out.println("EmpId = " + empid);
        System.out.println("Emp Name = " + name);
        System.out.println("Basic Pay = " + bpay);
        System.out.print("Hra = ");System.out.printf("%.2f \n",hra);
        System.out.print("Da = ");System.out.printf("%.2f \n",da);
        System.out.print("Npay = ");System.out.printf("%.2f \n",npay);
        System.out.print("Pf = ");System.out.printf("%.2f \n",pf);
        System.out.print("GrossPay = ");System.out.printf("%.2f \n",grossPay);
        System.out.print("Allowance = ");System.out.printf("%.2f \n",allowance);

 
    }
    public static void main(String[] args) {
        
    }
}

package employee;

import employee.Emp;
 class Emppay {
   public static void main(String[] args) {
    Emp obj=new Emp();
    obj.getSal(101, "Uday", 10000, "management");
    obj.calulateSal();
    obj.printSalary();
   } 
}
                `,
                comeout : null
            },
            {
                problem : `8. Create a Java program to create a package with public class and protected members to be accessed in another class.`,
                solution : `
MyPackage/MyClass.java
package MyPackage;

public class MyClass {
    protected int protectedField;

    protected void protectedMethod() {
        System.out.println("Protected method in MyClass");
    }
}
 MyPackage/MyExtendedClass.java
package MyPackage;

public class MyExtendedClass extends MyClass {
    public void accessProtectedMembers() {
        protectedField = 42;  // Access the protected field
        protectedMethod();   // Access the protected method
        System.out.println("Value of protectedField: " + protectedField);
    }
}
 MainApp.java
package MyPackage;

class Packages_8 {
    public static void main(String[] args) {
        MyExtendedClass extendedObj = new MyExtendedClass();
        extendedObj.accessProtectedMembers();
    }
}
                `,
                comeout : null
            },
            {
                problem : `9. Create a Java program to create a nested package i.e. c4.sample with a public class and protected members to be accessed in another class.`,
                solution : `
class Test
{
    public static void main(String args[])
    {
        c4.sample.Demo d = new c4.sample.Demo();
        
        System.out.println("rollno "+d.name);
        System.out.println("rollno "+d.rollno);

    }   
}
                `,
                comeout : null
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
            }
        ]
    // programData16 : packages

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end