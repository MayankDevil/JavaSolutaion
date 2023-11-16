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
                solution : ``,
                comeout : ``
            },
            {
                problem : `2. Write a Java program to create a class called Vehicle with a method called drive(). Create a subclass called Car that overrides the drive() method to print "Repairing a car".`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `3. Write a Java program to create a class called Shape with a method called getArea(). Create a subclass called Rectangle that overrides the getArea() method to calculate the area of a rectangle.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `4. Write a Java program to create a class called Employee with methods called work() and getSalary(). Create a subclass called HRManager that overrides the work() method and adds a new method called addEmployee().`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `5. Write a Java program to create a class known as "BankAccount" with methods called deposit() and withdraw(). Create a subclass called SavingsAccount that overrides the withdraw() method to prevent withdrawals if the account balance falls below one hundred.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `6. Write a Java program to create a class called Animal with a method named move(). Create a subclass called Cheetah that overrides the move() method to run.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `7. Write a Java program to create a class known as Person with methods called getFirstName() and getLastName(). Create a subclass called Employee that adds a new method named getEmployeeId() and overrides the getLastName() method to include the employee's job title.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `8. Write a Java program to create a class called Shape with methods called getPerimeter() and getArea(). Create a subclass called Circle that overrides the getPerimeter() and getArea() methods to calculate the area and perimeter of a circle.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `9. Write a Java program to create a vehicle class hierarchy. The base class should be Vehicle, with subclasses Truck, Car, and Motorcycle. Each subclass should have properties such as make, model, year, and fuel type. Implement methods for calculating fuel efficiency, distance traveled, and maximum speed.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `10. Write a Java program that creates a class hierarchy for employees of a company. The base class should be Employee, with subclasses Manager, Developer, and Programmer. Each subclass should have properties such as name, address, salary, and job title. Implement methods for calculating bonuses, generating performance reports, and managing projects.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `11. Create a program, showing an example of super keyword.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `12. Create a program, showing an example of super function.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `13. Create a program, showing an example of method overriding.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `14. Create a program, showing an example of dynamic method dispatch.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `15. Write a Java program to create an abstract class Animal with an abstract method called sound(). Create subclasses Lion and Tiger that extend the Animal class and implement the sound() method to make a specific sound for each animal.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `16. Write a Java program to create an abstract class Shape with abstract methods calculateArea() and calculatePerimeter(). Create subclasses Circle and Triangle that extend the Shape class and implement the respective methods to calculate the area and perimeter of each shape.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `17. Write a Java program to create an abstract class BankAccount with abstract methods deposit() and withdraw(). Create subclasses: SavingsAccount and CurrentAccount that extend the BankAccount class and implement the respective methods to handle deposits and withdrawals for each account type.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `18. Write a Java program to create an abstract class Animal with abstract methods eat() and sleep(). Create subclasses Lion, Tiger, and Deer that extend the Animal class and implement the eat() and sleep() methods differently based on their specific behavior.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `19. Write a Java program to create an abstract class Employee with abstract methods calculateSalary() and displayInfo(). Create subclasses Manager and Programmer that extend the Employee class and implement the respective methods to calculate salary and display information for each role.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `20. Write a Java program to create an abstract class Shape3D with abstract methods calculateVolume() and calculateSurfaceArea(). Create subclasses Sphere and Cube that extend the Shape3D class and implement the respective methods to calculate the volume and surface area of each shape.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `21. Write a Java program to create an abstract class Vehicle with abstract methods startEngine() and stopEngine(). Create subclasses Car and Motorcycle that extend the Vehicle class and implement the respective methods to start and stop the engines for each vehicle type.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `22. Write a Java program to create an abstract class Person with abstract methods eat() and exercise(). Create subclasses Athlete and LazyPerson that extend the Person class and implement the respective methods to describe how each person eats and exercises.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `23. Write a Java program to create an abstract class Instrument with abstract methods play() and tune(). Create subclasses for Glockenspiel and Violin that extend the Instrument class and implement the respective methods to play and tune each instrument.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `24. Write a Java program to create an abstract class Shape2D with abstract methods draw() and resize(). Create subclasses Rectangle and Circle that extend the Shape2D class and implement the respective methods to draw and resize each shape.`,
                solution : ``,
                comeout : ``
            },
            {
                problem : `25. Write a Java program to create an abstract class Bird with abstract methods fly() and makeSound(). Create subclasses Eagle and Hawk that extend the Bird class and implement the respective methods to describe how each bird flies and makes a sound.`,
                solution : ``,
                comeout : ``
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
            comeout : `Triangle Area: 6.0\nTriangle Perimeter: 12.0\nSquare Area: 6.25\nSquare Perimeter: 10.0`
            }
        ]
    // programData10 : inheritance
}
catch (error)
{
    console.log(`${error}`)    
}
// the end