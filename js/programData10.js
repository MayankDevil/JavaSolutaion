/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData10.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData10 = [
            {
                problem : `1. Write a Java program to create a class called Animal with a method called makeSound(). Create a subclass called Cat that overrides the makeSound() method to bark.`,
                solution : `
class Animal {
    public void makeSound() {
        System.out.println("this is from animal class...");
    }
}
class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("cat does not barking"); // Cat overrides to bark
    }
}
class Inheritance1 {
    public static void main(String[] args) {
        Animal genericAnimal = new Animal(); // Creating an instance of Animal
        Animal myCat = new Cat(); // Creating an instance of Cat as Animal

        System.out.println("Sound of animal:");
        genericAnimal.makeSound(); // Calling makeSound() on the generic animal

        System.out.println("\nSound of the cat:");
        myCat.makeSound(); // Calling makeSound() on the cat (which will bark - overridden method)
    }
}                
                `,
                comeout : `Inheritance/Inheritance1_7056.png`
            },
            {
                problem : `2. Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print "Repairing a car".`,
                solution : `
abstract class Vehicle
{

public abstract void drive();
}
class Car extends Vehicle
{
public void drive()
{
System.out.println("Repairing a car");
} 
 public static void main(String args[])
 {
Car obj1=new Car();
obj1.drive();

 }
}
                `,
                comeout : `Inheritance/Inheritance2_7056.png`
            },
            {
                problem : `3. Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.`,
                solution : `
class Shape {
    public double getArea() {
        return 0; // Default implementation for unknown shapes
    }
}
// Rectangle subclass extending Shape
class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    public double getArea() {
        return length * width; // Calculate area of rectangle
    }
}

class Inheritance3 {
    public static void main(String[] args) {
        Shape shape = new Shape(); // Creating an instance of Shape (will use default getArea())

        Rectangle rectangle = new Rectangle(20, 40); // Creating an instance of Rectangle
        double rectangleArea = rectangle.getArea(); // Calculating area of rectangle

        System.out.println("Area of a shape (default): " + shape.getArea());
        System.out.println("Area of a rectangle: " + rectangleArea);
    }
}
                `,
                comeout : `Inheritance/Inheritance3_7056.png`
            },
            {
                problem : `4. Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().`,
                solution : `
// Employee class
class Employee {
    private double salary;

    public Employee(double salary) {
        this.salary = salary;
    }

    public void work() {
        System.out.println("Employee is working...");
    }

    public double getSalary() {
        return salary;
    }
}

// HRManager subclass extending Employee
class HRManager extends Employee {
    public HRManager(double salary) {
        super(salary);
    }

    @Override
    public void work() {
        System.out.println("HR Manager is working...");
    }

    public void addEmployee() {
        System.out.println("HR Manager is adding a new employee...");
    }
}

class Inheritance4 {
    public static void main(String[] args) {
        Employee emp = new Employee(6000); // Creating an instance of Employee
        HRManager hrManager = new HRManager(7500); // Creating an instance of HRManager

        emp.work(); // Calling work() for Employee
        System.out.println("Employee Salary: " + emp.getSalary());

        System.out.println();

        hrManager.work(); // Calling work() for HRManager (overridden method)
        System.out.println("HR Manager Salary: " + hrManager.getSalary());

        hrManager.addEmployee(); // Calling addEmployee() for HRManager (specific method)
    }
}
                `,
                comeout : `Inheritance/Inheritance4_7056.png`
            },
            {
                problem : `5. Write a Java program to create a class known as "BankAccount" with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.`,
                solution : `
class BankAccount 
{
float bal=0;

BankAccount(){}
BankAccount(float b)
{
bal=b;
}
void deposit(int b)
{

bal=bal+b;
System.out.println("Amount " +b+ " Successfully deposited\nCurrent balance = " +bal+ "\n");
}
void withdraw(int b)
{
if (b>0 && b<=bal)
{
System.out.println("Collect your amount = " +b);
bal=bal-b;
System.out.println("Current balance = " +bal+ "\n");
}
else
{
System.out.println("Insufficient balance");
}
}
}
class SavingsAccount extends BankAccount
{

SavingsAccount(float b)
{
bal=b;
}

void withdraw(int b)
{
if(bal<100 && bal<b)
{
System.out.println("Insufficient balence");
} 
else
{
System.out.println("Collect your amount = " +b);
bal=bal-b;
System.out.println("Current balance = " +bal+ "\n");
}
}

public static void main(String args[])
{

BankAccount obj1=new BankAccount(200);

obj1.deposit(100);

obj1.withdraw(300);

SavingsAccount obj2=new SavingsAccount(10);
obj2.withdraw(100);
}
}
                `,
                comeout : `Inheritance/Inheritance5_7007.png`
            },
            {
                problem : `6. Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.`,
                solution : `
class Animal {
    public void move() {
        System.out.println("The animal moves.");
    }
}

 class Cheetah extends Animal {
   @Override
    public void move() {
        System.out.println("The Cheetah runs.");
    }
}

class  Main_c{
    public static void main(String x[] ) {
        Animal a = new Animal();
        Cheetah c = new Cheetah();        
        a.move();
        c.move();
    }
}
                `,
                comeout : `Inheritance/Inheritance6_7083.png`
            },
            {
                problem : `7. Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title.`,
                solution : `
 class Person {
     private String firstName;
     private String lastName;
 
     public Person(String firstName, String lastName) {
         this.firstName = firstName;
         this.lastName = lastName;
     }
 
     public String getFirstName() {
         return firstName;
     }
 
     public String getLastName() {
         return lastName;
     }
 }
 
 class Employee extends Person {
     private int employeeId;
     private String jobTitle;
 
     public Employee(String firstName, String lastName, int employeeId, String jobTitle) {
         super(firstName, lastName);
         this.employeeId = employeeId;
         this.jobTitle = jobTitle;
     }
 
     public int getEmployeeId() {
         return employeeId;
     }
 
     
     public String getLastName() {
         return super.getLastName() + " (" + jobTitle + ")";
     }
 }
 
 class PersonAndEmployeeExample {
     public static void main(String[] args) {
         Person person = new Person("Bharat", "Bhatt");
         Employee employee = new Employee("Ravi", "Bhatt", 12345, "Software Engineer");
 
         System.out.println("Person: " + person.getFirstName() + " " + person.getLastName());
         System.out.println("Employee: " + employee.getFirstName() + " " + employee.getLastName() + ", Employee ID: " + employee.getEmployeeId());
     }
 }
                `,
                comeout : `Inheritance/Inheritance7_7101.png`
            },
            {
                problem : `8. Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.`,
                solution : `
import java.util.Scanner;
class Shape {
    public Shape() {
    }
    public double getPerimeter() {
        System.out.println("Perimeter calculation for generic shape.");
        return 0.0;
    }
    public double getArea() {
        System.out.println("Area calculation for generic shape.");
        return 0.0;
    }
}
class Circle extends Shape {
    private double radius;
    public Circle(double radius) {
        this.radius = radius;
    }
    @Override
    public double getPerimeter() {
        return 2 * Math.PI * radius;
    }
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}
class Shapetest {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the radius of the circle: ");
        double radius = scanner.nextDouble();
        Circle circle = new Circle(radius);
        System.out.println("Perimeter of the circle: " + circle.getPerimeter());
        System.out.println("Area of the circle: " + circle.getArea());

        scanner.close();
    }
}
                `,
                comeout : `Inheritance/Inheritance8_7091.png`
            },
            {
                problem : `9. Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car, and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.`,
                solution : `
package vehicles;
public abstract class Vehicle {
    private String make;
    private String model;
    private int year;
    private String fuelType;
    private double fuelEfficiency;

    public Vehicle(String make, String model, int year, String fuelType, double fuelEfficiency) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
        this.fuelEfficiency = fuelEfficiency;
    }
	
    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public int getYear() {
        return year;
    }

    public String getFuelType() {
        return fuelType;
    }

    public double getFuelEfficiency() {
        return fuelEfficiency;
    }

    public abstract double calculateFuelEfficiency();

    public abstract double calculateDistanceTraveled();

    public abstract double getMaxSpeed();
}
                `,
                comeout : `Inheritance/Inheritance9_7012.png`
            },
            {
                problem : `10. Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.`,
                solution : `
// Define the base class Employee
class Employee {
    private String name;
    private String address;
    private double salary;
    private String jobTitle;

    public Employee(String name, String address, double salary, String jobTitle) {
        this.name = name;
        this.address = address;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public double getSalary() {
        return salary;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public double calculateBonus() {
        return 0; // Default bonus calculation for generic Employee
    }

    public String generatePerformanceReport() {
        return "Performance report for " + name + ":\n" +
                "No specific performance metrics available.";
    }

    public void manageProject(String projectName) {
        System.out.println(name + " is managing project: " + projectName);
    }
}

// Subclass Manager
class Manager extends Employee {
    private int teamSize;

    public Manager(String name, String address, double salary, String jobTitle, int teamSize) {
        super(name, address, salary, jobTitle);
        this.teamSize = teamSize;
    }

    public int getTeamSize() {
        return teamSize;
    }

    @Override
    public double calculateBonus() {
        return getSalary() * 0.15; // Bonus calculation for Manager
    }

    @Override
    public String generatePerformanceReport() {
        return "Performance report for Manager " + getName() + ":\n" +
                "Team size: " + teamSize + " members";
    }
}

// Subclass Developer
class Developer extends Employee {
    private String programmingLanguage;

    public Developer(String name, String address, double salary, String jobTitle, String programmingLanguage) {
        super(name, address, salary, jobTitle);
        this.programmingLanguage = programmingLanguage;
    }

    public String getProgrammingLanguage() {
        return programmingLanguage;
    }

    @Override
    public double calculateBonus() {
        return getSalary() * 0.1; // Bonus calculation for Developer
    }

    @Override
    public String generatePerformanceReport() {
        return "Performance report for Developer " + getName() + ":\n" +
                "Programming language: " + programmingLanguage;
    }
}

// Subclass Programmer
class Programmer extends Developer {
    public Programmer(String name, String address, double salary, String programmingLanguage) {
        super(name, address, salary, "Programmer", programmingLanguage);
    }

    // No need to override calculateBonus() and generatePerformanceReport()
}

// Main class to test the implementation
class inheritance10 {
    public static void main(String[] args) {
        Manager manager = new Manager("Udaysinghbisht", "123 Main St", 70000, "Manager", 5);
        Developer developer = new Developer("Rohit singla", "456 Oak Ave", 60000, "Developer", "Java");
        Programmer programmer = new Programmer("Mayank Singh", "789 Elm Dr", 50000, "Python");

        System.out.println(manager.generatePerformanceReport());
        System.out.println("Bonus: =" + manager.calculateBonus()+"rs");
        manager.manageProject("Project A");

        System.out.println(developer.generatePerformanceReport());
        System.out.println("Bonus: =" + developer.calculateBonus()+"rs");
        developer.manageProject("Project B");

        System.out.println(programmer.generatePerformanceReport());
        System.out.println("Bonus: =" + programmer.calculateBonus()+"rs");
        programmer.manageProject("Project C");
    }
}
                `,
                comeout : `Inheritance/Inheritance10_7017.png`
            },
            {
                problem : `11. Create a program, showing an example of super keyword.`,
                solution : `
class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }

    void makeSound() {
        System.out.println("The animal makes a sound.");
    }
}

class Dog extends Animal {
    String breed;

    Dog(String name, String breed) {
        super(name); 
        
        this.breed = breed;
    }

    void makeSound() {
        super.makeSound(); 
        
        System.out.println("The dog barks.");
    }

    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Breed: " + breed);
    }
}

 class demo {
    public static void main(String[] args) {
        Dog myDog = new Dog("Buddy", "Golden Retriever");
        myDog.makeSound(); 
        
        System.out.println();
        myDog.displayInfo();
    }
}
                `,
                comeout : `Inheritance/Inheritance11_7100.png`
            },
            {
                problem : `12. Create a program, showing an example of super function.`,
                solution : `
class Animal{  
String color="white";  
}  
class Dog extends Animal{  
String color="brown";  
void printColor(){  
System.out.println(color);//prints color of Dog class  
System.out.println(super.color);//prints color of Animal class  
}  
}  
class TestSuper1{  
public static void main(String args[]){  
Dog d=new Dog();  
d.printColor();  
}}  

                `,
                comeout : `Inheritance/inheritance12_7024.png`
            },
            {
                problem : `13. Create a program, showing an example of method overriding.`,
                solution : `
class Animal {
    void makeSound() {
        System.out.println("The animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("The dog barks");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("The cat meows");
    }
}

public class inheritance13_7024 {
    public static void main(String[] args) {
        Animal animal = new Animal();
        animal.makeSound();

        Dog dog = new Dog();
        dog.makeSound();

        Cat cat = new Cat();
        cat.makeSound();
    }
}
                `,
                comeout : `Inheritance/inheritance13_7024.png`
            },
            {
                problem : `14. Create a program, showing an example of dynamic method dispatch.`,
                solution : `
class Std {
    public void print(){
            System.out.println("Student details.");
    }
}

class ClgStd extends Std {
    public void print(){
            System.out.println("College Student details.");
    }

    public static void main(String s[]){

        Std a = new ClgStd();
        a.print();
}
}
                `,
                comeout : `Inheritance/Inheritance14_7083.png`
            },
            {
                problem : `15. Write a Java program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.`,
                solution : `
// Define the abstract class Animal
abstract class Animal {
    abstract void sound(); // Abstract method for making a sound
}

// Subclass Lion
class Lion extends Animal {
    @Override
    void sound() {
        System.out.println("The lion roars");
    }
}

// Subclass Tiger
class Tiger extends Animal {
    @Override
    void sound() {
        System.out.println("The tiger growls");
    }
}

// Main class to test the implementation
 class inheritance15 {
    public static void main(String[] args) {
        Animal lion = new Lion();
        Animal tiger = new Tiger();

        lion.sound(); // Output: The lion roars
        tiger.sound(); // Output: The tiger growls
    }
}
                `,
                comeout : `Inheritance/Inheritance15_7017.png`
            },
            {
                problem : `16. Write a Java program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.`,
                solution : null,
                comeout : null
            },
            {
                problem : `17. Write a Java program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.`,
                solution : null,
                comeout : null
            },
            {
                problem : `18. Write a Java program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.`,
                solution : `
class Animal {
    public void eat()
    {
        System.out.println("eat method");

    }
    public void sleep()
    {
        System.out.println("sleep method");

    }

}
class Bird extends Animal{

    public void eat() {
        super.eat();
        System.out.println("overide eat");
    }


    public void sleep() {
        super.sleep();
        System.out.println("override sleep");
    }

    public void fly()
    {
        System.out.println("in fly method");

    }
}
class Animals{
    public static void main(String[] args) {
        Animal a =new Animal();
        Bird b = new Bird();
        a.eat();
        a.sleep();
        b.eat();
        b.sleep();
        b.fly();
    }
}
                `,
                comeout : `Inheritance/Inheritance18_7084.png`
            },
            {
                problem : `19. Write a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.`,
                solution : `
//Employee.java
abstract class Employee {
  protected String name;
  protected double baseSalary;

  public Employee(String name, double baseSalary) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  public abstract double calculateSalary();

  public abstract void displayInfo();
}
//Manager.java
class Manager extends Employee {
  private double bonus;

  public Manager(String name, double baseSalary, double bonus) {
    super(name, baseSalary);
    this.bonus = bonus;
  }

  @Override
  public double calculateSalary() {
    return baseSalary + bonus;
  }

  @Override
  public void displayInfo() {
    System.out.println("\tManager Name: " + name);
    System.out.println("\tBase Salary: $" + baseSalary);
    System.out.println("\tBonus: $" + bonus);
    System.out.println("\tTotal Salary: $" + calculateSalary());
  }
}
//Programmer.java
class Programmer extends Employee {
  private int overtimeHours;
  private double hourlyRate;

  public Programmer(String name, double baseSalary, int overtimeHours, double hourlyRate) {
    super(name, baseSalary);
    this.overtimeHours = overtimeHours;
    this.hourlyRate = hourlyRate;
  }

  @Override
  public double calculateSalary() {
    return baseSalary + (overtimeHours * hourlyRate);
  }

  @Override
  public void displayInfo() {
    System.out.println("\tProgrammer Name: " + name);
    System.out.println("\tBase Salary: $" + baseSalary);
    System.out.println("\tOvertime Hours: " + overtimeHours);
    System.out.println("\tHourly Rate: $" + hourlyRate);
    System.out.println("\tTotal Salary: $" + calculateSalary());
  }
}
//Main.java
class Inheritance_19 {
  public static void main(String[] args) {
    System.out.println();
    Employee manager = new Manager("\tCorona Cadogan", 6000, 1000);
    Employee programmer = new Programmer("\tAntal Nuka", 5000, 20, 25.0);

    manager.displayInfo();
    System.out.println("\t---------------------");
    programmer.displayInfo();
  }
}
                `,
                comeout : `Inheritacne/Inheritance19_7041.png`
            },
            {
                problem : `20. Write a Java program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape.`,
                solution : `
// Abstract class Shape3D
abstract class Shape3D {
    // Abstract methods to calculate volume and surface area
    public abstract double calculateVolume();
    public abstract double calculateSurfaceArea();
}

// Subclass Sphere extending Shape3D
class Sphere extends Shape3D {
    private double radius;

    // Constructor for Sphere
    public Sphere(double radius) {
        this.radius = radius;
    }

    // Implementation of abstract method to calculate volume for Sphere
    @Override
    public double calculateVolume() {
        return (4.0 / 3.0) * Math.PI * Math.pow(radius, 3);
    }

    // Implementation of abstract method to calculate surface area for Sphere
    @Override
    public double calculateSurfaceArea() {
        return 4 * Math.PI * Math.pow(radius, 2);
    }
}

// Subclass Cube extending Shape3D
class Cube extends Shape3D {
    private double side;

    // Constructor for Cube
    public Cube(double side) {
        this.side = side;
    }

    // Implementation of abstract method to calculate volume for Cube
    @Override
    public double calculateVolume() {
        return Math.pow(side, 3);
    }

    // Implementation of abstract method to calculate surface area for Cube
    @Override
    public double calculateSurfaceArea() {
        return 6 * Math.pow(side, 2);
    }
}

// Main class for testing
public class Inheritance20 {
    public static void main(String[] args) {
        // Create instances of Sphere and Cube
        Sphere sphere = new Sphere(5.0);
        Cube cube = new Cube(3.0);

        // Display volume and surface area for Sphere
        System.out.println("Sphere:");
        System.out.println("Volume: " + sphere.calculateVolume());
        System.out.println("Surface Area: " + sphere.calculateSurfaceArea());
        System.out.println();

        // Display volume and surface area for Cube
        System.out.println("Cube:");
        System.out.println("Volume: " + cube.calculateVolume());
        System.out.println("Surface Area: " + cube.calculateSurfaceArea());
    }
}
                `,
                comeout : `Inheritance/Inheritance20_7070.png`
            },
            {
                problem : `21. Write a Java program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.`,
                solution : null,
                comeout : null
            },
            {
                problem : `22. Write a Java program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.`,
                solution : `
//package java;
// Define the abstract class Person
abstract class Person {
    String name;
    int age;

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Declare the abstract methods
    abstract void eat();
    abstract void exercise();
}

// Define the Athlete subclass
class Athlete extends Person {
    Athlete(String name, int age) {
        super(name, age);
    }

    // Implement the eat method
    void eat() {
        System.out.println(name + " eats a balanced diet.");
    }

    // Implement the exercise method
    void exercise() {
        System.out.println(name + " engages in rigorous workouts.");
    }
}

// Define the LazyPerson subclass
class LazyPerson extends Person {
    LazyPerson(String name, int age) {
        super(name, age);
    }

    // Implement the eat method
    void eat() {
        System.out.println(name + " eats junk food.");
    }

    // Implement the exercise method
    void exercise() {
        System.out.println(name + " never exercises.");
    }
}

// Main class to test the code
public class inheritance7048_22 {
    public static void main(String[] args) {
        Person person1 = new Athlete("John", 25);
        Person person2 = new LazyPerson("Jane", 22);

        person1.eat();
        person1.exercise();

        person2.eat();
        person2.exercise();
    }
}
                `,
                comeout : `Inheritance/Inheritance22_7003.png`
            },
            {
                problem : `23. Write a Java program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.`,
                solution : `
//Instrument.java
abstract class Instrument {
  public abstract void play();

  public abstract void tune();
}
//Glockenspiel.java
class Glockenspiel extends Instrument {
  @Override
  public void play() {
    System.out.println("Glockenspiel: Playing the notes on the metal bars.");
  }

  @Override
  public void tune() {
    System.out.println("Glockenspiel: Tuning the metal bars to the correct pitch.");
  }
}
//Violin.java
class Violin extends Instrument {
  @Override
  public void play() {
    System.out.println("Violin: Playing the strings with a bow or fingers.");
  }

  @Override
  public void tune() {
    System.out.println("Violin: Tuning the strings to the correct pitch.");
  }
}
//Main.java
class Inheritance_23 {
  public static void main(String[] args) {
    Instrument glockenspiel = new Glockenspiel();
    Instrument violin = new Violin();

    glockenspiel.play();
    glockenspiel.tune();

    violin.play();
    violin.tune();
  }
}
                `,
                comeout : `Inheritance/Inheritance23_7041.png`
            },
            {
                problem : `24. Write a Java program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.`,
                solution : `
//Shape2D.java
abstract class Shape2D {
  public abstract void draw();

  public abstract void resize();
}
//Rectangle.java
class Rectangle extends Shape2D {
  @Override
  public void draw() {
    System.out.println("Rectangle: Drawing a rectangle.");
  }

  @Override
  public void resize() {
    System.out.println("Rectangle: Resizing the rectangle.");
  }
}
//Circle.java
class Circle extends Shape2D {
  @Override
  public void draw() {
    System.out.println("Circle: Drawing a circle.");
  }

  @Override
  public void resize() {
    System.out.println("Circle: Resizing the circle.");
  }
}
//Main.java
class Inheritance_24 {
  public static void main(String[] args) {
    Shape2D rectangle = new Rectangle();
    Shape2D circle = new Circle();

    rectangle.draw();
    rectangle.resize();

    circle.draw();
    circle.resize();
  }
}
                `,
                comeout : `Inheritance/Inheritance24_7095.png`
            },
            {
                problem : `25. Write a Java program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.`,
                solution : `
package java;

// The abstract Bird class
abstract class Bird {
    // The abstract methods that need to be implemented by each subclass
    abstract void fly();
    abstract void makeSound();
}

// The Eagle subclass
class Eagle extends Bird {
    // Implementing the fly method to describe how Eagles fly
    public void fly() {
        System.out.println("Eagles can fly high.");
    }

    // Implementing the makeSound method to describe what sound Eagles make
    public void makeSound() {
        System.out.println("Eagles make a screeching sound.");
    }
}

// The Hawk subclass
class Hawk extends Bird {
    // Implementing the fly method to describe how Hawks fly
    public void fly() {
        System.out.println("Hawks can fly quickly.");
    }

    // Implementing the makeSound method to describe what sound Hawks make
    public void makeSound() {
        System.out.println("Hawks make a loud sound.");
    }
}

public class inheritance7048_25 {
    public static void main(String[] args) {
        // Creating objects of the Eagle and Hawk subclasses
        Eagle eagle = new Eagle();
        Hawk hawk = new Hawk();

        // Calling the fly and makeSound methods for each object
        eagle.fly();
        eagle.makeSound();

        hawk.fly();
        hawk.makeSound();
    }
}
                `,
                comeout : `Inheritance/Inheritance25_7041.png`
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
            }
        ]
    // programData10 : inheritance

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end