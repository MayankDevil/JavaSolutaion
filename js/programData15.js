/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData15.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData15 = [
            {
                problem : `1. Write a Java program to create a class called "Person" with a name and age attribute. Create two instances of the "Person" class, set their attributes using the constructor, and print their name and age.`,
                solution : null,
                comeout : null
            },
            {
                problem : `2. Write a Java program to create a class called "Dog" with a name and breed attribute. Create two instances of the "Dog" class, set their attributes using the constructor and modify the attributes using the setter methods and print the updated values.`,
                solution : null,
                comeout : null
            },
            {
                problem : `3. Write a Java program to create a class called "Rectangle" with width and height attributes. Calculate the area and perimeter of the rectangle.`,
                solution : null,
                comeout : null
            },
            {
                problem : `4. Write a Java program to create a class called "Circle" with a radius attribute. You can access and modify this attribute. Calculate the area and circumference of the circle.`,
                solution : `
import java.text.DecimalFormat;

class Circle {
    private double radius;

    public void setRadius(double radius) {
        this.radius = radius;
    }
    public double getRadius() {
        return this.radius;
    }
    public double getCircumference()
    {
        return 2 * 3.14 * this.radius;
    }
    public double getArea() {
        return 3.14 * this.radius * this.radius;
    }

    public static void main(String[] args) {
        Circle obj = new Circle();
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        DecimalFormat format = new DecimalFormat("#.000000000");

        //scanning the radius
        System.out.print("Enter the radius of the circle : ");    
        obj.setRadius(scanner.nextDouble());

        //area and circumference
        System.out.println("The Area of given circle with radius "+obj.getRadius()+" : "+format.format(obj.getArea()));
        System.out.println("The Area of given circle with radius "+obj.getRadius()+" : "+format.format(obj.getCircumference()));

        scanner.close();
    }

}
                `,
                comeout : `oops/7104oop4.png`
            },
            {
                problem : `5. Write a Java program to create a class called "Book" with attributes for title, author, and ISBN, and methods to add and remove books from a collection.`,
                solution : `
class Book
{
String title,author,ISBN;


void add(String title2,String author2,String ISBN2)
{
title=title2;
author=author2;
ISBN=ISBN2;

System.out.println("Successfully Added"); 
}


void remove(String ISBN2)

{
if(ISBN2==ISBN)
{
title=null;
author=null;
ISBN=null;
System.out.println("Successsfully removed from the collection");
}
else
{
System.out.println("This ISBN number does not exist in our collection");
}

}

public static void main(String args[])
{
Book obj1 = new Book();
obj1.add("The Grass is Always Greener","Jeffrey Archer","1-86092-049-7");
obj1.remove("1-86092-049-7");

System.out.println("\n\n");

Book obj2 = new Book();
obj2.add("A Boy at Seven","John Bidwell","1-86092-022-5");
obj2.remove("1-86092-024-5");
}
}
                `,
                comeout : null
            },
            {
                problem : `6. Write a Java program to create a class called "Employee" with a name, job title, and salary attributes, and methods to calculate and update salary.`,
                solution : null,
                comeout : null
            },
            {
                problem : `7. Write a Java program to create a class called "Bank" with a collection of accounts and methods to add and remove accounts, and to deposit and withdraw money. Also define a class called "Account" to maintain account details of a particular customer.`,
                solution : `
money. Also define a class called "Account" to maintain account details of a particular customer. */


class Bank 
{

String account;
String name;
Float bal=0.0f;

void add(String a,String n,float am)
{

account=a;
name=n;
bal=am;
System.out.println("Successfully created");
} 

void delete(String a)
{
if(account==a)
{
account=null;
name=null;
System.out.println("Successfull deleted\nCollet Amount = " +bal);
bal=0.0f;
}
else
{
System.out.println("Account does not exist");
}

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

class Account
{

String Adhar,Pen,name,account;

Account(String A,String P,String N)
{
Adhar=A;
Pen=P;
name=N;
account=A;
}

void details(String s)
{
if(s==Adhar || s==Pen || s==account)
{
System.out.println("Account no = " +account+ "\nPen = " +Pen+ "\nName = " +name+ "\nAdhar = " +Adhar);
}


}

public static void main(String args[])

{
Account obj1 = new Account("123456789","A12345678","Rohit");
Bank objA1=new Bank();
objA1.add("123456789","Rohit",10000);

objA1.deposit(1000);
objA1.withdraw(3000);
objA1.delete("123456789");

System.out.println("\n\n");
obj1.details("123456789");

}


} 
                `,
                comeout : `oops/7059oop7.png`
            },
            {
                problem : `8. Write a Java program to create class called "TrafficLight" with attributes for color and duration, and methods to change the color and check for red or green.`,
                solution : `
class TrafficLight {
    String color;
    int durationInSeconds;
    public TrafficLight(String initialColor, int initialDuration) {
        this.color = initialColor;
        this.durationInSeconds = initialDuration;
    }

    public void changeColor(String newColor) {
        color = newColor;
        System.out.println("Traffic light color changed to " + color);
    }

    public boolean isRed() {
        return color.equalsIgnoreCase("red");
    }

    public boolean isGreen() {
        return color.equalsIgnoreCase("green");
    }

    public int getDuration() {
        return durationInSeconds;
    }

    public void setDuration(int newDuration) {
        durationInSeconds = newDuration;
        System.out.println("Traffic light duration set to " + durationInSeconds + " seconds");
    }
}

class M3 {
    public static void main(String[] args) {
        TrafficLight trafficLight = new TrafficLight("red", 60);

        System.out.println("Initial State:");
        displayTrafficLightInfo(trafficLight);

        trafficLight.changeColor("green");
        displayTrafficLightInfo(trafficLight);

        System.out.println("Is it red? " + trafficLight.isRed());

        System.out.println("Is it green? " + trafficLight.isGreen());

        trafficLight.setDuration(45);
        displayTrafficLightInfo(trafficLight);
    }

    private static void displayTrafficLightInfo(TrafficLight trafficLight) {
        System.out.println("Current Color: " + trafficLight.color);
        System.out.println("Current Duration: " + trafficLight.getDuration() + " seconds");
        System.out.println();
    }
}
                `,
                comeout : `oops/7015oop8.png`
            },
            {
                problem : `9. Write a Java program to create a class called "Employee" with a name, salary, and hire date attributes, and a method to calculate years of service.`,
                solution : `
import java.time.LocalDate;
import java.time.Period;

class Employee {
    String name;
    double salary;
    LocalDate hireDate;

    public Employee(String name, double salary, LocalDate hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
    }

    public String getName() {
    return name;
    }

    public void setName(String name) {
    this.name = name;
    }

    public double getSalary() {
    return salary;
    }

    public void setSalary(double salary) {
    this.salary = salary;
    }

    public LocalDate getHireDate() {
    return hireDate;
    }

    public void setHireDate(LocalDate hireDate) {
    this.hireDate = hireDate;
    }

    public int getYearsOfService() {
    return Period.between(hireDate, LocalDate.now()).getYears();
    }

    public void printEmployeeDetails() {
    System.out.println("\nName: " + name);
    System.out.println("Salary: " + salary);
    System.out.println("HireDate: " + hireDate);
    }


    public static void main(String[] args) {
    Employee employee1 = new Employee("Rohit", 50000, LocalDate.parse("2021-04-01"));
    Employee employee2 = new Employee("Uday", 70000, LocalDate.parse("2015-04-01"));
    Employee employee3 = new Employee("Aman", 50000, LocalDate.parse("2011-01-15"));
    employee1.printEmployeeDetails();
    System.out.println("Years of Service: " + employee1.getYearsOfService());
    employee2.printEmployeeDetails();
    System.out.println("Years of Service: " + employee2.getYearsOfService());
    employee3.printEmployeeDetails();
    System.out.println("Years of Service: " + employee3.getYearsOfService());
    }
}
                
                `,
                comeout : `oops/7019oop9.png`
            },
            {
                problem : `10. Write a Java program to create a class called "Student" with a name, grade, and courses attributes, and methods to add and remove courses.`,
                solution : `
import java.util.ArrayList;

public class Student {
    private String name;
    private int grade;
    private ArrayList < String > courses;

    public Student(String name, int grade) {
    this.name = name;
    this.grade = grade;
    this.courses = new ArrayList < String > ();
    }
    
    public String getName() {
    return name;
    }

    public int getGrade() {
    return grade;
    }

    public ArrayList < String > getCourses() {
    return courses;
    }

    public void addCourse(String course) {
    courses.add(course);
    }

    public void removeCourse(String course) {
    courses.remove(course);
    }
    public void printStudentDetails() {
    System.out.println("Name: " + name);
    System.out.println("Grade: " + grade);
    }

    public static void main(String[] args) {
    Student student1 = new Student("Muskan", 5678);
    Student student2 = new Student("Sarvjeet", 5679);
    Student student3 = new Student("Heena", 5800);
    System.out.println("Student Details:");
    student1.printStudentDetails();
    student2.printStudentDetails();
    student3.printStudentDetails();
    System.out.println("Adding courses for " + student1.getName());
    student1.addCourse("Math");
    student1.addCourse("Science");
    student1.addCourse("English");

    System.out.println(student1.getName() + "'s courses: " + student1.getCourses());

    System.out.println("\nAdding courses for " + student2.getName());
    student2.addCourse("History");
    student2.addCourse("Geography");
    student2.addCourse("English");
    System.out.println(student2.getName() + "'s courses: " + student2.getCourses());
    System.out.println("\nRemoving 'Science' course for " + student1.getName());
    student1.removeCourse("Science");
    System.out.println(student1.getName() + "'s courses: " + student1.getCourses());
    }
}
                `,
                comeout : `oops/7101oop10.png`
            },
            {
                problem : `11. Write a Java program to create a class called "Library" with a collection of books and methods to add and remove books.`,
                solution : `
import java.util.ArrayList;
//Book.java
public class Book {
  private String title;
  private String author;

  public Book(String title, String author) {
    this.title = title;
    this.author = author;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }
}
//Library.java

public class Library {
  private ArrayList < Book > books;

  public Library() {
    books = new ArrayList < Book > ();
  }

  public void addBook(Book book) {
    books.add(book);
  }

  public void removeBook(Book book) {
    books.remove(book);
  }

  public ArrayList < Book > getBooks() {
    return books;
  }
}
//Main.java
public class Main {
  public static void main(String[] args) {
    Library library = new Library();

    Book book1 = new Book("Adventures of Tom Sawyer", "Mark Twain");
    Book book2 = new Book("Ben Hur", "Lewis Wallace");
    Book book3 = new Book("Time Machine", "H.G. Wells");
    Book book4 = new Book("Anna Karenina", "Leo Tolstoy");

    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);
    library.addBook(book4);

    System.out.println("Books in the library:");
    for (Book book: library.getBooks()) {
      System.out.println(book.getTitle() + " by " + book.getAuthor());
    }

    library.removeBook(book2);
    System.out.println("\nBooks in the library after removing " + book2.getTitle() + ":");
    for (Book book: library.getBooks()) {
      System.out.println(book.getTitle() + " by " + book.getAuthor());
    }
  }
}
                `,
                comeout : null
            },
            {
                problem : `12. Write a Java program to create a class called "Airplane" with a flight number, destination, and departure time attributes, and methods to check flight status and delay.`,
                solution : null,
                comeout : null
            },
            {
                problem : `13. Write a Java program to create a class called "Inventory" with a collection of products and methods to add and remove products, and to check for low inventory.`,
                solution : `
import java.util.ArrayList;
class Product {
    private String name;
    private int quantity;
  
    public Product(String name, int quantity) {
      this.name = name;
      this.quantity = quantity;
    }
  
    public String getName() {
      return name;
    }
  
    public void setName(String name) {
      this.name = name;
    }
  
    public int getQuantity() {
      return quantity;
    }
  
    public void setQuantity(int quantity) {
      this.quantity = quantity;
    }
     //Main.java
public class Main {
public  void main(String[] args) {
Inventory inventory = new Inventory();
    Product product1 = new Product("LED TV", 200);
    Product product2 = new Product("Mobile", 80);
    Product product3 = new Product("Tablet", 50);
    System.out.println("Add three products in inventory:");
    inventory.addProduct(product1);
    inventory.addProduct(product2);
    inventory.addProduct(product3);
    System.out.println("\nCheck low inventory:");
    inventory.checkLowInventory();
    System.out.println("\nRemove Tablet from the inventory!");
    inventory.removeProduct(product3);
    System.out.println("\nAgain check low inventory:"); 
    inventory.checkLowInventory();
  }
}
  
    //Inventory.java
  public class Inventory {
  private ArrayList < Product > products;

  public Inventory() {
    products = new ArrayList < Product > ();
  }

  public void addProduct(Product product) {
    products.add(product);
  }

  public void removeProduct(Product product) {
    products.remove(product);
  }

  public void checkLowInventory() {
    for (Product product: products) {
      if (product.getQuantity() <= 100) {
        System.out.println(product.getName() + " is running low on inventory. Current quantity: " + product.getQuantity());
      }
    }
  }
}
}
                `,
                comeout : null
            },
            {
                problem : `14. Write a Java program to create a class called "School" with attributes for students, teachers, and classes, and methods to add and remove students and teachers, and to create classes.`,
                solution : `
class Library 
{
    String[] book = new String[5];

    int size = 5;

    int index;
    
    void add(String bookname)
    {
        if (index == 5)
        {
            book[index] = bookname;
            index++;
        }
        else
        {
            System.out.println("index out of bond");
        }
    }
    void remove()
    {
        if (index == 0)
        {
            index--;
        }
        else
        {
            System.out.println("not element to remove");
        }
    }

    void displaybook()
    {
        for (int i = 0; i < index; i++) {
            System.out.println(book[i]);
        }
    }
}
class Test
{
    public static void main(String[] args) {
        
        Library l = new Library();

        l.add("time of error");
        l.add("hello bro");
        l.add("hero time");

        l.remove();

        l.displaybook();

    }
}
                `,
                comeout : `oops/7025oop14.png`
            },
            {
                problem : `15. Write a Java program to create a class called "MusicLibrary" with a collection of songs and methods to add and remove songs, and to play a random song.`,
                solution : `
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

class Song {
    private String title;
    private String artist;

    public Song(String title, String artist) {
        this.title = title;
        this.artist = artist;
    }

    public String getTitle() {
        return title;
    }

    public String getArtist() {
        return artist;
    }
    public String toString() {
        return "Song: " + title + " by " + artist;
    }
}

class musiclibrary {
    private List<Song> songs;

    public musiclibrary() {
        this.songs = new ArrayList<Song>();
    }

    public void addSong(String title, String artist) {
        Song newSong = new Song(title, artist);
        songs.add(newSong);
        System.out.println("Added song: " + newSong);
    }

    public void removeSong(String title, String artist) {
        Song songToRemove = new Song(title, artist);
        if (songs.remove(songToRemove)) {
            System.out.println("Removed song: " + songToRemove);
        } else {
            System.out.println("Song not found: " + songToRemove);
        }
    }

    public void playRandomSong() {
        if (songs.isEmpty()) {
            System.out.println("No songs in the library. Add some songs first.");
        } else {
            Random random = new Random();
            int randomIndex = random.nextInt(songs.size());
            Song randomSong = songs.get(randomIndex);
            System.out.println("Now playing: " + randomSong);
        }
    }

    public static void main(String[] args) {
        musiclibrary myLibrary = new musiclibrary();

        myLibrary.addSong("Shape of You", "Ed Sheeran");
        myLibrary.addSong("Someone Like You", "Adele");
        myLibrary.addSong("Despacito", "Luis Fonsi");

        myLibrary.playRandomSong();

        myLibrary.removeSong("Someone Like You", "Adele");

        myLibrary.playRandomSong();
    }
}
                `,
                comeout : `oops/7003oop15.png`
            },
            {
                problem : `16. Write a Java program to create a class called "Shape" with abstract methods for calculating area and perimeter, and subclasses for "Rectangle", "Circle", and "Triangle".`,
                solution : `    
abstract class Shape {
    public abstract double calculateArea();
    public abstract double calculatePerimeter();
}

class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }


    public double calculateArea() {
        return length * width;
    }

 
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
}

class Circle extends Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    
    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }
}

class Triangle extends Shape {
    private double side1;
    private double side2;
    private double side3;

    public Triangle(double side1, double side2, double side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    public double calculateArea() {
        // Using Heron's formula for the area of a triangle
        double s = (side1 + side2 + side3) / 2;
        return Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    }

    public double calculatePerimeter() {
        return side1 + side2 + side3;
    }
}

 class M2 {
    public static void main(String[] args) {
        Rectangle rectangle = new Rectangle(5, 10);
        Circle circle = new Circle(7);
        Triangle triangle = new Triangle(3, 4, 5);

        displayShapeInfo(rectangle);
        displayShapeInfo(circle);
        displayShapeInfo(triangle);
    }

    private static void displayShapeInfo(Shape shape) {
        System.out.println("Shape Type: " + shape.getClass().getSimpleName());
        System.out.println("Area: " + shape.calculateArea());
        System.out.println("Perimeter: " + shape.calculatePerimeter());
        System.out.println();
    }
}
                `,
                comeout : `oops/7015oop16.png`
            },
            {
                problem : `17. Write a Java program to create a class called "Movie" with attributes for title, director, actors, and reviews, and methods for adding and retrieving reviews.`,
                solution : `               
import java.util.ArrayList;

public class Movie {
  private String title;
  private String director;
  private ArrayList < String > actors;
  private ArrayList < Review > reviews;

  public Movie(String title, String director, ArrayList < String > actors) {
    this.title = title;
    this.director = director;
    this.actors = actors;
    this.reviews = new ArrayList < Review > ();
  }

  public void addReview(Review review) {
    this.reviews.add(review);
  }

  public ArrayList < Review > getReviews() {
    return this.reviews;
  }

  public String getTitle() {
    return this.title;
  }

  public String getDirector() {
    return this.director;
  }

  public ArrayList < String > getActors() {
    return this.actors;
  }
}
                `,
                comeout : null
            },
            {
                problem : `18. Write a Java program to create a class called "Restaurant" with attributes for menu items, prices, and ratings, and methods to add and remove items, and to calculate average rating.`,
                solution : `
import java.util.ArrayList;

public class Restaurant {
    private ArrayList<String> menuItems;
    private ArrayList<Double> prices;
    private ArrayList<Integer> ratings;
    private ArrayList<Integer> itemCounts;

    public Restaurant() {
    this.menuItems = new ArrayList<String>();
    this.prices = new ArrayList<Double>();
    this.ratings = new ArrayList<Integer>();
    this.itemCounts = new ArrayList<Integer>();
    }

    public void addItem(String item, double price) {
    this.menuItems.add(item);
    this.prices.add(price);
    this.ratings.add(0);
    this.itemCounts.add(0);
    }

    public void removeItem(String item) {
    int index = this.menuItems.indexOf(item);
    if (index >= 0) {
        this.menuItems.remove(index);
        this.prices.remove(index);
        this.ratings.remove(index);
        this.itemCounts.remove(index);
    }
    }

    public void addRating(String item, int rating) {
    int index = this.menuItems.indexOf(item);
    if (index >= 0) {
        int currentRating = this.ratings.get(index);
        int totalCount = this.itemCounts.get(index);
        this.ratings.set(index, currentRating + rating);
        this.itemCounts.set(index, totalCount + 1);
    }
    }

    public double getAverageRating(String item) {
    int index = this.menuItems.indexOf(item);
    if (index >= 0) {
        int totalRating = this.ratings.get(index);
        int itemCount = this.itemCounts.get(index);
        return itemCount > 0 ? (double) totalRating / itemCount : 0.0;
    } else {
        return 0.0;
    }
    }

    public void displayMenu() {
    for (int i = 0; i < menuItems.size(); i++) {
        System.out.println(menuItems.get(i) + ": $" + prices.get(i));
    }
    }

    public double calculateAverageRating() {
    double totalRating = 0;
    int numRatings = 0;
    for (int i = 0; i < ratings.size(); i++) {
        totalRating += ratings.get(i);
        numRatings++;
    }
    return numRatings > 0 ? totalRating / numRatings : 0.0;
    }
    //main.java

    public static  void main(String[] args) {
    Restaurant restaurant = new Restaurant();
    restaurant.addItem("Burger", 5.00);
    restaurant.addItem("Pizza", 10.00);
    restaurant.addItem("Salad", 6.00);

    System.out.println("Menu:Item & Price");
    restaurant.displayMenu();

    restaurant.addRating("Burger", 3);
    restaurant.addRating("Burger", 5);
    restaurant.addRating("Pizza", 3);
    restaurant.addRating("Pizza", 4);
    restaurant.addRating("Salad", 2);
        
    double averageRating = restaurant.getAverageRating("Burger");
    System.out.println("\nAverage rating for Burger: " + averageRating); 	 
    averageRating = restaurant.getAverageRating("Pizza");
    System.out.println("Average rating for Pizza: " + averageRating);  	 
    averageRating = restaurant.getAverageRating("Salad");
    System.out.println("Average rating for Salad: " + averageRating); 	 	 
    System.out.println("Average rating: " + restaurant.calculateAverageRating());
    System.out.println("\nRemove 'Pizza' from the above menu.");
    restaurant.removeItem("Pizza");
    System.out.println("\nUpdated menu:");
    restaurant.displayMenu();
    }
}
                `,
                comeout : `oops/7086oop18.png`
            },
            {
                problem : `19. Write a Java program to create a class with methods to search for flights and hotels, and to book and cancel reservations.`,
                solution : `
import java.util.ArrayList;
import java.util.List;

public class _7038OOP19 {
    private List<Flight> flights;
    private List<Hotel> hotels;
    private List<Booking> bookings;

    public _7038OOP19() {
        flights = new ArrayList<>();
        hotels = new ArrayList<>();
        bookings = new ArrayList<>();
    }

    public void addFlight(Flight flight) {
        flights.add(flight);
    }

    public void addHotel(Hotel hotel) {
        hotels.add(hotel);
    }

    public Flight searchFlight(String origin, String destination) {
        for (Flight flight : flights) {
            if (flight.getOrigin().equals(origin) && flight.getDestination().equals(destination)) {
                return flight;
            }
        }
        return null;
    }

    public Hotel searchHotel(String location) {
        for (Hotel hotel : hotels) {
            if (hotel.getLocation().equals(location)) {
                return hotel;
            }
        }
        return null;
    }

    public Booking bookFlight(Flight flight) {
        if (flight == null) {
            return null;
        }
        Booking booking = new Booking(flight);
        bookings.add(booking);
        return booking;
    }

    public Booking bookHotel(Hotel hotel) {
        if (hotel == null) {
            return null;
        }
        Booking booking = new Booking(hotel);
        bookings.add(booking);
        return booking;
    }

    public boolean cancelBooking(Booking booking) {
        return bookings.remove(booking);
    }
}

class Flight {
    private String origin;
    private String destination;

    public Flight(String origin, String destination) {
        this.origin = origin;
        this.destination = destination;
    }

    public String getOrigin() {
        return origin;
    }

    public String getDestination() {
        return destination;
    }
}

class Hotel {
    private String location;

    public Hotel(String location) {
        this.location = location;
    }

    public String getLocation() {
        return location;
    }
}

class Booking {
    private Object bookedItem;

    public Booking(Object bookedItem) {
        this.bookedItem = bookedItem;
    }

    public Object getBookedItem() {
        return bookedItem;
    }
}
class book {

    public static void main(String[] args) {
        Flight flight = new Flight("New York", "Los Angeles");
        Booking bookFlight = new Booking(flight);
        System.out.println(((Flight) bookFlight.getBookedItem()).getOrigin());  // New York
        Hotel hotel = new Hotel("Paris");
        Booking bookHotel = new Booking(hotel);
        System.out.println(((Hotel) bookHotel.getBookedItem()).getLocation());   // Paris
        }

    }
                `,
                comeout : null
            },
            {
                problem : `20. Create a class showing an example of default constructor.`,
                solution : `
class Construct1 {
    Construct1() {
        System.out.println("This is a Default Constructor");
    }

    public static void main(String args[]) {
        Construct1 C = new Construct1();
    }

}
                `,
                comeout : `oops/7024oop20.png`
            },
            {
                problem : `21. Create a class showing an example of parameterized constructor.`,
                solution : `
class Main {

  String languages;

  // constructor accepting single value
  Main(String lang) {
    languages = lang;
    System.out.println(languages + " Programming Language");
  }

  public static void main(String[] args) {

    // call constructor by passing a single value
    Main obj1 = new Main("Java");
    Main obj2 = new Main("C++");
    Main obj3 = new Main("C");
  }
}
                `,
                comeout : `oops/7024oop21.png`
            },
            {
                problem : `22. Create a class showing an example of copy constructor.`,
                solution : `
class Fruit  {  
    private double fprice;  
    private String fname;  
    //constructor to initialize roll number and name of the student  
    Fruit(double fPrice, String fName)  
    {   
    fprice = fPrice;  
    fname = fName;  
    }  
    //creating a copy constructor  
    Fruit(Fruit fruit)  
    {  
    System.out.println("\nAfter invoking the Copy Constructor:\n");  
    fprice = fruit.fprice;  
    fname = fruit.fname;  
    }  
    //creating a method that returns the price of the fruit  
    double showPrice()  
    {  
    return fprice;  
    }  
    //creating a method that returns the name of the fruit  
    String showName()  
    {  
    return fname;  
    }  
    //class to create student object and print roll number and name of the student  
    public static void main(String args[])  
    {  
    Fruit f1 = new Fruit(200, "Apple");  
    System.out.println("Name of the first fruit: "+ f1.showName());  
    System.out.println("Price of the first fruit: "+ f1.showPrice());  
    //passing the parameters to the copy constructor  
    Fruit f2 = new Fruit(f1);  
    System.out.println("Name of the second fruit: "+ f2.showName());  
    System.out.println("Price of the second fruit: "+ f2.showPrice());  
    }  
    }  
                `,
                comeout : `oops/7086oop22.png`
            },
            {
                problem : `23. Create a class entering the rollno, name, and class of the student from the user, but the rollno should be automatically generated as we enter the information of 10 students.`,
                solution : `
import java.util.Scanner;

class Student {
    private static int studentCount = 0;
    private int rollNo;
    private String name;
    private String className;

    public Student(String name, String className) {
        this.rollNo = ++studentCount;
        this.name = name;
        this.className = className;
    }

    public void displayDetails() {
        System.out.println("Roll No: " + rollNo);
        System.out.println("Name: " + name);
        System.out.println("Class: " + className);
    }
}
class StudentManagement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        Student[] students = new Student[10];

        for (int i = 0; i < students.length; i++) {
            System.out.println("Enter details for student " + (i + 1) + ":");
            System.out.print("Enter name: ");
            String name = scanner.nextLine();

            System.out.print("Enter class: ");
            String className = scanner.nextLine();

            students[i] = new Student(name, className);
        }

        System.out.println("Details of all students:");
        for (Student student : students) {
            student.displayDetails();
            System.out.println("---------------");
        }

        scanner.close();
    }
}
                `,
                comeout : `oops/7085oop23.png`
            },
            {
                problem : `24. Create a class showing the area of a circle and rectangle by method overloading.`,
                solution : `
// Shape class (parent class)
class Shape {
    // Method to calculate the area of a circle
    public double calculateArea(double radius) {
        return Math.PI * radius * radius;
    }

    // Method to calculate the area of a rectangle
    public double calculateArea(double length, double width) {
        return length * width;
    }
}

public class OOP24 {
    public static void main(String[] args) {
        // Create an instance of the Shape class
        Shape shape = new Shape();

        // Calculate and display the area of a circle
        double circleArea = shape.calculateArea(5.0);
        System.out.println("Area of Circle: " + circleArea);

        // Calculate and display the area of a rectangle
        double rectangleArea = shape.calculateArea(4.0, 6.0);
        System.out.println("Area of Rectangle: " + rectangleArea);
    }
}
                `,
                comeout : null
            },
            {
                problem : `25. Create a class, entering the command-line arguments from the user and show all the arguments as output.`,
                solution : `
class CommandLineArgumentsExample {
    public static void main(String[] args) {
      
        if (args.length == 0) {
            System.out.println("No command-line arguments provided.");
        } else {
            System.out.println("Command-line arguments provided:");
            for (int i = 0; i < args.length; i++) {
                System.out.println("Argument " + (i + 1) + ": " + args[i]);
            }
        }
    }
}
                `,
                comeout : `oops/7101oop25.png`
            },
            {
                problem : `26. Write a Java program to create a class called Person with private instance variables name, age, and country. Provide public getter and setter methods to access and modify these variables.`,
                solution : null,
                comeout : null
            },
            {
                problem : `27. Write a Java program to create a class called BankAccount with private instance variables accountNumber and balance. Provide public getter and setter methods to access and modify these variables.`,
                solution : `
import java.util.Scanner;

class bankaccount {
    private String accountNumber;
    private double balance;

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public static void main(String[] a) {
        Scanner s = new Scanner(System.in);

        bankaccount myAccount = new bankaccount();

        System.out.print("Enter your account number: ");
        String accountNumber = s.nextLine();
        myAccount.setAccountNumber(accountNumber);

        System.out.print("Enter your initial balance: ");
        double initialBalance = s.nextDouble();
        myAccount.setBalance(initialBalance);

        System.out.println("Account Information:");
        System.out.println("Account Number: " + myAccount.getAccountNumber());
        System.out.println("Balance: Rs " + myAccount.getBalance());
    }
}


                `,
                comeout : `oops/7003oop27.png`
            },
            {
                problem : `28. Write a Java program to create a class called Rectangle with private instance variables length and width. Provide public getter and setter methods to access and modify these variables.`,
                solution : null,
                comeout : null
            },
            {
                problem : `29. Write a Java program to create a class called Employee with private instance variables employee_id, employee_name, and employee_salary. Provide public getter and setter methods to access and modify the id and name variables, but provide a getter method for the salary variable that returns a formatted string.`,
                solution : `
class Employee {
    private int employee_id;
    private String employee_name;
    private double employee_salary;

    
    public int getEmployeeId() {
        return employee_id;
    }

    public void setEmployeeId(int id) {
        employee_id = id;
    }

    
    public String getEmployeeName() {
        return employee_name;
    }

    public void setEmployeeName(String name) {
        employee_name = name;
    }

    public String getFormattedEmployeeSalary() {
        return String.format("%.2f", employee_salary);
    }

    
    public void setEmployeeSalary(double salary) {
        employee_salary = salary;
    }

    public static void main(String[] args) {
        Employee employee = new Employee();
        employee.setEmployeeId(101);
        employee.setEmployeeName("Ayush");
        employee.setEmployeeSalary(50000.0);

        System.out.println("Employee ID: " + employee.getEmployeeId());
        System.out.println("Employee Name: " + employee.getEmployeeName());
        System.out.println("Employee Salary: $" + employee.getFormattedEmployeeSalary());
    }
}
                `,
                comeout : `oops/7104oop29.png`
            },
            {
                problem : `30. Write a Java program to create a class called Circle with a private instance variable radius. Provide public getter and setter methods to access and modify the radius variable. However, provide two methods called calculateArea() and calculatePerimeter() that return the calculated area and perimeter based on the current radius value.`,
                solution : `
class circle{
    private int radius=0;
    public int getter(){
    return radius;}
    public void setter(int x){
    radius=x;}
    double calculatearea(){
    int r= getter();
    double area= 3.14 * r *r;
    return area;
    }
    double calculateperimeter(){
    int r= getter();
    double perimeter= 2 * 3.14 * r ;
    return perimeter; 
    }
    public static void main(String s[]){
    circle obj= new circle();
    obj.setter(10);
    System.out.println("Area of circle is: "+ obj.calculatearea());
    System.out.println("Perimeter of circle is: "+ obj.calculateperimeter());
    }}
                `,
                comeout : `oops/7035oop30.png`
            },
            {
                problem : `31. Write a Java program to create a class called Car with private instance variables company_name, model_name, year, and mileage. Provide public getter and setter methods to access and modify the company_name, model_name, and year variables. However, only provide a getter method for the mileage variable.`,
                solution : `
class Car {
    private String company_name;
    private String model_name;
    private int year;
    private double mileage;

    
    public Car(String company_name, String model_name, int year, double mileage) {
        this.company_name = company_name;
        this.model_name = model_name;
        this.year = year;
        this.mileage = mileage;
    }

   
    public String getCompany_name() {
        return company_name;
    }

    
    public void setCompany_name(String company_name) {
        this.company_name = company_name;
    }

     
    public String getModel_name() {
        return model_name;
    }

    
    public void setModel_name(String model_name) {
        this.model_name = model_name;
    }

    
    public int getYear() {
        return year;
    }

    
    public void setYear(int year) {
        this.year = year;
    }

    
    public double getMileage() {
        return mileage;
    }

    public static void main(String[] args) {
       
        Car myCar = new Car("Toyota", "Camry", 2022, 30.5);

       
        System.out.println("Company: " + myCar.getCompany_name());
        System.out.println("Model: " + myCar.getModel_name());
        System.out.println("Year: " + myCar.getYear());
        System.out.println("Mileage: " + myCar.getMileage());

      
        myCar.setCompany_name("Honda");
        myCar.setModel_name("Civic");
        myCar.setYear(2023);

        System.out.println("Updated Company: " + myCar.getCompany_name());
        System.out.println("Updated Model: " + myCar.getModel_name());
        System.out.println("Updated Year: " + myCar.getYear());
    }
}
                `,
                comeout : `oops/7101opp31.png`
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
            }
        ]
    // programData15 : oops

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end