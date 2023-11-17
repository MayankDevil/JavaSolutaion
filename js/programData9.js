/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData9.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData9 = [
            {
                problem : `1. Create a simple AWT application that displays a button with FlowLayout manager.`,
                solution : `
import java.awt.Button;
import java.awt.FlowLayout;
import java.awt.Frame;

public class awt1_7024 {
    public static void main(String[] args) {
        
        Frame frame = new Frame("Button Example");

        
        frame.setLayout(new FlowLayout());

        
        Button button = new Button("Click here!");

        
        frame.add(button);

        
        frame.setSize(350, 250);

        
        frame.setVisible(true);
    }
}
                `,
                comeout : `awt/7039AWT1.png`
            },
            {
                problem : `2. Create a simple AWT application that displays a button with Custom Layout.`,
                solution : `
import java.awt.Button;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.LayoutManager;
import java.awt.Rectangle;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

import javax.swing.BoxLayout;
import javax.swing.JFrame;

public class awt2_7024 {
    public static void main(String[] args) {
        JFrame frame = new JFrame("Custom Layout Example");

        
        CustomLayoutManager customLayout = new CustomLayoutManager();

        
        Container container = frame.getContentPane();

    
        container.setLayout(customLayout);

        
        Button button = new Button("Click me!");

        
        container.add(button);

        frame.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                System.exit(0);
            }
        });

        
        frame.setSize(300, 200);

        
        frame.setVisible(true);
    }

    static class CustomLayoutManager implements LayoutManager {
        public void addLayoutComponent(String name, java.awt.Component comp) {
        }

        public void removeLayoutComponent(java.awt.Component comp) {
        }

        public Dimension preferredLayoutSize(java.awt.Container parent) {
            return null;
        }

        public Dimension minimumLayoutSize(java.awt.Container parent) {
            return null;
        }

        public void layoutContainer(java.awt.Container parent) {
            
            Rectangle bounds = parent.getBounds();

            
            int count = parent.getComponentCount();

            
            if (count > 0) {
                java.awt.Component component = parent.getComponent(0);
                component.setBounds(bounds.x + 50, bounds.y + 50, 250, 150);
            }
        }
    }
}
                `,
                comeout : `awt/7039AWT2.png`
            },
            {
                problem : `3. Create a simple AWT application that displays multiple buttons with BorderLayout manager (North, East, West, South, Center).`,
                solution : `
import java.awt.*;        
public class Borderlayout   
{    
Frame f;    
Borderlayout()  
{    
    f = new Frame();    
        
     // creating buttons  
    Button b1 = new Button("NORTH");; // the button will be labeled as NORTH   
    Button b2 = new Button("SOUTH");; // the button will be labeled as SOUTH  
    Button b3 = new Button("EAST");; // the button will be labeled as EAST  
    Button b4 = new Button("WEST");; // the button will be labeled as WEST  
    Button b5 = new Button("CENTER");; // the button will be labeled as CENTER  
        
    f.add(b1, BorderLayout.NORTH); // b1 will be placed in the North Direction    
    f.add(b2, BorderLayout.SOUTH);  // b2 will be placed in the South Direction    
    f.add(b3, BorderLayout.EAST);  // b2 will be placed in the East Direction    
    f.add(b4, BorderLayout.WEST);  // b2 will be placed in the West Direction    
    f.add(b5, BorderLayout.CENTER);  // b2 will be placed in the Center    
        
    f.setSize(300, 300);    
    f.setVisible(true);    
}    
public static void main(String[] args) {    
    new Borderlayout();    
}    
}    
                `,
                comeout : `awt/7029awt3.png`
            },
            {
                problem : `4. Create a simple AWT application that displays a TextField with FlowLayout manager.`,
                solution : `
import java.awt.*;
class awt4{
    public static void main(String args[]){
        Frame f = new Frame("Java Programs");
        TextField t1;
        t1 = new TextField("Welcome to Java");
        t1.setBounds(50,100,200,30);
        f.add(t1);
        f.setSize(400,400);
        f.setLayout(new FlowLayout(FlowLayout.LEFT));
        f.setVisible(true);
    }
}
                `,
                comeout : `awt/7077Awt4.png`
            },
            {
                problem : `5. Create a simple AWT application that displays a TextField with Custom Layout.`,
                solution : `
import java.awt.*;
import java.awt.event.*;

class awt5 {
    private Frame frame;
    private TextField textField;
    awt5() {
        frame = new Frame("Custom Layout Example");
        frame.setLayout(null);

        textField = new TextField();
        textField.setBounds(50, 50, 200, 30);

        frame.add(textField);

        frame.setSize(300, 150);
        frame.setVisible(true);

        frame.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                System.exit(0);
            }
        });
    }

    public static void main(String[] args) {
        new awt5();
    }
}
                `,
                comeout : `awt/7077Awt5.png`
            },
            {
                problem : `6. Create a simple AWT application that displays a Checkbox with FlowLayout manager.`,
                solution : `
import java.awt.*;

class CheckboxExample extends Frame {

    public CheckboxExample() {
        super("Checkbox Example");

        Checkbox checkbox = new Checkbox("I am Heena");
        add(checkbox);

        setLayout(new FlowLayout());
        setSize(300, 100);
        setVisible(true);
    }

    public static void main(String[] args) {
        new CheckboxExample();
    }
}
                `,
                comeout : `awt/7077Awt6.png`
            },
            {
                problem : `7. Create a simple AWT application that displays a Checkbox with Custom Layout.`,
                solution : `
import java.awt.Frame;
import java.awt.Checkbox;
import java.awt.event.WindowEvent;
import java.awt.event.WindowAdapter;
class myframe extends Frame{
    private Checkbox b1;
    myframe(){
        setSize(500,500);
        setVisible(true);
        setLayout(null);
        b1 = new Checkbox("Check 1");
        b1.setBounds(100,100,50,30);
        add(b1);
        addWindowListener(new WindowAdapter(){
            public void windowClosing(WindowEvent e)
            {
                dispose();
            }
        });
}

    public static void main(String arg[])
    {
        new myframe();
    }
}
                `,
                comeout : `awt/7077Awt7.png`
            },
            {
                problem : `8. Create a simple AWT application that displays a Label with FlowLayout manager.`,
                solution : `
import java.awt.*;
class LabelExample extends Frame {

    public LabelExample() {
        super("Label Example");

        Label label = new Label("This is a label");
        add(label);

        setLayout(new FlowLayout());
        setSize(300, 100);
        setVisible(true);
    }

    public static void main(String[] args) {
        new LabelExample();
    }
}
                `,
                comeout : `awt/7077Awt8.png`
            },
            {
                problem : `9. Create a simple AWT application that displays a Label with Custom Layout.`,
                solution : `
class awt{
	public static void main(String[] gfdsafgvsds){
        java.awt.Frame f = new java.awt.Frame();
        java.awt.Label t = new java.awt.Label("Vipin");
       f.setLayout(null);
       t.setBounds(334,100,150,30);
		f.setSize(100,200);
		f.setVisible(true);
		f.add(t);
	}
}
                `,
                comeout : `awt/7077Awt9.png`
            },
            {
                problem : `10. Create a simple AWT application that displays a Choice with FlowLayout manager.`,
                solution : null,
                comeout : null
            },
            {
                problem : `11. Create a simple AWT application that displays a Choice with Custom Layout.`,
                solution : null,
                comeout : null
            },
            {
                problem : `12. Create a simple AWT application that displays a CheckboxGroup with FlowLayout manager.`,
                solution : `
import java.awt.*;
import java.awt.event.*;
class awtpro1
{
    awtpro1()
    {
        Frame f= new Frame("checkbox Group");
        Label l1= new Label("which is your favourite programming language?");
        CheckboxGroup cg= new CheckboxGroup();
        Checkbox c1= new Checkbox("HTML",cg, false);
        Checkbox c2= new Checkbox("C",cg, false);
        Checkbox c3= new Checkbox("C++",cg, false);
        Checkbox c4= new Checkbox("JAVA",cg, false);
        f.setSize(700,400);
        f.setLayout( new FlowLayout());
        f.setVisible(true);
        f.add(l1);
        f.add(c1);
        f.add(c2);
        f.add(c3);
        f.add(c4);
        f.addWindowListener (new WindowAdapter() {    
            public void windowClosing (WindowEvent e) {    
                System.exit(1);    
            }    
       });
      }
    public static void main(String st[])
    {
        new awtpro1();
    }
    
}
                `,
                comeout : `awt/7062AWT12.png`
            },
            {
                problem : `13. Create a simple AWT application that displays a CheckboxGroup with Custom Layout.`,
                solution : `
import java.awt.*;
import java.awt.event.*;
 class CustomCheckboxLayoutExample extends Frame {
    public CustomCheckboxLayoutExample() {
        setTitle("CheckboxGroup with Custom Layout");
        setSize(300, 200);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent we) {
                System.exit(0);
            }
        });

        
        CheckboxPanel checkboxPanel = new CheckboxPanel();

       
        CheckboxGroup checkboxGroup = new CheckboxGroup();

        Checkbox checkbox1 = new Checkbox("Option 1", checkboxGroup, false);
        Checkbox checkbox2 = new Checkbox("Option 2", checkboxGroup, false);
        Checkbox checkbox3 = new Checkbox("Option 3", checkboxGroup, false);

        checkboxPanel.addCheckbox(checkbox1);
        checkboxPanel.addCheckbox(checkbox2);
        checkboxPanel.addCheckbox(checkbox3);

        
        add(checkboxPanel);
    }

    public static void main(String[] args) {
        CustomCheckboxLayoutExample example = new CustomCheckboxLayoutExample();
        example.setVisible(true);
    }
}

class CheckboxPanel extends Panel {
    private int checkboxCount;
    private int padding = 10;

    public CheckboxPanel() {
        setLayout(null); // Use a null layout for custom positioning
    }

    public void addCheckbox(Checkbox checkbox) {
        checkboxCount++;
        checkbox.setBounds(padding, checkboxCount * 30, 100, 20);
        add(checkbox);
    }
}
                `,
                comeout : `awt/7085AWT13.png`
            },
            {
                problem : `14. Create a simple AWT application that displays a List with FlowLayout manager.`,
                solution : `
import java.awt.*;

class lists extends Frame{
lists(){
Label l1= new Label("COURSES OFFERED:-  ");
Label l2= new Label("1.BCA");
Label l3= new Label("2.BBA");
Label l4= new Label("3.BCOM");
Label l5= new Label("4.BA"); Label l6= new Label("5.MBA"); 
Label l7= new Label("6.Bsc");
l1.setFont(new Font("Arial", Font.PLAIN,24));
l2.setFont(new Font("Arial", Font.PLAIN,20));
l3.setFont(new Font("Arial", Font.PLAIN,20));
l4.setFont(new Font("Arial", Font.PLAIN,20));
l5.setFont(new Font("Arial", Font.PLAIN,20));
l6.setFont(new Font("Arial", Font.PLAIN,20));
l7.setFont(new Font("Arial", Font.PLAIN,20));
setSize(900,500);
setVisible(true);
setLayout(new FlowLayout());
add(l1);add(l2);add(l3);add(l4);add(l5);
}
public static void main(String s[]){
new lists();
}}
                `,
                comeout : `awt/7070Awt14.png`
            },
            {
                problem : `15. Create a simple AWT application that displays a List with Custom Layout.`,
                solution : `
import java.awt.*;

class awt2 {
    public static void main(String[] args) {
        Frame f = new Frame("Frame");
        List l= new List(4, false);
        l.add("Java");
        l.add("Java");
        l.add("Java");
        l.add("Java");
        f.setSize(400,400);
        f.add(l);
        f.setVisible(true);

    }
}
                `,
                comeout : `awt/AWT7104prog15.png`
            },
            {
                problem : `16. Create a simple AWT application that displays a TextArea with FlowLayout manager.`,
                solution : `
import java.awt.*;

class awt3 {
    public static void main(String[] args) {
        Frame f = new Frame("Frame");
        TextArea t= new TextArea(20, 20);
        f.setSize(400,400);
        f.add(t);
        f.setLayout(new FlowLayout());
        f.setVisible(true);
    }
}
                `,
                comeout : `awt/7003awt16.png`
            },
            {
                problem : `17. Create a simple AWT application that displays a TextArea with Custom Layout.`,
                solution : `
import java.awt.*;
import java.awt.event.*;

class CustomLayoutExample {
    public static void main(String[] args) {
        
        Frame frame = new Frame("Custom Layout Example");

       
        TextArea textArea = new TextArea("This is a TextArea with a custom layout.");

        
        frame.setLayout(new GridBagLayout());
        GridBagConstraints gbc = new GridBagConstraints();
        gbc.insets = new Insets(10, 10, 10, 10); // Add some padding

        
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.fill = GridBagConstraints.BOTH;
        gbc.weightx = 1.0;
        gbc.weighty = 1.0;
        frame.add(textArea, gbc);

        
        frame.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        });

       
        frame.setSize(400, 300);
        frame.setVisible(true);
    }
}
                `,
                comeout : `awt/7085AWT17.png`
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
                comeout : `awt/7027AWT18.png`
            }
        ]
    // programData9 : awt

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end