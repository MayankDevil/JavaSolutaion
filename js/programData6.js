/*
-   JavaSolution
-   https://github.com/MayankDevil/
-   Developed by Mayank
-   JavaScript : ./js/programData6.js
*/
try
{
    /*
        [ programData API ] : collection { problem, solution, comeout }
    */ 
    var programData6 = [
            {
                problem : `1. Java Program to Display Some Text in the Frame using Labels`,
                solution : `
import java.awt.Frame;
import java.awt.Button;
import java.awt.TextField;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

class Add extends Frame implements ActionListener
{
    Add()
    {
        Button b1 = new Button();
        b1.setVisible(true);
        b1.setBounds(50,50,300,300);
        setSize(300,400);
        add(b1);
        b1.addActionListener(this);
        
    }
    public void actionPerformed(ActionEvent e)
    {
        System.out.println("Hello");
    }
    public static void main(String arg[])
    {
        Add a1 = new Add();
    }

}
                `,
                comeout : null
            },
            {
                problem : `2. Java Program to Create Text Area and Password Field`,
                solution : `
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
class Login implements ActionListener
{
	static JTextField name;
	static JPasswordField pswd; 
	static JButton view;
	static JTextField text;
	public static void main(String args[])
	{
		JFrame frame=new JFrame("Login");
		frame.setSize(400,400);
		frame.setLayout(null);
		frame.setBackground(Color.white);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		JLabel l_name=new JLabel("Name :");
		JLabel l_pswd=new JLabel("Password :");
		l_name.setBounds(50,50,50,50);
		l_pswd.setBounds(20,100,80,50);
		frame.add(l_name);
		frame.add(l_pswd);
		name=new JTextField();
		pswd=new JPasswordField();
		name.setBounds(100,50,250,50);
		pswd.setBounds(100,100,250,50);
		frame.add(name);
		frame.add(pswd);
		view=new JButton("View");
		view.setBounds(150,200,100,50);
		frame.add(view);
		text=new JTextField();
		text.setBounds(0,250,400,50);
		frame.add(text);
		Login obj=new Login();
		view.addActionListener(obj);
		frame.setVisible(true);
	}
	public void actionPerformed(ActionEvent e)
	{
		String pass=String.valueOf(pswd.getPassword());
		text.setText("Username = "+name.getText());
		text.setText(text.getText()+" Password = "+pass);
	}
}
                `,
                comeout : null
            },
            {
                problem : `3. Java Program to Create a Button and Display Image in the Frame when Clicked`,
                solution : `
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class event {
    static JFrame frame;

    public static void main(String[] args) {
        frame = new JFrame("Button Image");
        frame.setSize(500, 500);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().setBackground(Color.white);
        frame.setLayout(new FlowLayout());

        JButton button = new JButton("Display");
        frame.add(button);

        button.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                ImageIcon icon = new ImageIcon("logo.jpeg");
                JLabel label = new JLabel(icon);
                frame.add(label);
                frame.pack();
                frame.setSize(500, 500);
            }
        });

        frame.setVisible(true);
    }
}
                `,
                comeout : null
            },
            {
                problem : `4. Java Program to Create 2 Radio Buttons and Display Selected Button Label`,
                solution : `
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
class Radio_Button implements ActionListener
{
	static JRadioButton yes;
	static JRadioButton no;
	static JTextField text;
	
	public static void main(String args[])
	{
		//Create a frame
		JFrame frame=new JFrame("Radio Button");
		frame.setSize(500,500);
		frame.setLayout(null);
		frame.setBackground(Color.white);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		text=new JTextField();
		text.setBounds(0,0,500,50);
		frame.add(text);
		
		yes=new JRadioButton("Yes");
		no=new JRadioButton("No");
		yes.setBounds(210,100,80,60);
		no.setBounds(210,200,80,60);
		frame.add(yes);
		frame.add(no);
		
		Radio_Button obj=new Radio_Button();
		
		yes.addActionListener(obj);
		no.addActionListener(obj);
		//Display the frame
		frame.setVisible(true);
	}
	
	public void actionPerformed(ActionEvent e)
	{
		String b=e.getActionCommand();		
		if(b.equals("Yes"))
		{
			if(no.isSelected())
				no.setSelected(false);
		}
		else
		{
			if(yes.isSelected())
				yes.setSelected(false);
		}
		text.setText("Label of Button Selected : "+b);
	}
}
                `,
                comeout : null
            },
            {
                problem : `5. Java Program to Handle KeyBoardEvent`,
                solution : `
// Java Program to Handle KeyBoardEvent
import java.awt.*;
import java.awt.event.*;

class Main implements KeyListener {
    static Frame frame;
    static TextField tf1;
    static TextField tf2;

    // Driver function
    public static void main(String args[]) {
        frame = new Frame("Keyboard Event");
        frame.setSize(500, 500);
        frame.setLayout(null);

        tf1 = new TextField();
        tf1.setBounds(150, 100, 500, 50);

        tf2 = new TextField();
        tf2.setBounds(140, 400, 500, 50);

        Main obj = new Main();

        tf2.addKeyListener(obj);
        frame.addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent w) {
                frame.dispose();
            }
        });
        frame.setVisible(true);
        frame.add(tf1);
        frame.add(tf2);
    }

    public void keyReleased(KeyEvent e) {
        tf1.setText("");
        tf1.setText("Key Released : " + e.getKeyCode());        
        System.out.println("Key Released");
    }

    // function to display the unicode of key pressed and the character if it is a letter or a digit
    public void keyPressed(KeyEvent e) {
        tf1.setText("");
        tf1.setText("Key Pressed : " + e.getKeyCode());
        System.out.println("Key Pressed");
    }

    // function to display the character of the key typed
    public void keyTyped(KeyEvent e) {
        tf1.setText("");
        tf1.setText("Key Typed : " + e.getKeyChar());
    System.out.println("Key Typed");
    }
}
                `,
                comeout : null
            },
            {
                problem : `6. Java Program to Handle MouseEvent`,
                solution : `
import java.awt.*;
import java.awt.event.*;

class mouseevent extends Frame implements MouseListener{
Button b1,b2;

mouseevent(){
b1= new Button("ok");
b2= new Button("cancel");
setLayout(new FlowLayout());
add(b1); add(b2);

b1.addMouseListener(this);

b2.addMouseListener(this);
setSize(500,400);
setVisible(true);
}

public static void main(String s[]){
new mouseevent();
}

public  void mouseClicked(java.awt.event.MouseEvent me){System.out.println("button clicked");}
public  void mousePressed(java.awt.event.MouseEvent me){System.out.println("button pressed");}
public  void mouseReleased(java.awt.event.MouseEvent me){System.out.println("button released");}
public  void mouseEntered(java.awt.event.MouseEvent me){System.out.println("button eneterd");}
public  void mouseExited(java.awt.event.MouseEvent me){System.out.println("button exited");}
}
                `,
                comeout : null
            },
            {
                problem : `7. Java Program to Get and Set State and Get Label of a Check Box`,
                solution : `
                import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
class Check_Box implements ActionListener
{
	static JTextField text;
	static Checkbox checkbox;
	
	public static void main(String args[])
	{
		//Create a frame
		JFrame frame=new JFrame("Check Box");
		frame.setSize(500,500);
		frame.setBackground(Color.white);
		frame.setLayout(null);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		text=new JTextField();
		text.setBounds(0,0,500,50);
		frame.add(text);
		
		JButton get_st=new JButton("Get State");
		JButton set_st=new JButton("Set State");
		JButton get_lb=new JButton("Get Label");
		get_st.setBounds(50,80,100,50);
		set_st.setBounds(180,80,100,50);
		get_lb.setBounds(310,80,100,50);
		frame.add(get_st);
		frame.add(set_st);
		frame.add(get_lb);
		
		Check_Box obj=new Check_Box();
		
		get_st.addActionListener(obj);
		set_st.addActionListener(obj);
		get_lb.addActionListener(obj);
		
		checkbox=new Checkbox("Sample Checkbox");
		checkbox.setBounds(150,200,200,80);
		frame.add(checkbox);
		//Display the frame
		frame.setVisible(true);
	}
	
        @Override
	public void actionPerformed(ActionEvent e)
	{
		String option=e.getActionCommand();
		if(option.equals("Get State"))
			get_State();
		else if(option.equals("Set State"))
			set_State();
		else
			get_Label();
	}
	
	public void get_State()
	{
		boolean state=checkbox.getState();
		if(state==true)
			text.setText("State of Checkbox : Checked");
		else
			text.setText("State of Checkbox : Un-Checked");
	}
	
	public void set_State()
	{
                text.setText("State of Checkbox changed from ");
		boolean state=checkbox.getState();
		if(state==true)
		{
			checkbox.setState(false);
			text.setText(text.getText()+"Checked to Un-Checked");
		}
		else
		{
			checkbox.setState(true);
			text.setText(text.getText()+"Un-Checked to Checked");
		}
	}
	
	public void get_Label()
	{
		text.setText("Label of the checkbox is : ");
                text.setText(text.getText()+checkbox.getLabel());	
	}
}
                `,
                comeout : null
            },
            {
                problem : `8. Java Program to Create Check Boxes and Radio Buttons`,
                solution : `
                import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
class Button_Checkbox implements ActionListener,ItemListener
{
    static JFrame frame;
    static JLabel text1,text2;
    static JCheckBox[] checkbox;
    static JRadioButton[] button;
    
    public static void main(String args[])
    {
      
	frame=new JFrame("Buttons & Checkboxes");
	frame.setSize(600,600);
	frame.setLayout(null);
	frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	frame.getContentPane().setBackground(Color.white);
	
	text1=new JLabel("");
	text1.setBounds(0,450,600,50);
	frame.add(text1);
	text2=new JLabel("");
	text2.setBounds(0,500,600,50);
	frame.add(text2);
	
	Button_Checkbox obj=new Button_Checkbox();
	
	button=new JRadioButton[3];
	for(int i=0;i<3;i++)
	{
		button[i]=new JRadioButton("Button "+(i+1));
		button[i].setBounds(200,i*80,100,50);
		frame.add(button[i]);
		button[i].addActionListener(obj);
	}
	
	checkbox=new JCheckBox[3];
	for(int i=0;i<3;i++)
	{
		checkbox[i]=new JCheckBox("Checkbox"+(i+1));
		checkbox[i].setBounds(220,(240)+i*80,100,50);
		frame.add(checkbox[i]);
		checkbox[i].addItemListener(obj);
	}
	
	frame.setVisible(true);
    }
   
    public void actionPerformed(ActionEvent e)
    {
        String s="";
	for(int i=0;i<3;i++)
	{
	    if(button[i].isSelected())
	        s=s+" "+button[i].getText();
	}
	text1.setText("Button(s) Selected : "+" "+s);
    }
   
    public void itemStateChanged(ItemEvent e)
    {
        String s="";
	for(int i=0;i<3;i++)
	{	
	    if(checkbox[i].isSelected())
	        s=s+" "+checkbox[i].getText();				
	}
	text2.setText("Checkbox(s) Selected : "+s);	
    }
}
                `,
                comeout : null
            },
            {
                problem : `9. Java Program to Create and Switch between Frames using Buttons`,
                solution : null,
                comeout : null
            },
            {
                problem : `10. Java Program to Create and Set Border to Push Buttons`,
                solution : `
import java.applet.*;
import java.awt.*;
import java.awt.event.*;
public class DELEGATIONEVENTMODEL7104prog17 extends Applet implements ActionListener {
    /*
    Topic = DELEGATION EVENT MODEL
    prog.no 17 Java Program to Change the Applet Background Colour when Button Clicked
*/    Button b1;
    Color[] c = { Color.RED, Color.GREEN, Color.BLUE, Color.YELLOW };
    int bgcolor = 0;

    @Override
    public void init() {
        b1 = new Button("Change Color");
        b1.addActionListener(this);
        add(b1);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        if (bgcolor < c.length - 1) {
            bgcolor++;
        } else {
            bgcolor = 0;
        }
        setBackground(c[bgcolor]);
    }

}
                `,
                comeout : null
            },
            {
                problem : `11. Java Program to Create a List Box to Select Multiple Items and Display it in the Frame`,
                solution : null,
                comeout : null
            },
            {
                problem : `12. Java Program to Display a Message in a New Frame`,
                solution : `
import javax.swing.*;
import java.awt.event.*;
import java.awt.*;
class Message implements ActionListener
{
  
    public static void main(String args[])
    {
	
	JFrame frame = new JFrame("Original Frame");
	frame.setSize(300,300);
	frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
 
	
	Message obj = new Message();
 
	
	JButton button = new JButton("View Message");
	frame.add(button);
	button.addActionListener(obj);
 
	
	frame.setVisible(true);
    }
   
    public void actionPerformed(ActionEvent e)
    {
	
	JFrame sub_frame = new JFrame("Sub Frame");
	sub_frame.setSize(200,200);
 
	
	JLabel label = new JLabel("!!! Hello !!!");
	sub_frame.add(label);
 
	
	sub_frame.setVisible(true);
    }
}
                `,
                comeout : null
            },
            {
                problem : `13. Java Program to Close the Frame using WindowAdapter Class`,
                solution : `
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
class Window_Adapter extends WindowAdapter
{
    static JFrame frame;
    
    public static void main(String args[])
    {
      
        frame=new JFrame("Window Adapter Class");
        frame.setBackground(Color.white);
        frame.setSize(500,500);
      
        Window_Adapter obj=new Window_Adapter();
       
        frame.addWindowListener(obj);
        frame.setVisible(true);
    }
   
    @Override
    public void windowClosing(WindowEvent e)
    {   
        System.out.println("Status of frame : Closing");
        windowClosed(e);
    }
   
    @Override
    public void windowClosed(WindowEvent e)
    {
        frame.dispose();
    }
  
    @Override
    public void windowIconified(WindowEvent e)
    {
        System.out.println("Status of frame : Iconified");
    }
    
    @Override
    public void windowDeiconified(WindowEvent e)
    {
        System.out.println("Status of frame : Deiconfied");
    }
  
    @Override
    public void windowActivated(WindowEvent e)
    {
        System.out.println("Status of frame : Activated");
    }
   
    @Override
    public void windowDeactivated(WindowEvent e)
    {
        System.out.println("Status of frame : Deactivated");
    }
   
    @Override
    public void windowOpened(WindowEvent e)
    {
        System.out.println("Status of frame : Opened");
    }
}
                `,
                comeout : null
            },
            {
                problem : `14. Java Program to Check Which Fonts are Available in a Local System`,
                solution : `
import java.awt.GraphicsEnvironment;
class Fonts_Available
{	
	public static void main(String[] args)
	{		
		GraphicsEnvironment local_env; 
                local_env= GraphicsEnvironment.getLocalGraphicsEnvironment();		
		String allfonts[] = local_env.getAvailableFontFamilyNames();		
		for(int i=0;i<allfonts.length;i++)
			System.out.println(allfonts[i]);
	}
}
                `,
                comeout : null
            },
            {
                problem : `15. Java Program to Display Text in Different Fonts`,
                solution : `
                
                `,
                comeout : null
            },
            {
                problem : `16. Java Program to Change Frame Background Color as Cyan`,
                solution : null,
                comeout : null
            },
            {
                problem : `17. Java Program to Change the Applet Background Colour when Button Clicked`,
                solution : `
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
class Check_Box implements ActionListener
{
	static JTextField text;
	static Checkbox checkbox;
	
	public static void main(String args[])
	{
		//Create a frame
		JFrame frame=new JFrame("Check Box");
		frame.setSize(500,500);
		frame.setBackground(Color.white);
		frame.setLayout(null);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		text=new JTextField();
		text.setBounds(0,0,500,50);
		frame.add(text);
		
		JButton get_st=new JButton("Get State");
		JButton set_st=new JButton("Set State");
		JButton get_lb=new JButton("Get Label");
		get_st.setBounds(50,80,100,50);
		set_st.setBounds(180,80,100,50);
		get_lb.setBounds(310,80,100,50);
		frame.add(get_st);
		frame.add(set_st);
		frame.add(get_lb);
		
		Check_Box obj=new Check_Box();
		
		get_st.addActionListener(obj);
		set_st.addActionListener(obj);
		get_lb.addActionListener(obj);
		
		checkbox=new Checkbox("Sample Checkbox");
		checkbox.setBounds(150,200,200,80);
		frame.add(checkbox);
		//Display the frame
		frame.setVisible(true);
	}
	
        @Override
	public void actionPerformed(ActionEvent e)
	{
		String option=e.getActionCommand();
		if(option.equals("Get State"))
			get_State();
		else if(option.equals("Set State"))
			set_State();
		else
			get_Label();
	}
	
	public void get_State()
	{
		boolean state=checkbox.getState();
		if(state==true)
			text.setText("State of Checkbox : Checked");
		else
			text.setText("State of Checkbox : Un-Checked");
	}
	
	public void set_State()
	{
                text.setText("State of Checkbox changed from ");
		boolean state=checkbox.getState();
		if(state==true)
		{
			checkbox.setState(false);
			text.setText(text.getText()+"Checked to Un-Checked");
		}
		else
		{
			checkbox.setState(true);
			text.setText(text.getText()+"Un-Checked to Checked");
		}
	}
	
	public void get_Label()
	{
		text.setText("Label of the checkbox is : ");
                text.setText(text.getText()+checkbox.getLabel());	
	}
}
                `,
                comeout : null
            },
            {
                problem : `18. Java Program to Display Several Dots on the Screen Continuously`,
                solution : null,
                comeout : null
            },
            {
                problem : `19. Java Program to Validate the TextField for only entering numbers using KeyListener`,
                solution : null,
                comeout : null
            },
            {    
                problem : `20. Java Program to Validate the TextField for only entering email id using KeyAdapte`,
                solution : null,
                comeout : null
            }
        ]
    // programData6 : delegation event model

    document.title = `MayankDevil`
}
catch (error)
{
    console.log(`${error}`)    
}
// the end