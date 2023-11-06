/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData = [
        {
            problem : `Program to write hello world in Java Language.`,
            solution : `class Test \n{ \n\tpublic static void main(String args[])\n\t{ \n\t\tSystem.out.println("hello world"); \n\t}\n}`,
            comeout : `javac source.java \n java bytecode \n hello world`
        },
        {
            problem : `18. Create a simple AWT application design a calculator that displays buttons, TextField with GridLayout manager.`,
            solution : `
class Calculator extends java.awt.Frame
/* implements java.awt.event.ActionListener */
{
    /*
        ---------------
        | constructor |
        ---------------
    */
    Calculator()
    {
        setSize(400,500);
        setResizable(false);
        setLayout(null);

        add(Calculator.myField());

        Calculator.myButton(this,16);
    }
    /*
        ====================================================
        | myFont | get argument size and return Font
        ====================================================
    */
    private static java.awt.Font myFont(int size)
    {
        return new java.awt.Font("Arial",0,size);
    }
    /*
        ====================================================
        | myField | private function return TextField
        ====================================================
    */
    private static java.awt.TextField myField()
    {
        java.awt.TextField fld = new java.awt.TextField();

        fld.setBounds(0,0,400,100);

        fld.setEditable(true);

        fld.setFont(Calculator.myFont(25));

        fld.setForeground(java.awt.Color.BLACK);

        fld.setBackground(java.awt.Color.WHITE);

        return fld;
    }
    /*
        ====================================================
        | myButton | function arguments size or Frame
        ====================================================
    */
    private static void myButton(java.awt.Frame frame,int size)
    {
        java.awt.Button btn[] = new java.awt.Button[size];

        int x = 0, y = 100;	// default coordinates

        char btn_label = ' ';

        for (int i = 0; i < size; i++)
        {
            btn[i] = new java.awt.Button();

            if (i > 9)
            {
                switch(i)
                {
                    case 10 : btn_label = '+'; break;

                    case 11 : btn_label = '-'; break;

                    case 12 : btn_label = '*'; break;

                    case 13 : btn_label = '/'; break;

                    case 14 : btn_label = '%'; break;

                    default : btn_label = '=';
                }
                btn[i].setLabel(""+btn_label+"");
            }
            else
            {
                btn[i].setLabel(""+i+"");
            }

            if (i != 0)
            {
                if ((i%4) == 0)
                {
                    x = 0;
                    y += 100;
                }
                else
                {
                    x += 100;
                }
            }
            btn[i].setBounds(x,y,100,100);

            Calculator.buttonStyle(btn[i],25);

            // btn[i].addActionListener(btn[i]);

            frame.add(btn[i]);
        }
    }
    /*
        ====================================================
        | buttonStyle | function get arugment size Button
        ====================================================
    */
    private static void buttonStyle(java.awt.Button btn, int size)
    {
        btn.setFont(Calculator.myFont(size));
        btn.setForeground(java.awt.Color.GRAY);
        btn.setBackground(java.awt.Color.WHITE);
    }
    /*
        ===================================================
        | buttonActionStyle | get argument size and Button
        ===================================================
    */
    private static void buttonActionStyle(java.awt.Button btn, int size)
    {
        btn.setFont(Calculator.myFont(size));
        btn.setForeground(java.awt.Color.BLACK);
        btn.setBackground(java.awt.Color.WHITE);
    }
    /*
        @Override : ActionListener
    public void actionPerformed(java.awt.event.ActionEvent element)
    {
        Calculator.buttonActionStyle(this,20);

        System.out.println(" button "+this.getLabel());
    }
    */
    /*
        [ main function ]----------------------------------
    */
    public static void main(String args[])
    {
        System.out.println(" Calculator execute ... ");

        new Calculator().setVisible(true);
    }
}
// the end ---
            `,
            comeout : `javac source.java\njava bytecode`
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
            comeout : `javac source.java\njava bytecode\nfalse\ntrue`
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
        },
        {
            problem : ``,
            solution : ``,
            comeout : ``
        },
        {
            problem : ``,
            solution : ``,
            comeout : ``
        },
        {
            problem : ``,
            solution : ``,
            comeout : ``
        },
        {
            problem : ``,
            solution : ``,
            comeout : ``
        },
        {
            problem : ``,
            solution : ``,
            comeout : ``
        },
        {
            problem : ``,
            solution : ``,
            comeout : ``
        }
    ]
}
catch (error)
{
    console.log(`${error}`)    
}
// the end